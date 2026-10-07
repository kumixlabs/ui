"use client";

import { useId } from "react";
import { ChevronDown, Loader2, Wallet } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { EASE } from "./constants";
import { TokenDot } from "./token-badges";
import type { Chain, Token, TokenSide } from "./types";
import { formatAmount, sanitizeAmount } from "./utils";

export function Field({
  side,
  token,
  chain,
  amount,
  onAmount,
  editable,
  quoting,
  onOpenPicker,
}: {
  side: TokenSide;
  token: Token;
  chain: Chain;
  amount: string;
  onAmount?: (v: string) => void;
  editable: boolean;
  quoting: boolean;
  onOpenPicker: () => void;
}) {
  const id = useId();
  const usdValue = (Number(amount) || 0) * (token.usd ?? 0);

  return (
    <div className="relative rounded-2xl border border-border/50 bg-background/40 p-3.5">
      <label
        htmlFor={id}
        className="mb-2 block font-medium text-[11px] text-muted-foreground uppercase tracking-wider"
      >
        {side === "from" ? "You pay" : "You get"}
      </label>

      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          {editable ? (
            <input
              id={id}
              inputMode="decimal"
              value={amount}
              onChange={(e) => onAmount?.(sanitizeAmount(e.target.value))}
              placeholder="0"
              className="w-full bg-transparent font-semibold text-2xl text-foreground tabular-nums tracking-tight outline-none placeholder:text-muted-foreground/60"
            />
          ) : (
            <div className="flex h-9 items-center gap-2 font-semibold text-2xl tabular-nums tracking-tight">
              <motion.span
                animate={{
                  opacity: quoting ? 0.55 : 1,
                  filter: quoting ? "blur(2px)" : "blur(0px)",
                }}
                transition={{ duration: 0.18, ease: EASE }}
                className="text-foreground"
              >
                {amount || "0"}
              </motion.span>
              <AnimatePresence>
                {quoting ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.14, ease: EASE }}
                  >
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </div>
          )}
          <p className="mt-1 text-[11px] text-muted-foreground tabular-nums">
            ≈ ${formatAmount(usdValue, 2)}
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenPicker}
          className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card pr-2.5 pl-1 font-semibold text-foreground text-sm transition-transform hover:border-border active:scale-[0.97]"
        >
          <TokenDot token={token} chain={chain} />
          <span>{token.symbol}</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Wallet className="h-3 w-3" />
          <span className="tabular-nums">
            {token.balance ? formatAmount(token.balance) : "0.00"}
          </span>
          <span>· {chain.name}</span>
        </span>
        {side === "from" && token.balance ? (
          <button
            type="button"
            onClick={() => onAmount?.(String(token.balance))}
            className="rounded px-1.5 py-0.5 font-semibold text-[10px] text-muted-foreground uppercase tracking-wider hover:bg-muted/60 hover:text-foreground"
          >
            Max
          </button>
        ) : null}
      </div>
    </div>
  );
}
