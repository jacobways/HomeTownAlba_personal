import {
  AUTH_JOBSEEKER,
  LOGIN_JOBSEEKER,
  LOGOUT_JOBSEEKER,
  REGISTER_JOBSEEKER,
} from "../_actions/type";

import axios from "axios";

export function loginJobSeeker(submitData) {
  const request = axios
    .post("http://localhost:5000/jobseeker/login", submitData, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });

  return {
    type: LOGIN_JOBSEEKER,
    payload: request,
  };
}

export function registerJobSeeker(submitData) {
  const request = axios
    .post("http://localhost:5000/jobseeker", submitData, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });

  return {
    type: REGISTER_JOBSEEKER,
    payload: request,
  };
}

export function logoutJobSeeker() {
  const request = axios
    .post("http://localhost:5000/jobseeker/logout", {
      withCredentials: true,
    })
    .then((res) => {
      console.log("로그아웃", res);
      return res.data;
    });

  return {
    type: LOGOUT_JOBSEEKER,
    payload: request,
  };
}

export function authJobSeeker() {
  const request = axios
    .get("http://localhost:5000/jobseeker/auth", {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });

  return {
    type: AUTH_JOBSEEKER,
    payload: request,
  };
}
