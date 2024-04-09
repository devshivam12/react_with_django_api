

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const States = ({ countryData }) => {
  const { countryId, countryName } = useParams();
  const [stateData, setStateData] = useState([]);


  useEffect(() => {
   
    const fetchStateData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:2003/api/v1/states/?country=${countryId}`);
        const data = await response.json();
        const filteredStateData = data.filter(state => state.Country === parseInt(countryId));
        setStateData(filteredStateData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStateData();
  }, [countryId]);

  return (
    <div className="w-full">


      <div className="py-4 px-4  flex items-center justify-between mb-10">

        <h1 className="text-gray-800 font-medium text-3xl "> Selected Country:- {countryName}</h1>



      </div>
      <div className="flex items-center justify-between px-4">
        {stateData.map((state, index) => (
          <div key={index} className=" w-72 px-4 py-2 border border-slate-600 rounded-sm cursor-pointer">
            <Link  to={`/cutomer-form/${countryId}/${countryName}/${state.name}`}
            className="rounded p-4 text-slate-900 font-semibold">{state.name}</Link>
          </div>
        ))}
      </div>

    </div>

  );
};

export default States;


