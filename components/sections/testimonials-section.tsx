"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Davis",
    role: "Member for 2 years",
    content:
      "Joining PowerFit was one of the best decisions I've made for my health. I've lost 45 pounds and gained so much confidence. The trainers are incredible and the community keeps me motivated every day.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Member for 1 year",
    content:
      "After trying numerous gyms over the years, PowerFit is the first one where I've actually stuck with my routine. The variety of classes keeps things interesting, and the trainers genuinely care about your progress.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Member for 6 months",
    content:
      "The personal training program at PowerFit has completely transformed my approach to fitness. My trainer customized everything to work with my busy schedule and previous injuries, and I'm seeing results I never thought possible.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Jennifer Williams",
    role: "Member for 3 years",
    content:
      "As someone who was intimidated by gyms, PowerFit's welcoming atmosphere made all the difference. The nutrition guidance alongside my workouts has helped me completely transform my lifestyle and health.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="section-subtitle">
            Hear from our members who have transformed their lives through dedication,
            expert guidance, and the PowerFit community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full card-hover">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-primary fill-primary" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-foreground/90 italic">"{testimonial.content}"</p>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="relative -left-4" />
              <CarouselNext className="relative -right-4" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}