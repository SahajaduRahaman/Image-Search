import axios from 'axios'

const Base_URL = 'https://api.unsplash.com/search/photos?page=1&query'

const API = 'QMuboMrF4wS64cV8PIAGmgvxlEtTMuxa3E2-5h2ZLp4'

export const FetchAPI = async (url) => {
    const { data } = await axios.get(`${Base_URL}=${url}&client_id=${API}&per_page=30&orientation=landscape`)

    return data;
}
