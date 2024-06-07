import axios from "axios";

export default async function fetchData() {
    const { data } = await axios(`https://valorant-api.com/v1/agents?language=es-MX`);
    console.log(data.data);
    return data.data
}


export async function fetchDataId(id) {
    try {
        const { data } = await axios(`https://valorant-api.com/v1/agents/${id}?language=es-MX`);
        console.log('este es el la info del id: ', data.data);
        return data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}