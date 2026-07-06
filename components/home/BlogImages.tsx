const BlogImages = () => {
  const images = [
    "images/blog/woman-skincare.jpg",
    "images/blog/gentle-forest.png",
    "images/blog/makeup.jpg",
    "images/blog/woman-perfume.jpg",
    "images/blog/man-skincare.jpg",
    "images/blog/man-perfume.jpg",
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Blog ${index + 1}`}
          className="w-full h-full object-fill"
        />
      ))}
    </div>
  );
};

export default BlogImages;
