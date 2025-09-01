import React, { useState, useEffect } from 'react';
const BestSellers = () => {
  const IMG = "https://img.playbook.com/KIP6tIGBxuToXzvbkQhVqpQpx7DD7aDw845QfBfjiqk/w:750/Z3M6Ly9icmFuZGlm/eS11c2VyY29udGVu/dC1kZXYvcHJvZC9w/cmV2aWV3cy8yMzRm/MTY5MC04ZTI1LTQx/OTItOGY1MS04ZDNl/ODZiNDNjMTI.webp";

  const items = [
    {
      title: "CHOCOLATE CHIMINI",
      desc: "A true French favorite — golden, buttery, and flaky with soft layers inside. Perfect on its own or paired with your morning coffee.",
    },
    {
      title: "CROISSANT",
      desc: "Buttery, flaky, and delicious French pastry that's perfect for breakfast or as a snack any time of day.",
    },
    {
      title: "BAGUETTE",
      desc: "Traditional French bread with a crisp crust and soft interior. Perfect for sandwiches or alongside any meal.",
    },
  ];

  return (
    <section id="sellers" className="py-16 md:py-24 bg-[#FFFBF5]">
      <div className="container mx-auto px-4 md:px-70">
        <div className="rounded-3xl bg-white p-6 md:p-10 shadow-md">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            OUR BEST SELLERS
          </h2>

          <div className="mt-10 space-y-12">
            {items.map((it, idx) => (
              <div
                key={it.title + idx}
                className={`flex flex-col items-center gap-6 md:gap-10 ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="shrink-0">
                  <img
                    src={IMG}
                    alt={it.title}
                    loading="lazy"
                    decoding="async"
                    className="h-40 sm:h-48 md:h-56 w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.20)]"
                  />
                </div>

                <div className="w-full md:w-auto">
                  <div className="bg-black text-white rounded-[44px] px-6 py-6 md:px-10 md:py-8 shadow-md max-w-[720px]">
                    <div className="text-xl sm:text-2xl font-extrabold tracking-wide">
                      {it.title}
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-white/85">
                      {it.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;