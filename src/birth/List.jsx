import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Data } from "./data";

const List = ({ id, name, age, image, r }) => {
  return (
    <>
      <div className="list flex justify-between items-center w-full px-4 py-1">
        <div className="right flex gap-3 items-center">
          <div className="image">
            <img width="80px" src={image}></img>
          </div>
          <div className="text">
            <p className="font-semibold text-[17px]">{name}</p>
            <p className="text-gray-600 text-[14px]">{age} years old</p>
          </div>
        </div>
        <div className="left">
          <button
            onClick={() => r(id)}
            className="px-3 flex items-center gap-3 py-2 bg-red-600 rounded-md text-white font-semibold"
          >
            <p>Remove</p>
            <FaTrashAlt size={16} color="white" cursor="pointer" />
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
