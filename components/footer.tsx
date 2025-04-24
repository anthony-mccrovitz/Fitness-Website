"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dumbbell, Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="bg-card border-t">
      <div className="container-custom">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <Link href="#home" className="flex items-center space-x-2 text-primary">
                <Dumbbell size={32} className="text-primary" />
                <span className="text-xl font-montserrat font-bold">PowerFit</span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs">
                Transforming lives through expert training, state-of-the-art facilities, and a
                passionate community dedicated to your success.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#home"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Membership
                  </Link>
                </li>
                <li>
                  <Link
                    href="#trainers"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Trainers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-4">Classes</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    HIIT Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Strength & Conditioning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Yoga & Pilates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cardio Kickboxing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Senior Fitness
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Privacy Policy and consent to receive updates from
                  our company.
                </p>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="py-6 border-t text-sm text-center text-muted-foreground">
          <p>
            © {currentYear} PowerFit. All rights reserved. <span className="mx-2">|</span>{" "}
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>{" "}
            <span className="mx-2">|</span>{" "}
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}