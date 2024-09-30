import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-900 text-white rounded-lg shadow-md mb-4">
      <div className="flex flex-col">
        <span className="font-semibold text-lg">{name}</span>
        <span className="text-white-400">
          Buy {quantity} in {category}
        </span>
      </div>
    </li>
  );
};

export default Item;
