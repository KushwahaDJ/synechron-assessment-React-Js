
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../state/reducers";

const Login = () => {

  const state = useSelector((state: RootState) => state.movie)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const viewProfile = function() {
    navigate("/home");
};
  

/* listens to change event on username textField and dispatches
the setUsername action. */

const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
  (event) => {
    if(!event.target.value){
      dispatch({
        type: 'setUsername',
        payload: "Email address is required"
      });
    } else if (!/\S+@\S+\.\S+/.test(event.target.value)){
      dispatch({
        type: 'setUsername',
        payload: "Email address is invalid"
      });
    } else {
      dispatch({
        type: 'setUsername',
        payload: ""
      });
    }
  };

/* listens to change event on password textField and dispatches
the setPassword action. */

const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
  (event) => {
    if(!event.target.value){
      dispatch({
        type: 'setPassword',
        payload: "Password is required"
      });
    } else if(event.target.value.length < 8 && event.target.value.length > 15 ){
      dispatch({
        type: 'setPassword',
        payload: "Password must be 8 or more characters"
      });
    } else if(!/\d/.test(event.target.value)){
      dispatch({
        type: 'setPassword',
        payload: "Password must contain atleast 1 number"
      });
    } else if(!/[!@#$%&?]/g.test(event.target.value)){
      dispatch({
        type: 'setPassword',
        payload: "Password must contain atleast 1 special character"
      });
    } else if(!/[A-Z]/g.test(event.target.value)){
      dispatch({
        type: 'setPassword',
        payload: "Password must contain atleast 1 capitol letter"
      });
    } else {
      dispatch({
        type: 'setPassword',
        payload: ""
      });
    }
    
  }

  return (
    <form >
          <div className="login_form">
          <label htmlFor="exampleFormControlInput1">Username: </label>
            <input
              className="form-control"
              id="username"
              type="email"
              placeholder="Username"
              onChange={handleUsernameChange}
            />  
            <br/>
            {state.isError && (
               <p className="help is-danger">{state.helperText}</p>
            )}
             <label htmlFor="exampleFormControlInput1">Password: </label>
            <input
              className="form-control"
              id="password"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
            />
            {state.isErrorPass && (
               <p className="help is-danger">{state.helperTextPass}</p>
            )}
          
        
        
          <button className="btn btn-primary"
            onClick={viewProfile}
            disabled={!(state.helperText === "")}>
            Login
          </button>
      
        </div>
    </form>
  );
}

export default Login;