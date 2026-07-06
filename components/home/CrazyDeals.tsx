const dealsData = [
  {
    id: 1,
    title: "Daily Essential Kit",
    imgSrc: "images/deals/crazy-deal-1.jpg",
    altText: "Daily Essential Kit",
  },
  {
    id: 2,
    title: "Impeccable Matte Set of Three",
    imgSrc: "images/deals/crazy-deal-2.png",
    altText: "Impeccable Matte Set of Three",
  },
  {
    id: 3,
    title: "Special Offers",
    imgSrc: "images/deals/crazy-deal-3.png",
    altText: "Special Offers",
  },
];

const CrazyDeals = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-2xl font-semibold uppercase tracking-wide md:text-3xl">
        Crazy Deals
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible no-scrollbar">
        {dealsData.map((deal) => (
          <div
            key={deal.id}
            className="w-[260px] shrink-0 snap-center md:w-[320px] lg:w-[360px]"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={deal.imgSrc}
                alt={deal.altText}
                className="h-[240px] w-full object-cover transition-transform duration-300 hover:scale-105 md:h-[320px]"
              />
            </div>

            <p className="mt-4 text-center text-sm font-medium uppercase tracking-wide md:text-base">
              {deal.title}
            </p>
          </div>
        ))}

        {/* Right spacing for the last card on mobile */}
        <div className="w-1 shrink-0 md:hidden" />
      </div>
    </section>
  );
};

export default CrazyDeals;
