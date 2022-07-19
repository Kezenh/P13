import { createStore } from "redux"

const initialState = {
    token: "",
    datas: {}
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

function reducer(state, action) {
    if (action.type === "datasFetched") {
        return {
            ...state,
            datas: action.payload.datas
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

export let store = createStore(reducer, initialState)