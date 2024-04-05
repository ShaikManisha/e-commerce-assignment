/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, thumbnail, price }) => {
  console.log(id, title, thumbnail, price, "key, title, thumbnail, price");
  return (
    <Link to={`products/${id}`}>
      <div className="flex flex-col w-52 h-64  mx-2 mb-4 p-4 bg-white rounded-lg shadow-md">
        <img
          src={thumbnail}
          alt={title}
          className=" h-32 object-cover mx-auto mb-4"
        />

        <span className="text-md font-semibold">{title}</span>
        <span className="text-gray-700">Price: Rs. {price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
