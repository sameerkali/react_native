import axios from 'axios';

export const getAllMantras = async () => {
  try {
    const response = await axios.get('YOUR_API_ENDPOINT_HERE');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
