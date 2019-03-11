import axios from 'axios'

const apiUrl = ('http://localhost:3001/api')

const callApi = ({endPoint, headers, ...rest}) => {
  const config = {
    url: `${apiUrl}${endPoint}/`,
    ...rest
  }
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

export const updateGame = ({ idGame, board, winner, turn }) => {
  let params = {}
  if (board) {
      params.board =  board
  }

  if (winner) {
    params.winner = winner
  }

  if (turn) {
    params.turn = turn
  }
  return callApi({
    endPoint: '/game/' + idGame,
    method: 'PUT', 
    data: params
  })
}

export const getUnfinishedGames = () => {
  return callApi({
    endPoint: '/unfinishedGames',
    method: 'GET'
  })
}

export const getGame = (id) => {
  return callApi({
    endPoint: '/game/' + id,
    method: 'GET'
  })
}

