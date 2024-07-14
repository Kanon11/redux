import { authSlice } from "./slice";
const { actions: slice } = authSlice;

export const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
}

export const logoutAction = () => (dispatch) => {
    dispatch(slice.setLogout());
}

export const getDataAction = () => (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            console.log("worng on api call")
        }
    }).then((json)=>dispatch(slice.setData(json)))
}