import { Link } from "react-router";
import { Target, Users, TrendingUp, Shield, Zap, Award, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";

const services = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "We work with you to develop comprehensive strategies that align with your business objectives and market opportunities. Our approach includes market analysis, competitive positioning, and actionable roadmaps.",
    features: [
      "Market Analysis & Research",
      "Competitive Positioning",
      "Strategic Roadmap Development",
      "Goal Setting & KPI Definition",
    ],
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams through our coaching, training, and leadership development programs. We help unlock your team's potential and create a culture of excellence.",
    features: [
      "Leadership Coaching",
      "Team Building Workshops",
      "Performance Management",
      "Talent Development Programs",
    ],
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Scale your business with data-driven insights and proven growth methodologies. We identify opportunities, optimize processes, and implement strategies that drive sustainable growth.",
    features: [
      "Growth Strategy Development",
      "Market Expansion Planning",
      "Revenue Optimization",
      "Sales Process Improvement",
    ],
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify and mitigate potential risks to protect your business and ensure continuity. Our comprehensive approach covers operational, financial, and strategic risk factors.",
    features: [
      "Risk Assessment & Analysis",
      "Mitigation Strategy Development",
      "Crisis Management Planning",
      "Compliance & Governance",
    ],
  },
  {
    icon: Zap,
    title: "Process Optimization",
    description: "Streamline operations and increase efficiency through process improvement initiatives. We identify bottlenecks, eliminate waste, and implement best practices.",
    features: [
      "Operational Efficiency Analysis",
      "Workflow Optimization",
      "Technology Integration",
      "Quality Management Systems",
    ],
  },
  {
    icon: Award,
    title: "Brand Development",
    description: "Build a strong brand identity that resonates with your target audience and drives loyalty. We help you define your unique value proposition and create compelling brand experiences.",
    features: [
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Messaging & Voice",
      "Brand Experience Design",
    ],
  },
];

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions tailored to address your unique business challenges and accelerate sustainable growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-10">
                  {/* Service Header */}
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <Link to="/contact">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Learn More
                        <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </div>

                  {/* Service Features */}
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      What's Included:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss your specific needs and create a tailored approach that works for you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}