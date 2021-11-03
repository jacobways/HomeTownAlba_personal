import {
  AUTH_JOBSEEKER,
  LOGIN_COMPANY,
  LOGIN_JOBSEEKER,
  LOGOUT_JOBSEEKER,
  REGISTER_COMPANY,
  REGISTER_JOBSEEKER,
} from "../_actions/type";

import axios from "axios";

export function loginJobSeeker(submitData) {
  const request = axios
    .post(`${process.env.REACT_APP_SERVER_URL}/jobseeker/login`, submitData, {
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
export function loginCompany(submitData) {
  const request = axios
    .post(`${process.env.REACT_APP_SERVER_URL}/company/login`, submitData, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });

  return {
    type: LOGIN_COMPANY,
    payload: request,
  };
}

export function registerJobSeeker(submitData) {
  const request = axios
    .post(`${process.env.REACT_APP_SERVER_URL}/jobseeker`, submitData, {
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
export function registerCompany(submitData) {
  const request = axios
    .post(`${process.env.REACT_APP_SERVER_URL}/company`, submitData, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });

  return {
    type: REGISTER_COMPANY,
    payload: request,
  };
}

export function logoutJobSeeker() {
  const request = axios
    .get(`${process.env.REACT_APP_SERVER_URL}/jobseeker/logout`, {
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
    .get(`${process.env.REACT_APP_SERVER_URL}/jobseeker/auth`, {
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
