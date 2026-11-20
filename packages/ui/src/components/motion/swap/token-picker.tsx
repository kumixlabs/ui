"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@kumix/utils";
import { SPRING_PANEL } from "../../../lib/ease";
import { useMessages } from "../../../lib/i18n";
import { EASE } from "./constants";
import { type SwapMessages, swapMessages } from "./messages";
import { ChainChip, TokenDot } from "./token-badges";
import type { Chain, Token, TokenSide } from "./types";
import { formatAmount } from "./utils";

export function TokenPicker({
  open,
  side,
  chains,
  tokens,
  selectedId,
  onPick,
  onClose,
  reduce,
  labels,
}: {
  open: boolean;
  side: TokenSide | null;
  chains: Chain[];
  tokens: Token[];
  selectedId: string;
  onPick: (id: string) => void;
  onClose: () => void;
  reduce: boolean;
  labels?: Partial<SwapMessages>;
}) {
  const t = useMessages("swap", swapMessages, labels);
  const [chainFilter, setChainFilter] = useState("all");
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQ("");
    requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const popular = useMemo(() => tokens.filter((token) => token.popular).slice(0, 6), [tokens]);
  const chainById = useMemo(() => new Map(chains.map((chain) => [chain.id, chain])), [chains]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return tokens.filter((token) => {
      if (chainFilter !== "all" && token.chainId !== chainFilter) return false;
      if (!needle) return true;
      const chain = chainById.get(token.chainId);
      return [token.symbol, token.name, chain?.name, token.address].some((h) =>
        h?.toLowerCase().includes(needle),
      );
    });
  }, [q, chainFilter, tokens, chainById]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            key="backdrop"
            type="button"
            aria-label={t("close")}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="bg-background/40 absolute inset-0 z-10 cursor-default backdrop-blur-sm"
          />

          <motion.div
            key="sheet"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: "100%" }}
            transition={reduce ? { duration: 0.18, ease: EASE } : SPRING_PANEL}
            className="border-border bg-card absolute inset-x-0 bottom-0 z-20 flex max-h-[92%] flex-col rounded-t-3xl border-t shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={t(side === "from" ? "selectFromToken" : "selectToToken")}
          >
            <div className="flex justify-center pt-2.5 pb-1">
              <span className="bg-muted h-1 w-9 rounded-full" />
            </div>

            <div className="border-border flex items-center gap-2 border-b px-4 pb-3">
              <Search className="text-muted-foreground h-4 w-4 shrink-0" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="text-foreground placeholder:text-muted-foreground/70 w-full bg-transparent text-sm outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label={t("close")}
                className="text-muted-foreground hover:bg-muted/60 hover:text-foreground inline-flex h-7 w-7 items-center justify-center rounded-full"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="border-border flex [scrollbar-width:none] items-center gap-1.5 overflow-x-auto border-b px-3 py-5 [&::-webkit-scrollbar]:hidden">
              <ChainChip
                active={chainFilter === "all"}
                onClick={() => setChainFilter("all")}
                label={t("allChains")}
              />
              {chains.map((c) => (
                <ChainChip
                  key={c.id}
                  active={chainFilter === c.id}
                  onClick={() => setChainFilter(c.id)}
                  chain={c}
                />
              ))}
            </div>

            <div className="flex-1 overflow-y-auto px-3 pt-3 pb-4">
              {!q && chainFilter === "all" ? (
                <>
                  <p className="text-muted-foreground px-1 pb-2 text-[11px] font-semibold tracking-wider uppercase">
                    {t("popular")}
                  </p>
                  <div className="flex [scrollbar-width:none] items-center gap-1.5 overflow-x-auto pb-3 [&::-webkit-scrollbar]:hidden">
                    {popular.map((token) => {
                      const chain = chainById.get(token.chainId);
                      if (!chain) return null;
                      return (
                        <button
                          key={token.id}
                          type="button"
                          onClick={() => onPick(token.id)}
                          className="border-border bg-background/50 text-foreground hover:border-border inline-flex shrink-0 items-center gap-2 rounded-full border py-1 pr-3 pl-1 text-sm font-semibold transition-transform active:scale-[0.97]"
                        >
                          <TokenDot token={token} chain={chain} size={22} />
                          {token.symbol}
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : null}

              <p className="text-muted-foreground px-1 pb-1.5 text-[11px] font-semibold tracking-wider uppercase">
                {q ? t("results") : chainFilter === "all" ? t("trending") : t("tokens")}
              </p>
              <ul className="flex flex-col gap-0.5">
                {filtered.length === 0 ? (
                  <li className="text-muted-foreground py-8 text-center text-xs">{t("empty")}</li>
                ) : null}
                {filtered.map((token) => {
                  const chain = chainById.get(token.chainId);
                  if (!chain) return null;
                  const active = token.id === selectedId;
                  return (
                    <li key={token.id}>
                      <button
                        type="button"
                        onClick={() => onPick(token.id)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-2 py-2 text-left transition-colors active:scale-[0.97]",
                          active ? "bg-muted/60" : "hover:bg-muted/60",
                        )}
                      >
                        <span className="flex min-w-0 items-center gap-2.5">
                          <TokenDot token={token} chain={chain} size={32} />
                          <span className="flex min-w-0 flex-col">
                            <span className="text-foreground truncate text-sm font-semibold">
                              {token.name}
                            </span>
                            <span className="text-muted-foreground truncate text-[11px]">
                              {token.symbol}
                            </span>
                          </span>
                        </span>
                        <span className="text-muted-foreground shrink-0 text-right text-[11px] tabular-nums">
                          {token.address ?? (token.balance ? formatAmount(token.balance) : "")}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
