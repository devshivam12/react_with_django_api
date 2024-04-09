import React, { useEffect, useState } from 'react'

const Api = () => {
    const [apiData, setApiData] = useState([])

    const fetchCountry = async () =>{
        const response = await fetch("http://127.0.0.1:8000/api/v1/countries/");

        const country = await response.json();

        setApiData(country)
        
    }
    const fetchState = async () =>{
      const response = await fetch("http://127.0.0.1:8000/api/v1/states/");
      
      const state = await response.json();

      setApiData(state)
      
  }

    console.log(apiData)

    useEffect(()=>{
        fetchCountry()
        fetchState()
    },[])
  return (
    <div></div>
  )
}

export default Api