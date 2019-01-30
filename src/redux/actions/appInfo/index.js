import { LOAD_REQUEST } from '../../constants/appInfo';

export function load(appId, consentId) {
  return {
    type: LOAD_REQUEST,
    payload: { appId, consentId }
  }
}
