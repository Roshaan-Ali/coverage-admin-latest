// Custom Actions

import { baseUrl } from "../config/axios_function";
import axios from "axios";
import { toast } from "react-toastify";

// Authentication

export const login = (data) => async (dispatch) => {
  try {
    let response = await axios.post(`${baseUrl}/api/admin/login`, data);
    if (response.data.status) {
      toast.success(response.data.msg);
      dispatch({
        type: "ADMIN_LOGIN",
        payload: response.data.data,
      });
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: "ADMIN_LOGOUT",
    payload: {},
  });
};

export const changePassword = (data) => async () => {
  try {
    console.log(data);
    let response = await axios.post(
      `${baseUrl}/api/admin/updatepassword?admin_id=1`,
      data
    );
    if (response.data.status) {
      toast.success(response.data.msg);
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};

// Get all packages
export const get_all_subscriptions = () => async (dispatch) => {
  try {
    let response = await axios.get(`${baseUrl}/api/plan`);
    if (response.data.status) {
      dispatch({
        type: "GET_ALL_SUBSCRIPTION",
        payload: response.data.data,
      });
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};

export const update_subscription = (data) => async (dispatch) => {
  try {
    // console.log(data)
    let response = await axios.post(`${baseUrl}/api/plan/update?plan_id=${data.plan_id}`, data);
    if (response.data.status) {
      console.log(response);
      toast.success(response.data.msg);
      //   toast.warn(notification.data.msg);
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    console.log(error)
    toast.error("Network Error");
  }
};

// home
export const get_home_data = () => async (dispatch) => {
  try {
    let response = await axios.get(`${baseUrl}/api/admin/home`);
    if (response.data.status) {
      dispatch({
        type: "GET_HOME_DATA",
        payload: response.data.data,
      });
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};

// User management
export const get_all_users = () => async (dispatch) => {
  try {
    let response = await axios.get(`${baseUrl}/api/admin/users`);
    if (response.data.status) {
      dispatch({
        type: "USERS_LIST",
        payload: response.data.data,
      });
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};
export const enable_disable_account =
  (user_id, user_status) => async (dispatch) => {
    try {
      let response = axios.post(
        `${baseUrl}/api/admin/toggleuser?user_id=${user_id}`,
        { status: user_status }
      );
      let notification = await response;
      if (notification.data.status) {
        toast.warn(notification.data.msg);
      } else {
        toast.error(notification.data.msg);
      }
    } catch (error) {
      toast.error("Network Error");
    }
  };

export const update_user_detail = (user_id, data) => async (dispatch) => {
  try {
    let response = await axios.post(
      `${baseUrl}/api/admin/updateuserprofile?user_id=${user_id}`,
      data
    );
    if (response.data.status) {
      toast.success(response.data.msg);
      return response;
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    console.log(error, "---------------------");
    toast.error("Network Error");
  }
};

export const update_user_password = (user_id, data) => async (dispatch) => {
  try {
    let response = await axios.post(
      `${baseUrl}/api/admin/updateuserpassword?user_id=${user_id}`,
      data
    );
    if (response.data.status) {
      toast.success(response.data.msg);
      console.log(response.data.data);
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};

// Invoices Management
export const get_all_invoices = () => async (dispatch) => {
  try {
    let response = await axios.get(`${baseUrl}/api/admin/payments`);
    if (response.data.status) {
      dispatch({
        type: "GET_ALL_INVOICES",
        payload: response.data.data,
      });
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};

// Coverbook management
export const get_all_coverbooks = () => async (dispatch) => {
  try {
    let response = await axios.get(`${baseUrl}/api/admin/covers`);
    console.log(response.data.data);
    if (response.data.status) {
      dispatch({
        type: "GET_ALL_COVERBOOKS",
        payload: response.data.data,
      });
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};

export const delete_coverbook = (cover_id) => async (dispatch) => {
  try {
    let response = await axios.delete(
      `${baseUrl}/api/admin/deletecover?cover_id=${cover_id}`
    );
    if (response.data.status) {
      toast.success(response.data.msg);
      dispatch({
        type: "GET_ALL_COVERBOOKS",
        payload: response.data.data,
      });
    } else {
      toast.error(response.data.msg);
    }
  } catch (error) {
    toast.error("Network Error");
  }
};
