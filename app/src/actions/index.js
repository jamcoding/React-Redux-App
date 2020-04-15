import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    });
    setTimeout(() => {
        axios
            .get('https://www.balldontlie.io/api/v1/players')
            .then(response => {
                console.log("response", response.data.data)
                dispatch({ type: DATA_SUCCESS, payload: response.data.data })
            })
            .catch(error => {
                console.log("error", error);
                dispatch({ type: DATA_ERROR, payload: error });
            })
        }, 1500)
}