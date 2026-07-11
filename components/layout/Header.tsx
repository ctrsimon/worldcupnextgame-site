import Link from "next/link";
export function Header() { return <header className="site-header"><Link href="/" className="brand">WC<span>NG</span></Link><nav aria-label="Main navigation"><Link href="/schedule">Schedule</Link><Link href="/today">Today</Link><Link href="/about">About</Link></nav></header>; }
