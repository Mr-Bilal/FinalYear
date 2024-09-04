import React from 'react';

const TypeSelect = ({ onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Property Type</label>
            <select 
                id="type" 
                name="type" 
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Select property type</option>
                {['House', 'Flat', 'Farm House'].map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
};

export default TypeSelect;
