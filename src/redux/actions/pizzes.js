import axios from "axios";

export const fetchPizzes = () => (dispatch) => {
  axios.get(`http://localhost:3000/pizzes`).then(({ data }) => {
    dispatch(setPizzes(data));
  });
};

export const setPizzes = (items) => ({
  type: "SET_PIZZES",
  payload: items,
});
