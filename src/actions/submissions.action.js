import axios from "../helpers/axios";
import { submissionConstants } from "./constants";

export const CreateSubmissions = (submission) => {
  return async (dispatch) => {
    dispatch({ type: submissionConstants.ADD_SUBMISSION_REQUEST });
    const res = await axios.post("/admin/submission/create", submission);

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: submissionConstants.ADD_SUBMISSION_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      dispatch({
        type: submissionConstants.ADD_SUBMISSION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const DeleteSubmission = (submissionId) => {
  return async (dispatch) => {
    dispatch({ type: submissionConstants.DELETE_SUBMISSION_REQUEST });
    const res = await axios.delete("/admin/submissions/delete/" + submissionId);
    console.log(res);
    if (res.status === 200) {
      console.log("DONE");
      dispatch({
        type: submissionConstants.DELETE_SUBMISSION_SUCCESS,
        payload: {
          submissionId,
        },
      });
    } else {
      dispatch({
        type: submissionConstants.DELETE_SUBMISSION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const UpdateSubmissions = (submission) => {
  return async (dispatch) => {
    dispatch({ type: submissionConstants.EDIT_SUBMISSION_DETAILS_REQUEST });
    const res = await axios.post("/admin/submission/update", submission);

    if (res.status === 202) {
      const { message } = res.data;
      dispatch({
        type: submissionConstants.EDIT_SUBMISSION_DETAILS_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      dispatch({
        type: submissionConstants.EDIT_SUBMISSION_DETAILS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getSubmissions = () => {
  return async (dispatch) => {
    dispatch({ type: submissionConstants.GET_SUBMISSION_DETAILS_REQUEST });
    const res = await axios.get("/admin/submissions");

    if (res.status === 200) {
      dispatch({
        type: submissionConstants.GET_SUBMISSION_DETAILS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: submissionConstants.GET_SUBMISSION_DETAILS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getSubmissionByID = (id) => {
  return async (dispatch) => {
    dispatch({ type: submissionConstants.GET_ONE_SUBMISSION_DETAIL_REQUEST });

    const res = await axios.get("admin/submissions/" + id);

    if (res.status === 201) {
      console.log("ACTION", res.data);
      dispatch({
        type: submissionConstants.GET_ONE_SUBMISSION_DETAIL_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: submissionConstants.GET_ONE_SUBMISSION_DETAIL_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const AddFileSubmission = (submission) => {
  for (var value of submission.values()) {
    console.log(value);
  }
  return async (dispatch) => {
    dispatch({ type: submissionConstants.ADD_SUBMISSION_FILE_REQUEST });
    const res = await axios.post("/student/submission/add", submission);

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: submissionConstants.ADD_SUBMISSION_FILE_SUCCESS,
        payload: {
          message,
        },
      });
    } else {
      dispatch({
        type: submissionConstants.ADD_SUBMISSION_FILE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

// export const getMovie = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: movieConstants.GET_MOVIE_REQUEST });
//     const res = await axios.get(id);
//     if (res.status === 201) {
//       dispatch({
//         type: movieConstants.GET_MOVIE_SUCCESS,
//         payload: { movie: res.data.movie },
//       });
//     } else {
//       dispatch({
//         type: movieConstants.GET_MOVIE_FAILURE,
//         payload: { error: res.data.error },
//       });
//     }
//   };
// };

// export const AddtoCart = (item) => {
//   return async (dispatch) => {
//     dispatch({ type: cartConstants.ADD_TO_CART_REQUEST });
//     const res = await axios.post("/user/cart/addtocard", {
//       ...item,
//     });

//     if (res.status === 201) {
//       const { message } = res.data;
//       dispatch({
//         type: cartConstants.ADD_TO_CART_SUCCESS,
//         payload: {
//           message,
//         },
//       });
//     } else {
//       if (res.status === 400) {
//         dispatch({
//           type: cartConstants.ADD_TO_CART_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     }
//   };
// };

// export const getCart = () => {
//   return async (dispatch) => {
//     dispatch({ type: cartConstants.GET_TO_CART_REQUEST });
//     const res = await axios.get("/user/cart/getCartItems");
//     console.log(res);
//     if (res.status === 200) {
//       dispatch({
//         type: cartConstants.GET_TO_CART_SUCCESS,
//         payload: { cartItemList: res.data.cartItems },
//       });
//     } else {
//       dispatch({
//         type: cartConstants.GET_TO_CART_FAILURE,
//         payload: { error: res.data.error },
//       });
//     }
//   };
// };

// export const RemoveFromCart = (item) => {
//   return async (dispatch) => {
//     dispatch({ type: cartConstants.REMOVE_FROM_CART_REQUEST });
//     const res = await axios.post("/user/cart/removeCartItems", {
//       ...item,
//     });

//     if (res.status === 202) {
//       const { message } = res.data;
//       dispatch({
//         type: cartConstants.ADD_TO_CART_SUCCESS,
//         payload: {
//           message,
//         },
//       });
//     } else {
//       if (res.status === 400) {
//         dispatch({
//           type: cartConstants.REMOVE_FROM_CART_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//     }
//   };
// };
