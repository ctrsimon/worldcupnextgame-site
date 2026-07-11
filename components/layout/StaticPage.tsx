import { Footer } from "./Footer";
import { Header } from "./Header";

export function StaticPage({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <><Header /><main className="static-page"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="prose">{children}</div></main><Footer /></>;
}
