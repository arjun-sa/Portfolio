import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

export default function NavBar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            Portfolio
          </a>
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href 
                    ? "text-primary" 
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}