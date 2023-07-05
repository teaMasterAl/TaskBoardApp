import axios from "axios";

const baseURL = 'http://localhost:3001'

export default async (method, path, data) => {
    return axios({
      method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      baseURL,
      url: path,
      data: JSON.stringify(data)
    })
}


