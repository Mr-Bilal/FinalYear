import axios from 'axios';

export const getCityOptions = async () => {
    try {
        const response = await axios.get('http://localhost:8080/properties');
        return response.data; // Assuming the API returns a list of cities
    } catch (error) {
        console.error('Error fetching cities:', error);
        return [];
    }
};

export const getAddressOptions = async (cityName) => {
    try {
        const response = await axios.get(`http://localhost:8080/properties/addresses?cityName=${cityName}`);
        return response.data; // Assuming the API returns a list of addresses for the given city
    } catch (error) {
        console.error('Error fetching addresses:', error);
        return [];
    }
};

export const getPrediction = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/predict', data);
        return response.data; // Assuming the API returns the prediction result
    } catch (error) {
        console.error('Error fetching prediction:', error);
        throw error;
    }
};
