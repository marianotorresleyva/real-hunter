import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'bd9ec4b8bbmsh477922810441ea4p1c48bbjsn82f93792faeb',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}

