import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your goals and drive meaningful results.
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100">
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-blue-700">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}