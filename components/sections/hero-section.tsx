"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90" />
      
      <div className="container-custom relative z-10 pt-28 pb-16 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
              <span className="gradient-text">Transform</span> Your Body,{" "}
              <span className="gradient-text">Elevate</span> Your Life
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Join PowerFit and discover a new level of fitness with our expert trainers,
              state-of-the-art equipment, and personalized programs designed for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-hover text-lg py-6 px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="btn-hover text-lg py-6 px-8">
                Book a Tour
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-pink-500/20 rounded-lg blur-xl" />
              <div className="bg-card rounded-lg p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-md p-4 text-center">
                    <h3 className="text-4xl font-bold mb-1 gradient-text">75+</h3>
                    <p className="text-sm text-foreground/70">Weekly Classes</p>
                  </div>
                  <div className="bg-secondary rounded-md p-4 text-center">
                    <h3 className="text-4xl font-bold mb-1 gradient-text">12k+</h3>
                    <p className="text-sm text-foreground/70">Happy Members</p>
                  </div>
                  <div className="bg-secondary rounded-md p-4 text-center">
                    <h3 className="text-4xl font-bold mb-1 gradient-text">25+</h3>
                    <p className="text-sm text-foreground/70">Expert Trainers</p>
                  </div>
                  <div className="bg-secondary rounded-md p-4 text-center">
                    <h3 className="text-4xl font-bold mb-1 gradient-text">98%</h3>
                    <p className="text-sm text-foreground/70">Success Rate</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-secondary rounded-md p-5">
                  <h4 className="font-bold text-lg mb-2">Next Class Today:</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">HIIT Training</p>
                      <p className="text-sm text-foreground/70">6:00PM - 7:00PM</p>
                    </div>
                    <Button size="sm" className="btn-hover">
                      Reserve
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <a
              href="#services"
              className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Discover More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}