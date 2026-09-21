import { Flame, PartyPopper, Ban } from "lucide-react";

const items = [
  {
    icon: Flame,
    title: "Made to Order",
    description: "Every candle is handmade especially for you.",
  },
  {
    icon: PartyPopper,
    title: "Private Event Hire",
    description: "Enquire about candles and styling for your event.",
  },
  {
    icon: Ban,
    title: "No Refunds",
    description: "All orders are final due to the made-to-order nature of each piece.",
  },
];

export default function InfoStrip() {
  return (
    <section className="border-y border-[#2b2420]/10 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex flex-col items-center gap-2">
              <Icon className="text-[#c98a92]" size={24} />
              <h3 className="text-base font-medium text-[#2b2420]">{item.title}</h3>
              <p className="text-sm text-[#6f645a]">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
