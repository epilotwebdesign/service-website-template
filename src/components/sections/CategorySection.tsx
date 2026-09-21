import { motion } from "motion/react";
import { ImageOff } from "lucide-react";
import type { Category } from "../../data/categories";
import { formatPrice } from "../../lib/formatPrice";

type Props = {
  category: Category;
  tinted?: boolean;
};

export default function CategorySection({ category, tinted }: Props) {
  const placeholderCount = category.imagePlaceholders ?? 0;
  const totalImages = category.images.length + placeholderCount;
  const aspect = category.imageAspect ?? "aspect-[4/5]";
  const gridCols =
    totalImages <= 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-xl"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-none";

  return (
    <section
      id={category.id}
      className={`scroll-mt-20 py-20 ${tinted ? "bg-[#f3e8de]/60" : "bg-[#faf4ec]"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl text-[#2b2420] mb-4">{category.name}</h2>
          <p className="text-[#6f645a] leading-relaxed">{category.description}</p>
        </motion.div>

        {totalImages > 0 && (
          <div className={`grid ${gridCols} gap-4 mb-12 mx-auto`}>
            {category.images.map((src) => (
              <div key={src} className={`${aspect} overflow-hidden rounded-2xl shadow-sm`}>
                <img
                  src={src}
                  alt={`${category.name} candle`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {Array.from({ length: placeholderCount }).map((_, index) => (
              <div
                key={`placeholder-${index}`}
                className={`${aspect} rounded-2xl border border-dashed border-[#2b2420]/20 bg-[#2b2420]/[0.03] flex flex-col items-center justify-center gap-2 text-[#6f645a]/60`}
              >
                <ImageOff size={22} />
                <span className="text-xs">Photo coming soon</span>
              </div>
            ))}
          </div>
        )}

        <div className="max-w-md mx-auto">
          {category.products.length > 0 ? (
            <div className="bg-white rounded-2xl border border-[#2b2420]/10 divide-y divide-[#2b2420]/10 overflow-hidden">
              {category.products.map((product) => (
                <div
                  key={product.name}
                  className="flex items-baseline justify-between px-6 py-4 gap-4"
                >
                  <span className="text-[#2b2420]">{product.name}</span>
                  <span className="text-[#2b2420] font-medium whitespace-nowrap">
                    {formatPrice(product.price)}
                  </span>
                </div>
              ))}
            </div>
          ) : category.priceOnEnquiry ? (
            <div className="bg-white rounded-2xl border border-[#2b2420]/10 px-6 py-5 text-center">
              <span className="text-[#2b2420] font-medium">{category.priceOnEnquiry}</span>
            </div>
          ) : null}

          {category.notes && category.notes.length > 0 && (
            <ul className="mt-5 space-y-1 text-center">
              {category.notes.map((note) => (
                <li key={note} className="text-sm text-[#6f645a] italic">
                  {note}
                </li>
              ))}
            </ul>
          )}

          {category.safetyNote && (
            <p className="mt-4 text-xs leading-relaxed text-[#6f645a] text-center border-t border-[#2b2420]/10 pt-4">
              {category.safetyNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
