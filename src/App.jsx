import React, { useEffect, useState } from 'react'

import Country from './components/Country'
import States from './components/States'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CutomerForm from './components/CutomerForm';


function App() {

  // Fetching country Data

  const [countryData, setCountryData] = useState([]);

  // console.log(countryData);
  const fetchCountryData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:2003/api/v1/countries/");
      const data = await response.json();
      const flettenData = data.flat()
      setCountryData(flettenData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountryData(0);
  }, []);




  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Country countryData={countryData} setCountryData={setCountryData} />} />
        <Route path='/states/:countryId/:countryName' element={<States countryData={countryData} />} />
        <Route path='/cutomer-form/:countryId/:countryName/:stateName' element={<CutomerForm countryData={countryData} />} />
      </Routes>


    </BrowserRouter>

  )
}

export default App
