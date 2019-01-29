import { LOAD_REQUEST } from '../../constants/appInfo';

const initialState = {
  appId: undefined,
  consentId: undefined
};

export default function appInfoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_REQUEST:
      return {
        ...state,
        appId: payload.appId,
        consentId: payload.consentId
      };
    default:
      return state;
  }
}
