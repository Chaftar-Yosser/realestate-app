import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
const { data } = await axios.get((url),{
    headers: {
        'X-RapidAPI-Key': 'e5b1df85ccmsh44e4f06625da33cp14f1fdjsncf46b6674d57',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
})
return data;
}


