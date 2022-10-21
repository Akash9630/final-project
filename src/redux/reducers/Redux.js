import { LOAD_MOVIES_SUCCESS } from "../../API/Actions/MovieListAction"
const initialState = {
    loading: false,
    movieList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MOVIES_SUCCESS: {
            console.log(JSON.stringify(action))
            return {
                ...state,
                movieList: action.movies,
                loading: false
            }
        }
        default: return state;
    }
}

export default reducer
