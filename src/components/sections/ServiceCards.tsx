"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ServiceCards = () => {
  const services = [
    {
      title: "Residential Solar",
      description: "Custom solar solutions for homes, designed to maximize energy savings and environmental impact.",
      icon: "🏠",
    },
    {
      title: "Commercial Solar",
      description: "Comprehensive solar installations for businesses, reducing operational costs and carbon footprint.",
      icon: "🏢",
    },
    {
      title: "Energy Storage",
      description: "Advanced battery solutions to store excess solar energy for use when you need it most.",
      icon: "🔋",
    },
    {
      title: "System Monitoring",
      description: "Real-time monitoring and analytics to ensure optimal performance of your solar installation.",
      icon: "📊",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Solar Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of solar energy solutions designed to
            power your future sustainably.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-2xl">
                  {service.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-primary-600 hover:text-primary-700 hover:bg-primary-50 p-0"
                  >
                    Learn more →
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-100 rounded-2xl transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;
