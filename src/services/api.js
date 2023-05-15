const KEY = '4dba3d9ebce9436391004923231505';

const  fetchData = async(city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
} 

export default fetchData;