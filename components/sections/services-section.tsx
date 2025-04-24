"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Users, Heart, UtensilsCrossed, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
    title: "Personal Training",
    description:
      "One-on-one sessions with expert trainers tailored to your specific goals and fitness level.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Group Classes",
    description:
      "High-energy group workouts including HIIT, spinning, yoga, and strength training for all levels.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Cardio Programs",
    description:
      "State-of-the-art equipment and structured cardio programs to improve endurance and heart health.",
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: "Nutrition Planning",
    description:
      "Personalized nutrition plans designed by our certified nutritionists to complement your training.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Fitness Assessment",
    description:
      "Comprehensive fitness evaluations with regular progress tracking to optimize your results.",
  },
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: "Premium Facilities",
    description:
      "Access to our luxury facilities including sauna, recovery rooms, and premium equipment.",
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

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
          <p className="section-subtitle">
            We offer a comprehensive range of fitness services to help you achieve your goals,
            whether you're just starting your fitness journey or looking to take it to the next level.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}