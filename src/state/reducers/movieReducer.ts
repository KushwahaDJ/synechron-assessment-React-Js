import { ActionType } from "../action-types/index"
import { Action } from "../actions"

type State = {
    number: number,
    username: string
    password:  string
    isButtonDisabled: boolean
    helperText: string
    isError: boolean,
    isErrorPass:boolean
    helperTextPass: string
  };

const initialState:State = {
    number: 0,
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: 'Error Msg',
    isError: false,
    helperTextPass: '',
    isErrorPass: false
  };


const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type){
        case ActionType.DEPOSIT:
            return {
                ...state,
                number: state.number + action.payload 
            }
        case ActionType.SETUSERNAME: 
            return {
              ...state,
              helperText: action.payload,
              isError: true
            };
          case ActionType.SETPASSWORD: 
            return {
              ...state,
              helperTextPass: action.payload,
              isErrorPass: true
            };
          case ActionType.SETISBUTONDISABLED: 
            return {
              ...state,
              isButtonDisabled: action.payload
            };
          case ActionType.LOGINSUCCES: 
            return {
              ...state,
              helperText: action.payload,
              isError: false
            };
          case ActionType.LOGINFAILED: 
            return {
              ...state,
              helperText: action.payload,
              isError: true
            };
          case ActionType.SETERROR: 
            return {
              ...state,
              isError: action.payload
            };

        default:
            return state;
    }
}

export default reducer