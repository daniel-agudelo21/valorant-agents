import axios from "axios";

export default async function fetchData() {
    const { data } = await axios(`https://valorant-api.com/v1/agents?language=es-MX`);
    return data.data
}


export async function fetchDataId(id) {
    try {
        const { data } = await axios(`https://valorant-api.com/v1/agents/${id}?language=es-MX`);
        
        return data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
