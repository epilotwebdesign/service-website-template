import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  const values = [
    "Integrity and transparency in all our dealings",
    "Client success as our top priority",
    "Continuous innovation and improvement",
    "Collaborative partnerships built on trust",
  ];

  const milestones = [
    { year: "2014", title: "Company Founded", description: "Started with a vision to transform businesses" },
    { year: "2017", title: "Expanded Services", description: "Added consulting and coaching programs" },
    { year: "2020", title: "500+ Clients", description: "Reached major milestone in client growth" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top service provider" },
  ];

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
            About Us
          </h1>
          <p className="text-xl text-gray-600">
            We're passionate about helping businesses unlock their full potential through strategic guidance and expert execution.
          </p>
        </motion.div>

        {/* Company Story with Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2014, we started with a simple mission: to provide businesses with the strategic insights and practical tools they need to thrive in a competitive landscape.
              </p>
              <p>
                Over the years, we've grown from a small team of consultants to a full-service agency serving clients across multiple industries. Our success is measured by the success of our clients, and we're proud to have helped hundreds of businesses achieve remarkable growth.
              </p>
              <p>
                Today, we continue to innovate and expand our services, always staying ahead of industry trends to provide cutting-edge solutions that deliver real results.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzcwNTk2ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team collaborating - Replace with your team photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To empower businesses with strategic guidance, innovative solutions, and expert execution that drives sustainable growth and long-term success.
            </p>
          </div>
        </motion.div>

        {/* Core Values */}
        <div className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-3 p-6 bg-white rounded-xl border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <span className="text-lg text-gray-700">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-6 items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-px h-full bg-gray-300 relative">
                    <motion.div 
                      className="absolute -left-2 top-2 w-5 h-5 bg-blue-600 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}