import { FETCH_DATA, DATA_SUCCESS, DATA_ERROR } from '../actions';

const initialState =  {
    player: [],
    loading: false,
    error: ''
};

export const rootReducer = (state = initialState, action) => {
    console.log('reducer action', action);
    switch (action.type) {
        case FETCH_DATA: 
            return {
                ...state,
                loading: true
            }
        case DATA_SUCCESS: 
            return {
                ...state,
                player: action.payload,
                loading: false,
                error: ''
            };
        case DATA_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        default:
            return state;
    }
};