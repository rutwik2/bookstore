import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [searchParams] = useSearchParams();
  let redirect = searchParams.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo,redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="align-center text-center pt-10 pb-2 pl-20" style={{paddingLeft:'400px',paddingRight:"400px"}}>
      <div className="bg-sky-500 pb-5">
        <h1 className="text-3xl py-5 font-bold">LOGIN</h1>
        <hr className="pt-5"></hr>
        <form onSubmit={submitHandler}>
          {error?(<p className="text-red-700 font-bold py-2">Invalid Email Or Password</p>):(<p></p>)}
          <label id="email" style={{paddingRight:'185px'}} className="font-bold pt-5">Email Address</label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="username@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width:'300px'}}
            className=" bg-white border border-slate-300 rounded-md py-2 my-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <br />
          

          <label id="password" style={{paddingRight:'215px'}} className="font-bold">Password</label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{width:'300px'}}
            className=" bg-white border border-slate-300 rounded-md py-2 my-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <br />
          <br />
          <button type="submit"  className="bg-red-600 py-2 px-5 mb-2 font-bold rounded-md">Login</button>
        </form>
        <a className="py-5 mb-2" href="/register">New here? Click to Register</a>
      </div>
      
    </div>
  );
};
export default LoginScreen;
