import { motion } from "motion/react";
import { Award } from "lucide-react";
import logo from "../../assets/logo/logo.png";

export default function Hero() {
  return (
    <section id="top" className="bg-[#faf4ec] pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.img
          src={logo}
          alt="The Candle Studio Co."
          className="h-40 sm:h-48 w-auto mx-auto mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#c98a92]/40 bg-[#c98a92]/10 px-4 py-1.5 text-xs sm:text-sm tracking-wide text-[#8a4a52] mb-6"
        >
          <Award size={15} />
          UK Small Business Awards Finalist 2026
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-[#2b2420]/80 mb-8"
        >
          Unique handmade candles, made to order — plus private event hire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#martinis"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#2b2420] text-white text-sm tracking-wide uppercase hover:bg-[#2b2420]/85 transition-colors"
          >
            Shop the Collection
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-[#2b2420]/25 text-[#2b2420] text-sm tracking-wide uppercase hover:bg-[#2b2420]/5 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
