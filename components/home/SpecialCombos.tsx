const combosData = [
  {
    id: 1,
    title: "Daily Essential Perfume",
    imgSrc: "images/combos/combos-1.jpg",
    altText: "Slide 1",
  },
  {
    id: 2,
    title: "Medicube skin care",
    imgSrc: "images/combos/combos-2.jpg",
    altText: "Slide 2",
  },
  {
    id: 3,
    title: "Fragrance Team Set",
    imgSrc: "images/combos/combos-3.jpg",
    altText: "Slide 3",
  },
];

const SpecialCombos = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-2xl font-semibold uppercase tracking-wide md:text-3xl">
        Special Combos
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible no-scrollbar">
        {combosData.map((combo) => (
          <div
            key={combo.id}
            className="w-[260px] shrink-0 snap-center md:w-[320px] lg:w-[360px]"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={combo.imgSrc}
                alt={combo.altText}
                className="h-[240px] w-full object-cover transition-transform duration-300 hover:scale-105 md:h-[320px]"
              />
            </div>

            <p className="mt-4 text-center text-sm font-medium uppercase tracking-wide md:text-base">
              {combo.title}
            </p>
          </div>
        ))}

        {/* Right spacing for the last card on mobile */}
        <div className="w-1 shrink-0 md:hidden" />
      </div>
    </section>
  );
};

export default SpecialCombos;
