import axios from 'axios'

axios.defaults.baseURL = 'http://121.40.35.197:9000'
axios.defaults.timeout = 5000

export const HttpGet = (url: string, params?: {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params }).then(res => {
            resolve(res.data.data)
        }).catch(err => {
            reject(err)
        })
    })
}