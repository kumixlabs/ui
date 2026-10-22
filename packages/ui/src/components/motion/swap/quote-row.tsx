"use client";

import { Loader2 } from "lucide-react";

import type { Token } from "./types";
import { formatAmount } from "./utils";

export function QuoteRow({
  from,
  to,
  rate,
  fee,
  slippage,
  eta,
  quoting,
}: {
  from: Token;
  to: Token;
  rate: number;
  fee: number;
  slippage: number;
  eta: string;
  quoting: boolean;
}) {
  return (
    <div className="border-border/50 bg-background/40 mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-xl border px-3.5 py-2.5 text-[11px]">
      <span className="text-muted-foreground">Rate</span>
      <span className="text-foreground text-right tabular-nums">
        {quoting ? (
          <Loader2 className="text-muted-foreground ml-auto inline h-3 w-3 animate-spin" />
        ) : (
          <>
            1 {from.symbol} ≈ {formatAmount(rate)} {to.symbol}
          </>
        )}
      </span>
      <span className="text-muted-foreground">Network fee</span>
      <span className="text-foreground text-right tabular-nums">${fee.toFixed(2)}</span>
      <span className="text-muted-foreground">Slippage</span>
      <span className="text-foreground text-right tabular-nums">{slippage.toFixed(2)}%</span>
      <span className="text-muted-foreground">ETA</span>
      <span className="text-foreground text-right">{eta}</span>
    </div>
  );
}
