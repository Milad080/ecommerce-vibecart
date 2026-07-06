const categories = [
  { name: "COSMETICS", image: "images/categories/cosmetics.jpg" },
  { name: "SKINCARE", image: "images/categories/skin-care.jpg" },
  { name: "LUXURY PERFUMES", image: "images/categories/luxury-perfume.jpg" },
  {
    name: "BATH & BODY",
    image: "images/categories/bath-body.jpg",
  },
  { name: "SKIN DEODORANTS", image: "images/categories/skin-deodorant.jpg" },
  { name: "GIFT SETS", image: "images/categories/gift-set.jpg" },
];

const CategorySection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-2xl font-semibold uppercase tracking-wide md:text-3xl">
        Luxury Categories
      </h2>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <button
            key={category.name}
            className="group flex flex-col items-center"
          >
            <div className="aspect-square w-full max-w-[250px] overflow-hidden rounded-sm bg-gray-100 shadow-sm transition duration-300 group-hover:shadow-lg">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <span className="mt-4 text-center text-sm font-medium uppercase leading-5 tracking-wide">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
