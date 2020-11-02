import axios from "axios";

import { TRAER_TODOS } from "../types/usersTypes";

export const traerTodos = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log("respuesta", res);

  dispatch({
    type: TRAER_TODOS,
    payload: res.data,
  });
};
