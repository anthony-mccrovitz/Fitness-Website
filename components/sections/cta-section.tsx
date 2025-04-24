"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-background via-background to-background/80 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Life?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            Join now and get your first month at 50% off, plus a free fitness assessment and personalized workout plan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hover text-lg py-6 px-8">
              Start Your Journey Today
            </Button>
            <Button size="lg" variant="outline" className="btn-hover text-lg py-6 px-8">
              Schedule a Tour
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">No Long-Term Contracts</p>
                <p className="text-sm text-muted-foreground">Month-to-month memberships available</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium">30-Day Money-Back Guarantee</p>
                <p className="text-sm text-muted-foreground">If you're not satisfied for any reason</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}