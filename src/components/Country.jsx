import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Country = ({ countryData, setCountryData }) => {

  return (
    <div className="w-full">
      <div className="m-10">
        <p className="text-center text-2xl mb-2">Select your contry</p>
        <hr className="border border-gray-800 w-20 m-auto mb-10" />
      </div>
      <div className="grid grid-cols-5 gap-4 px-10">
        {countryData.map((item, index) => (
          <div
            key={index}
            className=" w-60 px-4 py-2 border border-gray-500 cursor-pointer"
          >
            <Link to={`/states/${item.Country_id}/${item.name}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
