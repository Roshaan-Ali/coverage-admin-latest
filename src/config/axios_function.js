import axios from "axios";
import { toast } from "react-toastify";

/** ---------- BaseUrl ------------ */
const baseUrl = "http://20.203.45.189:3000";

/**
 * @description Sends a Get request to api
 * @param {String} route
 * @example "/api/route"
 * @returns Promise<any>
 */

// let Get = async (route, accessToken) => {
//   const options = accessToken
//     ? {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     : {
//         headers: {
//           "content-type": "application/json",
//         },
//       };
//   try {
//     const response = await axios.get(route, options);
//     if (response.data.status) {
//       toast.success(response.data.msg);
//       return response.data.data;
//     } else {
//       toast.error(response.data.msg);
//     //   return response;
//     }
//   } catch (error) {
//     toast.error("Network Error");
//   }
// };

/**
 * @description Sends a post request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 * @returns Promise<any>
 */

// let Post = async (route, data, headers, showAlert = true) => {
//   try {
//     return await axios.post(route, data, headers);
//   } catch (error) {
//     if (error.message === "Network Error") {
//       toast.error(`${error.message} : Please Check Your Network Connection`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       // <ToastContainer />;
//     } else if (error.response.status == 400) {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       // <ToastContainer />;
//     } else if (error.response.status == 401) {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       // <ToastContainer />;
//     } else {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
    // if (showAlert == true) {
    //   if (error.response.status == 422) {
    //     let arr = [];
    //     for (const key in error.response.data.errors) {
    //       if (error.response.data.errors.hasOwnProperty(key)) {
    //         const element = error.response.data.errors[key];
    //         arr.push(`* ${element}`);
    //       }
    //     }
    //     Alert.alert(
    //       'Submission Errors',
    //       arr.join('\n'),
    //       [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //       {cancelable: false},
    //     );
    //   }
    // }
//   }
// };

/**
 * @description Sends a post request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 *   @returns Promise<any>
 */

// let Patch = async (route, data, headers, showAlert = true) => {
//   try {
//     return await axios.patch(route, data, headers);
//   } catch (error) {
//     if (error.message === "Network Error") {
//       toast.error(`${error.message} : Please Check Your Network Connection`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else if (error.response.status == 400) {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else if (error.response.status == 401) {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//   }
// };

/**
 * @description Sends a post request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 *   @returns Promise<any>
 */

// let Put = (route, data) => {
//   return axios.put(route, data).then((response) => {
//     return response.data;
//   });
// };

/**
 * @description Sends a Delete request to api
 * @param {String} route
 * @example "/api/route"
 * @param {Object} data
 * @example {foo:bar}
 *   @returns Promise<any>
 */

// let Delete = async (route, data, headers, showAlert = true) => {
//   try {
//     return data == null
//       ? await axios.delete(route, headers)
//       : await axios.delete(route, data, headers);
//   } catch (error) {
//     if (error.message === "Network Error") {
//       toast.error(`${error.message} : Please Check Your Network Connection`, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else if (error.response.status == 400) {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else if (error.response.status == 401) {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     } else {
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//     }
//   }
// };

export { 
  // Post, Put, Get, Patch, Delete, 
  
  baseUrl };
