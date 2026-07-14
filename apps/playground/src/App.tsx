import { useEffect, useState } from "react";

import { Label, Switch } from "@kumix/ui";
import { Logo } from "./logo";
import { pages } from "./registry";

import "./App.css";

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash.slice(1) || pages[0].slug);

  useEffect(() => {
    const onChange = () => setHash(window.location.hash.slice(1) || pages[0].slug);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return hash;
}

function App() {
  const [dark, setDark] = useState(false);
  const slug = useHashRoute();
  const active = pages.find((p) => p.slug === slug) ?? pages[0];
  const ActivePage = active.component;

  return (
    <div className={dark ? "dark" : ""}>
      <div className="flex h-screen overflow-hidden bg-background text-foreground">
        <aside className="flex h-screen w-60 shrink-0 flex-col border-border border-r">
          <div className="flex shrink-0 items-center justify-between border-border border-b p-4">
            <div className="flex items-center gap-1.5">
              <Logo />
              <span className="font-semibold">
                Kumix <span className="font-bold text-primary">UI</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Label htmlFor="theme" className="text-xs">
                Dark
              </Label>
              <Switch id="theme" checked={dark} onCheckedChange={setDark} />
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-4">
            {pages.map((page) => (
              <a
                key={page.slug}
                href={`#${page.slug}`}
                data-active={page.slug === active.slug}
                className="rounded-md px-3 py-1.5 text-muted-foreground text-sm hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:font-medium data-[active=true]:text-accent-foreground"
              >
                {page.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1 overflow-auto p-10">
          <div className="mx-auto max-w-4xl">
            <ActivePage />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
