import { ActionType } from "../action-types/index"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface UserNameAction {
    type: ActionType.SETUSERNAME,
    payload: string
}

interface SetPasswordAction {
    type: ActionType.SETPASSWORD,
    payload: string
}

interface SetIsButtonDisabledAction {
    type: ActionType.SETISBUTONDISABLED,
    payload: boolean
}

interface LoginSuccessAction {
    type: ActionType.LOGINSUCCES,
    payload: string
}

interface LoginFailedAction {
    type: ActionType.LOGINFAILED,
    payload: string
}

interface SetIsErrorAction {
    type: ActionType.SETERROR,
    payload: boolean
}

interface SetIsLogedInAction {
    type: ActionType.LOGEDIN,
    payload: boolean
}

export type Action = DepositAction | UserNameAction | SetPasswordAction | SetIsButtonDisabledAction | LoginSuccessAction | LoginFailedAction | SetIsErrorAction | SetIsLogedInAction ;