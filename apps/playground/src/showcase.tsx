import type * as React from "react";

export function Sample({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border p-5">
      <div className="flex flex-col gap-0.5">
        <h3 className="font-medium text-sm">{title}</h3>
        {description ? <p className="text-muted-foreground text-xs">{description}</p> : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">{children}</div>
    </div>
  );
}

export function Page({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}
