import { LOAD_REQUEST } from '../../constants/appInfo';

const initialState = {
  id: undefined,
};

export default function appInfoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
      return {
        ...state,
        id: payload.id,
      };
    default:
      return state;
  }
}
