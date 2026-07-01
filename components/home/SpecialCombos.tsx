const combosData = [
  {
    id: 1,
    title: "Daily Essential Kit",
    imgSrc: "https://placehold.co/400x323",
    altText: "Slide 1",
  },
  {
    id: 2,
    title: "Impeccable Matte set of three",
    imgSrc: "https://placehold.co/400x323",
    altText: "Slide 2",
  },
  {
    id: 3,
    title: "Fragrance team set",
    imgSrc: "https://placehold.co/400x323",
    altText: "Slide 3",
  },
];
const SpecialCombos = () => {
  return (
    <div className="container mx-auto px-4 mb-[20px]">
      <div className="heading my-[10px] ownContainer text-center uppercase sm:my-[40px]">
        special combos
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto gap-[20px] sm:flex-wrap sm:justify-center scroll-smooth no-scrollbar">
          {combosData.map((combo) => (
            <div key={combo.id} className="shrink-0 w-[80vw] sm:w-[347px]">
              <img
                src={combo.imgSrc}
                alt={combo.altText}
                className="w-full h-full object-cover"
              />
              <p className="text-center uppercase textGap font-medium">
                {combo.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialCombos;
