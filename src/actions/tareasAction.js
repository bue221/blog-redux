import {
  TRAER_TAREAS,
  ERROR,
  CARGANDO,
  CAMBIO_USUARIO_ID,
  CAMBIO_TITULO,
  AGREGAR,
  EDITAR,
  ELIMINAR,
} from "../types/tareasTypes";
import axios from "axios";

export const traerTareas = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    //jugamos con la respuetsa
    const tareas = {};

    res.data.map(
      (tar) =>
        (tareas[tar.userId] = {
          ...tareas[tar.userId],
          [tar.id]: {
            ...tar,
          },
        })
    );

    dispatch({
      type: TRAER_TAREAS,
      payload: tareas,
    });
  } catch (err) {
    console.log("Error", err.message);
    dispatch({
      type: ERROR,
      payload: "Informacion no disponible",
    });
  }
};

export const cambioUsuarioId = (id) => (dispatch) => {
  dispatch({
    type: CAMBIO_USUARIO_ID,
    payload: id,
  });
};

export const cambioTitulo = (content) => (dispatch) => {
  dispatch({
    type: CAMBIO_TITULO,
    payload: content,
  });
};

export const agregar = (tarea) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      tarea
    );

    dispatch({
      type: AGREGAR,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "Intente más tarde",
    });
  }
};

export const editar = (tarea_editada) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${tarea_editada.id}`,
      tarea_editada
    );

    dispatch({
      type: EDITAR,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "Intente más tarde",
    });
  }
};

export const eliminar = (id) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    console.log(res.data);
    dispatch({
      type: TRAER_TAREAS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "Intente más tarde",
    });
  }
};
