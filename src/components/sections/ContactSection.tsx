import { motion } from "motion/react";
import { Instagram, Mail } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, EMAIL } from "../../data/contact";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 bg-[#2b2420] text-[#faf4ec]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl mb-4">Get in Touch</h2>
          <p className="text-[#faf4ec]/75 mb-10">
            For orders, custom colours and scents, or private event hire enquiries —
            reach out by email or send us a DM on Instagram.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#faf4ec] text-[#2b2420] text-sm tracking-wide uppercase hover:bg-white transition-colors"
            >
              <Mail size={17} />
              {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-[#faf4ec]/30 text-sm tracking-wide uppercase hover:bg-[#faf4ec]/10 transition-colors"
            >
              <Instagram size={17} />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
