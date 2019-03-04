import axios from 'axios'

const apiUrl = ('http://localhost:3001/api')

const callApi = ({endPoint, headers, ...rest}) => {
  const config = {
    url: `${apiUrl}${endPoint}/`,
    headers: headers || {},
    ...rest
  }
  config.headers['Accept'] = 'application/json'
  return axios(config)
}

axios.interceptors.response.use((response)=>{
  return response
}, error=>{return Promise.reject(error)})

export const newGame = (params) => {
  return callApi({
    endPoint: '/game',
    method: 'POST', 
    data: params
  })
}