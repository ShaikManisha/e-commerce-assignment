/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import ProductDetailsSection from "./ProductDetailsSection";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProductDetails(response.data);
    } catch (error) {
      console.log("Error fetching product details", error);
    }
  };

  const handleImageHover = (index) => {
    setHoveredImageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(null);
  };

  return (
    <div className="container mx-auto my-5">
      <div className="flex px-4">
        <ImageGallery
          images={productDetails?.images}
          hoveredImageIndex={hoveredImageIndex}
          handleImageHover={handleImageHover}
          handleMouseLeave={handleMouseLeave}
        />

        <ProductDetailsSection
          productDetails={productDetails}
          hoveredImageIndex={hoveredImageIndex}
        />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
