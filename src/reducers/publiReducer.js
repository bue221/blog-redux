//import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
  publicaciones: [],
  cargar: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "traer todos":
      return {
        ...state,
        publicaciones: action.payload,
        cargar: false,
        error: "",
      };

    case "cargar":
      return { ...state, cargar: true };

    case "error":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
