import React, { useEffect, useState } from 'react';
import { getAddressOptions } from '../api/propertyApi';

const AddressInput = ({ city, onChange }) => {
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        const fetchAddresses = async () => {
            if (city) {
                const addressData = await getAddressOptions(city);
                setAddresses(addressData);
            }
        };

        fetchAddresses();
    }, [city]);

    return (
        <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <select 
                id="address" 
                name="address" 
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => onChange(e.target.value)}
                disabled={!city} // Disable if no city is selected
            >
                <option value="">Select an address</option>
                {addresses.map((address, index) => (
                    <option key={index} value={address}>{address}</option>
                ))}
            </select>
        </div>
    );
};

export default AddressInput;
