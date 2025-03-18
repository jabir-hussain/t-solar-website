"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-50">
      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary-600 font-medium"
              >
                Solar & wind energy
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              >
                Best solution of
                <br />
                Solar and wind
                <br />
                Energy
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-[600px] text-gray-500 md:text-xl"
              >
                Professionally explore high-payoff information through
                sustainable installation.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white rounded-full"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary-500 text-primary-500 hover:bg-primary-50"
              >
                Free Consultation
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-video rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-primary-500">Image Placeholder</p>
              </div>
            </div>
            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                position: "absolute",
                bottom: "-24px",
                left: "50%",
                x: "-50%",
                width: "90%",
                maxWidth: "400px"
              }}
              className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-2 gap-8"
            >
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="text-2xl font-bold text-primary-500"
                >
                  126+
                </motion.p>
                <p className="text-sm text-gray-600">Energy Solutions</p>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="text-2xl font-bold text-primary-500"
                >
                  11k
                </motion.p>
                <p className="text-sm text-gray-600">Best Solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-500 font-medium">Our Services</p>
          <h2 className="text-2xl font-bold mt-2">
            Making renewable energy a reality
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Assured Quality And Service",
              description:
                "The Community makes From small firm to innovation with distributed methods of empowerment.",
              icon: "🌟",
            },
            {
              title: "Solar Panel Installation",
              description:
                "Professional installation services with expert team and latest technology.",
              icon: "🔧",
            },
            {
              title: "Solar Panel Maintenance",
              description:
                "Regular maintenance and monitoring to ensure optimal performance.",
              icon: "⚡",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group p-6 text-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
              <Button
                variant="ghost"
                className="mt-4 text-primary-500 hover:text-primary-600 hover:bg-primary-50"
              >
                Learn more
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
