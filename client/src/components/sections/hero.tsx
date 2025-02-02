import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Computer Science Student
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Passionate about building elegant solutions to complex problems
        </p>
        <Link href="/projects">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
