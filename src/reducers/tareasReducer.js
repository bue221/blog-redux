//importar types
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

const INITIALSTATE = {
  tareas: [],
  cargar: false,
  error: "",
  title: "",
  usuario_id: "1",
  redirect: false,
};

export default (state = INITIALSTATE, action) => {
  switch (action.type) {
    case TRAER_TAREAS:
      return {
        ...state,
        tareas: action.payload,
        cargar: false,
        error: "",
        redirect: false,
      };

    case CARGANDO:
      return { ...state, cargar: true };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        cargar: false,
      };

    case CAMBIO_USUARIO_ID:
      return { ...state, usuario_id: action.payload };

    case CAMBIO_TITULO:
      return { ...state, title: action.payload };

    case AGREGAR:
      return {
        ...state,
        tareas: {},
        cargar: false,
        error: "",
        redirect: true,
      };

    case EDITAR:
      return {
        ...state,
        tareas: {},
        cargar: false,
        error: "",
        redirect: true,
      };

    default:
      return { ...state };
  }
};
