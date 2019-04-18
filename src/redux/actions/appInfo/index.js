import { LOAD_REQUEST } from '../../constants/appInfo';

export function load(id) {
  return {
    type: LOAD_REQUEST,
    payload: { id },
  };
}
