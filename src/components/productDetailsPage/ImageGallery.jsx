/* eslint-disable react/prop-types */

const ImageGallery = ({
  images,
  hoveredImageIndex,
  handleMouseLeave,
  handleImageHover,
}) => {
  return (
    <div className="flex flex-col gap-1 mr-3">
      {images?.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Product ${index + 1}`}
          className={`w-24 md:w-32 h-24  rounded-lg ${
            hoveredImageIndex === index
              ? "border border-blue-500 transition"
              : ""
          }`}
          onMouseEnter={() => handleImageHover(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
