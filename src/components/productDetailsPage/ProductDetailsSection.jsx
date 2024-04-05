/* eslint-disable react/prop-types */

const ProductDetailsSection = ({ productDetails, hoveredImageIndex }) => {
  return (
    <>
      {productDetails ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center  bg-black bg-opacity-50">
              <img
                src={
                  hoveredImageIndex !== null
                    ? productDetails.images[hoveredImageIndex]
                    : productDetails.images[0]
                }
                alt={`Product ${
                  hoveredImageIndex !== null ? hoveredImageIndex + 1 : 1
                }`}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-semibold mb-4">
                {productDetails.title}
              </h1>
              <p className="text-gray-700 mb-4">
                <span className="text-lg font-normal">Description:</span>
                <span className="font-semibold">
                  {productDetails.description}
                </span>
              </p>
              <div className="mb-4">
                <p className="text-lg ">
                  <span className="text-lg">Price: </span>
                  <span className="font-semibold">
                    ₹ {productDetails.price}
                  </span>
                </p>
                {productDetails.discount && (
                  <p className="text-lg font-semibold">
                    Discount: {productDetails.discount}%
                  </p>
                )}

                <p className="text-lg">
                  <span className="text-lg">Rating: </span>
                  <span className=" text-white bg-green-700 px-1 rounded">
                    {productDetails.rating}
                    <i className="fa-regular fa-star"></i>
                  </span>
                </p>
                <p className="text-lg">Brand: {productDetails.brand}</p>
              </div>
              <p className="text-lg">Category: {productDetails.category}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center font-bold text-xl">Loading Details...</p>
      )}
    </>
  );
};

export default ProductDetailsSection;
