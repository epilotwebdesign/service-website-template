import { Link } from "react-router";
import { Target, Users, TrendingUp, Shield, Zap, Award } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

const services = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Develop comprehensive strategies aligned with your business objectives and market opportunities.",
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams through coaching, training, and leadership development programs.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Scale your business with data-driven insights and proven growth methodologies.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify and mitigate potential risks to protect your business and ensure continuity.",
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Streamline operations and increase efficiency through process improvement initiatives.",
  },
  {
    icon: Award,
    title: "Brand Development",
    description: "Build a strong brand identity that resonates with your target audience and drives loyalty.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions designed to address your unique business challenges and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/services">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}