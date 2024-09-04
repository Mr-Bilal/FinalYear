import React, { useState } from 'react';
import CitySelect from './CitySelect';
import AddressInput from './AddressInput';  // Assuming AddressInput is also fetching data similarly
import BedroomSelect from './BedroomSelect';
import BathsSelect from './BathsSelect';
import AreaInput from './AreaInput';
import TypeSelect from './TypeSelect';
import { getPrediction } from '../api/propertyApi';

const SearchForm = () => {
    const [formData, setFormData] = useState({
        city: '',
        address: '',
        bedrooms: '',
        baths: '',
        area_sqft: '',
        type: ''
    });
    const [predictedPrice, setPredictedPrice] = useState(null);

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await getPrediction(formData);
            setPredictedPrice(response.prediction); // Assuming the response contains a field named 'predictedPrice'
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };

    return (
        <div className="search-form">
            <CitySelect onChange={(value) => handleChange('city', value)} />
            <AddressInput city={formData.city} onChange={(value) => handleChange('address', value)} />
            <BedroomSelect onChange={(value) => handleChange('bedrooms', value)} />
            <BathsSelect onChange={(value) => handleChange('baths', value)} />
            <AreaInput onChange={(value) => handleChange('area_sqft', value)} />
            <TypeSelect onChange={(value) => handleChange('type', value)} />
            <button 
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                onClick={handleSubmit}
            >
                Find
            </button>
            {predictedPrice && (
                <div className="mt-4 text-xl">
                    Predicted Price: {predictedPrice}
                </div>
            )}
        </div>
    );
};

export default SearchForm;
