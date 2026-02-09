import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MzM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Working with this team has been transformative for our business. Their strategic insights and hands-on approach helped us increase revenue by 150% in just 12 months. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, Digital Marketing Pro",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MzM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The expertise and professionalism exceeded all expectations. They took the time to understand our unique challenges and delivered solutions that made a real impact.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "COO, Growth Partners LLC",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MzM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Outstanding service from start to finish. The team was responsive, knowledgeable, and truly invested in our success. We've seen remarkable improvements across all key metrics.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Director, Innovate Solutions",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MzM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "A game-changer for our organization. Their strategic guidance helped us navigate complex challenges and emerge stronger than ever. Can't recommend them enough!",
    rating: 5,
  },
  {
    name: "Jennifer Lee",
    role: "VP Operations, Scale Up Co.",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MzM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Professional, efficient, and results-driven. They delivered exactly what they promised and then some. Our operational efficiency has improved dramatically.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    role: "CEO, Venture Growth",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDU3MzM2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The best investment we've made in our business. Their insights and strategies have positioned us for sustainable, long-term growth. Absolutely exceptional!",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "4.9/5", label: "Average Rating" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-8 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - Replace with client photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center bg-blue-600 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Experience the same level of excellence and results that our clients rave about.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </div>
  );
}