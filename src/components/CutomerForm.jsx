import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ModelPopup from './ModelPopup';

const CutomerForm = () => {
    const { countryName, stateName } = useParams();
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        city: "",
        state: stateName,
        country: countryName,
        address: ""
    });

    const [showPopup, setShowPopup] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleClick = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:2605/api/customers/", userData)
            .then((response) => {
                console.log(response);
                setShowPopup(false);
                setSubmitSuccess(true)
            });
    };

    const handleToggle = () => {
        setShowPopup(!showPopup)
    }
    const closeSubmit = () => {
        setSubmitSuccess(false);
        setShowPopup(false)
        navigate('/')
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    return (
        <div className="min-h-full flex flex-col justify-center py-8 sm:px-6 lg:px-8">
            <div className="text-center text-3xl font-semibold mb-1">Customer Details</div>
            <hr className='w-20 border border-slate-800  m-auto' />
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-2" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="mt-1">
                                <input id="name" name="name" value={userData.name} onChange={handleChange} type="text" autoComplete="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Id</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" value={userData.email} onChange={handleChange} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>


                        <div className='flex items-center '>
                            <div className='mr-2'>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <div className="mt-1">
                                    <input id="city" name="city" type="text" value={userData.city} onChange={handleChange} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div className='mr-2'>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                <div className="mt-1">
                                    <input id="state" name="state" type="text" value={stateName} onChange={handleChange} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                                <div className="mt-1">
                                    <input id="country" name="country" type="text" value={countryName} onChange={handleChange} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="address"
                                    name="address"
                                    type="text"
                                    value={userData.address}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"

                                />
                            </div>
                        </div>

                        <div className=''>


                            <div>
                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleClick}>Submit</button>
                            </div>
                        </div>
                    </form>
                    <div className='mt-4'>
                        <button type="button" className="w-full flex justify-center py-2 px-5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleToggle}>View</button>
                    </div>
                </div>
            </div>

            {submitSuccess && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="text-lg font-semibold mb-2">Form Submitted Successfully!</p>
                        <button onClick={closeSubmit} className="bg-indigo-600 text-white py-1 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Close</button>
                    </div>
                </div>


            )}

            {showPopup && <ModelPopup closePopup={closePopup} formData={userData} />}
        </div>
    );
};

export default CutomerForm;