import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { Action } from "../actions/index"

export const depositMoney = (amount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const handleLogin = (logedIn: boolean) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGEDIN,
            payload: logedIn
        })
    }
}


