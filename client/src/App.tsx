import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import NavBar from "@/components/nav-bar";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { useEffect } from "react";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.toggle("dark", isDark);
    document.body.style.colorScheme = isDark ? "dark" : "light";
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <NavBar />
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;