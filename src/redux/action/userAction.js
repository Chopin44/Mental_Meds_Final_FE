import axios from "axios";

export const GET_USER = "GET_USER";

function sucsessGet(params) {
  return {
    type: GET_USER,
    payload: params,
  };
}

export const getUser = () => {
  return async (dispatch) => {
    const result = await axios.post(
      "https://impossible-gear-boa.cyclic.app/api/login"
    );
    dispatch(sucsessGet(result.data));
  };
};
