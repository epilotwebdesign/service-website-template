import { Instagram, Mail } from "lucide-react";
import logo from "../assets/logo/logo.png";
import { categories } from "../data/categories";
import { INSTAGRAM_URL, EMAIL } from "../data/contact";

const navLinks = [
  { name: "Home", href: "#top" },
  ...categories.map((category) => ({
    name: category.navLabel ?? category.name,
    href: `#${category.id}`,
  })),
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="bg-[#faf4ec]/90 backdrop-blur border-b border-[#2b2420]/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="The Candle Studio Co." className="h-12 w-auto" />
          </a>

          <div className="flex items-center gap-4 pl-4 shrink-0">
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

        <div className="flex items-center gap-1 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs sm:text-sm tracking-wide uppercase text-[#2b2420]/70 hover:text-[#2b2420] hover:bg-[#2b2420]/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
