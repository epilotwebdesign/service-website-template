import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const steps = [
  {
    title: "Collection across the UK",
    description:
      "We collect your goods from anywhere in the UK, with hubs in Manchester and Normanton (Leeds).",
  },
  {
    title: "Groupage into our European network",
    description:
      "Your cargo joins our established groupage service into France, consolidated efficiently to keep your costs down.",
  },
  {
    title: "Weekly departures to Morocco",
    description:
      "From our partner's network in France, a dedicated service departs weekly on Fridays, bound for Morocco.",
  },
  {
    title: "Customs & delivery support",
    description:
      "Our team handles UK-side documentation and coordinates with our partners on customs formalities at both ends, keeping you informed throughout.",
  },
];

function StepCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center h-full">
      <Check className="w-8 h-8 text-green-600 mb-4 shrink-0" strokeWidth={3} />
      <div className="bg-white rounded-xl shadow-md p-8 flex-1 w-full">
        <p className="text-gray-900">
          <span className="font-bold">{title}</span> — {description}
        </p>
      </div>
    </div>
  );
}

export default function MoroccoFreightProcessCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % steps.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Tablet / desktop: all cards visible side by side */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <StepCard key={i} {...step} />
        ))}
      </div>

      {/* Mobile: one card visible at a time, cross-fading automatically */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <StepCard {...steps[activeIndex]} />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Show step ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
