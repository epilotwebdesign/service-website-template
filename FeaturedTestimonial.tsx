import { Star } from "lucide-react";
import { motion } from "motion/react";

export default function FeaturedTestimonial() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from businesses we've helped grow.
            </p>
          </motion.div>

          {/* Featured Testimonial Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-900 mb-8 leading-relaxed">
              "Working with this team has been transformative for our business. Their strategic insights and hands-on approach helped us increase revenue by 150% in just 12 months. Highly recommended!"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MzM2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sarah Johnson - Replace with client photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">CEO, Tech Innovations Inc.</div>
              </div>
            </div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wide">
              Trusted by Leading Companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
              {["Company A", "Company B", "Company C", "Company D"].map((company, index) => (
                <motion.div
                  key={company}
                  className="text-center text-2xl font-bold text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}