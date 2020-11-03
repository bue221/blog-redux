import axios from "axios";

//import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usersTypes";

export const traerTodos = (id) => async (dispatch) => {
  dispatch({
    type: "cargar",
  });

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );

    dispatch({
      type: "traer todos",
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: "error",
      payload: err.message,
    });
  }
};
