import { createStore } from "redux"

const initialState = {
    token: "",
    datas: ""
}

export function tokenFetched(token) {
    return {
        type: "tokenFetched",
        payload: {
            token: token
        }
    }
}

export function datasFetched(datas) {
    return {
        type: "datasFetched",
        payload: {
            datas: datas
        }
    }
}

function reducer(state = initialState, action) {
    if (action.type === "datasFetched") {
        return {
            ...state,
            datas: action.payload.datas || {}
        }

    }

    if (action.type === "tokenFetched") {
        return {
            ...state,
            token: action.payload.token
        }
    }

    return state
}

export  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())