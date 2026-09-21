import { Instagram, Mail } from "lucide-react";
import logo from "../assets/logo/logo.png";
import { categories } from "../data/categories";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, EMAIL } from "../data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f1a16] text-[#faf4ec]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <img
            src={logo}
            alt="The Candle Studio Co."
            className="h-16 w-auto mb-4 rounded-lg"
          />
          <p className="text-sm leading-relaxed">
            Unique handmade candles made to order. Private event hire available.
          </p>
        </div>

        <div>
          <h4 className="text-[#faf4ec] text-sm tracking-wide uppercase mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`} className="hover:text-[#faf4ec] transition-colors">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[#faf4ec] text-sm tracking-wide uppercase mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-[#faf4ec] transition-colors"
              >
                <Mail size={16} /> {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#faf4ec] transition-colors"
              >
                <Instagram size={16} /> {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#faf4ec]/10 py-6 text-center text-xs">
        <p>© {currentYear} The Candle Studio Co. All rights reserved. No refunds on orders.</p>
      </div>
    </footer>
  );
}
