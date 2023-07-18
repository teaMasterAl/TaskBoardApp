import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL

export default async (method: string, path: string, data: object, token='' as string) => {

    const option = {
        method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            "Authorization": '',
        },
        baseURL,
        url: path,
        data: JSON.stringify(data)
    }

    if( token ) {
        option.headers["Authorization"] = token
    }

    try {
        const response = await axios(option)
        return response.data
    } catch ( error ) {
        const { response } = error
        console.log('! error: ', response.data.message )
    }

}


