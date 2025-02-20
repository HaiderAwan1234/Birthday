import React, { useState } from "react";
import List from "./List";
import { Data } from "./data";

const Birthday = () => {
  const [change, setChange] = useState(Data);

  const clearall = () => {
    if (change.length > 0) {
      setChange([]);
    } else {
      setChange(Data);
    }
    // change.length > 0 ? setChange([]) : setChange([Data]);
  };

  const remove = (add) => {
    const filter = change.filter((item, index) => {
      return item.id !== add;
    });
    setChange(filter);
  };

  return (
    <>
      <div className="container w-[full] xl:w-[45%] lg:w-[55%] md:w-[60%] sm:w-[50%] px-2 py-2 shadow-xl mx-auto my-4 rounded-xl">
        <p
          className="text-5xl text-gray-800 text-center pb-5"
          style={{ textShadow: "2px 2px 2px green" }}
        >
          {change.length} Birthday Members !
        </p>

        {change.map((item, index) => {
          return <List {...item} key={index} r={remove} />;
        })}

        <button
          onClick={clearall}
          className={`bg-gradient-to-r rounded-full my-4 text-white w-[70%] font-bold p-2 mx-auto block text-1xl ${
            change.length == 0
              ? " from-green-700 to to-green-600 "
              : " from-red-700 to to-red-600"
          }`}
        >
          {change.length == 0 ? "Referesh All" : "Clear All"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
