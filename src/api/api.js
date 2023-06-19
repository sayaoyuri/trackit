import axios from "axios";

export const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

export function createConfig(token) {
  return {
    headers: { Authorization: `Bearer ${token}` }
  }
}

export function checkHabit(habit, token) {
  const config = createConfig(token);
  const action = habit.done ? 'uncheck' : 'check';

  axios.post(`${BASE_URL}habits/${habit.id}/${action}`, '', config)
  .then(resp => console.log(resp))
  .catch(error => console.log(error));
}

export function deleteHabit(id, token) {
  const del = confirm('Deseja deletar este habito?');

  if(del) {
    const config = createConfig(token)

    axios.delete(`${BASE_URL}habits/${id}`, config)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));
  }
}