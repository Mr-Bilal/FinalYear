import React from 'react';

const AreaInput = ({ onChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area (sqft)</label>
            <input
                type="number"
                id="area"
                name="area"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default AreaInput;
