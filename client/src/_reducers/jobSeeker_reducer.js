import {
  AUTH_JOBSEEKER,
  LOGIN_JOBSEEKER,
  LOGOUT_JOBSEEKER,
  REGISTER_JOBSEEKER,
} from "../_actions/type";

export default function JobSeeker(state = {}, action) {
  switch (action.type) {
    case LOGIN_JOBSEEKER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_JOBSEEKER:
      return { ...state, registerSuccess: action.payload };
    case AUTH_JOBSEEKER:
      return { ...state, userData: action.payload };
    case LOGOUT_JOBSEEKER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
