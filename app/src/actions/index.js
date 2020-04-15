import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    });
    axios
        .get('https://www.balldontlie.io/api/v1/players')
        .then(response => {
            console.log("response", response.data)
            dispatch({type: DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log("error", error);
            dispatch({ type: DATA_ERROR, payload: error});
        })
}