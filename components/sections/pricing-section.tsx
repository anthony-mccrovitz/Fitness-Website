"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    name: "Basic",
    price: 49,
    description: "Perfect for beginners getting started on their fitness journey.",
    features: [
      "Access to gym facilities (6AM-10PM)",
      "2 group classes per week",
      "Fitness assessment",
      "Basic equipment access",
      "Locker room access",
    ],
    buttonText: "Start Basic Plan",
  },
  {
    name: "Premium",
    price: 89,
    description: "Our most popular plan for fitness enthusiasts and regular gym-goers.",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "1 personal training session/month",
      "Full equipment access",
      "Nutrition consultation",
      "Access to sauna & recovery rooms",
    ],
    buttonText: "Choose Premium Plan",
    highlighted: true,
  },
  {
    name: "Elite",
    price: 129,
    description: "The ultimate fitness experience for those serious about reaching their goals.",
    features: [
      "24/7 gym access",
      "Unlimited group classes",
      "4 personal training sessions/month",
      "Custom nutrition planning",
      "Monthly progress assessment",
      "Priority class booking",
      "VIP recovery room access",
    ],
    buttonText: "Get Elite Plan",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Membership <span className="gradient-text">Plans</span></h2>
          <p className="section-subtitle">
            Choose the plan that fits your lifestyle and fitness goals. All memberships include access to our mobile app for tracking your progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col card-hover ${plan.highlighted ? 'relative border-primary shadow-lg' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary hover:bg-primary/90">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className={plan.highlighted ? 'pt-8' : ''}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full btn-hover ${plan.highlighted ? 'bg-primary hover:bg-primary/90' : ''}`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}