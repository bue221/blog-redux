import axios from "axios";

import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usersTypes";

export const traerTodos = () => async (dispatch) => {
  dispatch({ type: CARGANDO });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log("respuesta", res);

    dispatch({
      type: TRAER_TODOS,
      payload: res.data,
    });
  } catch (err) {
    console.log("error", err.message);
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
};
