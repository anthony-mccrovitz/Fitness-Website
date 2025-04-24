"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const trainers = [
  {
    name: "Alex Morgan",
    position: "Head Trainer, Strength Specialist",
    bio: "10+ years experience in strength training and athletic performance. Certified in NASM, CrossFit Level 3, and TRX.",
    image: "https://images.pexels.com/photos/6456303/pexels-photo-6456303.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jessica Kim",
    position: "Nutrition Coach, Yoga Instructor",
    bio: "Specialized in holistic wellness, nutrition planning, and mind-body connection. Certified nutritionist and 500hr yoga teacher.",
    image: "https://images.pexels.com/photos/5327538/pexels-photo-5327538.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Marcus Johnson",
    position: "HIIT & Cardio Specialist",
    bio: "Former professional athlete specializing in high-intensity interval training, athletic conditioning, and weight management.",
    image: "https://images.pexels.com/photos/5384436/pexels-photo-5384436.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sophia Rodriguez",
    position: "Rehabilitation & Mobility Expert",
    bio: "Physical therapist background with expertise in injury prevention, mobility work, and functional movement patterns.",
    image: "https://images.pexels.com/photos/6456151/pexels-photo-6456151.jpeg?auto=compress&cs=tinysrgb&w=600",
    socialLinks: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TrainersSection() {
  return (
    <section id="trainers" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Meet Our <span className="gradient-text">Expert Trainers</span></h2>
          <p className="section-subtitle">
            Our certified professionals are dedicated to helping you achieve your fitness goals
            through personalized guidance and expertise.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {trainers.map((trainer, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full card-hover">
                <CardHeader className="pt-6 pb-4">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-28 w-28">
                      <AvatarImage src={trainer.image} alt={trainer.name} />
                      <AvatarFallback>{trainer.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-center text-xl">{trainer.name}</CardTitle>
                  <CardDescription className="text-center text-sm">{trainer.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{trainer.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center space-x-4 pt-2">
                  <a 
                    href={trainer.socialLinks.instagram} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href={trainer.socialLinks.twitter} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href={trainer.socialLinks.linkedin} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-hover">
            View All Trainers
          </Button>
        </div>
      </div>
    </section>
  );
}