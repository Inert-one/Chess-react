import * as types from "./";

import { ActionCreators } from "redux-undo";
import { setNextMovableTiles } from "./game";


export function setReset() {
    return {
        type: types.RESET
    }
}


export function reset() {
    return (dispatch) => {
        dispatch(ActionCreators.clearHistory());
        dispatch(setReset());
        dispatch(setNextMovableTiles());
    }
}