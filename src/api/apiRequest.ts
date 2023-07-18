import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL

export default async (method: string, path: string, data: object) => {

    const option = {
        method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        baseURL,
        url: path,
        data: JSON.stringify(data)
    }

    try{
        const response = await axios(option)
        return response.data
    } catch ( error ) {
        const { response } = error
        console.log('! error: ', response.data.message )
    }

}


