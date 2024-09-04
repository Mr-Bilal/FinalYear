import React, { useEffect, useState } from 'react';
import { getCityOptions } from '../api/propertyApi';

const CitySelect = ({ onChange }) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const fetchCities = async () => {
            const cityOptions = await getCityOptions();
            setCities(cityOptions);
        };

        fetchCities();
    }, []);

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        onChange(city);
    };

    return (
        <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                City
            </label>
            <select 
                id="city" 
                className="form-select mt-1 block w-full"
                value={selectedCity}
                onChange={handleCityChange}
            >
                <option value="" disabled>Select a city</option>
                {cities.map((city) => (
                    <option key={city.id} value={city.city}>
                        {city}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CitySelect;
