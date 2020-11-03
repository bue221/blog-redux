import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
  usuarios: [],
  cargar: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, usuarios: action.payload, cargar: false, error: "" };

    case CARGANDO:
      return { ...state, cargar: true };

    case ERROR:
      return { ...state, error: action.payload, cargar: false };

    default:
      return state;
  }
};
