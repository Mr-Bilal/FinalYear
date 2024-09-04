import React from 'react';

const BedroomSelect = ({ onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">Bedrooms</label>
            <select 
                id="bedrooms" 
                name="bedrooms" 
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Select number of bedrooms</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bedrooms) => (
                    <option key={bedrooms} value={bedrooms}>{bedrooms} Bedrooms</option>
                ))}
            </select>
        </div>
    );
};

export default BedroomSelect;
