import { useState } from "react";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/logo/logo.png";
import { categories } from "../data/categories";
import { INSTAGRAM_URL, EMAIL } from "../data/contact";

const navLinks = [
  { name: "Home", href: "#top" },
  ...categories.map((category) => ({
    name: category.name,
    href: `#${category.id}`,
  })),
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#faf4ec]/90 backdrop-blur border-b border-[#2b2420]/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="The Candle Studio Co." className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide uppercase text-[#2b2420]/70 hover:text-[#2b2420] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 pl-4 border-l border-[#2b2420]/15">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#2b2420]/70 hover:text-[#c98a92] transition-colors"
              >
                <Instagram size={19} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="text-[#2b2420]/70 hover:text-[#c98a92] transition-colors"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#2b2420]/80 hover:bg-[#2b2420]/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden pb-6 border-t border-[#2b2420]/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 text-base text-[#2b2420]/80 hover:text-[#2b2420]"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-5 pt-3 mt-2 border-t border-[#2b2420]/10">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#2b2420]/70"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm text-[#2b2420]/70"
                >
                  <Mail size={18} /> Email
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
