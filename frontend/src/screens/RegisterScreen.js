import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";
const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <div
      className="align-center text-center pt-10 pb-2 pl-20"
      style={{ paddingLeft: "400px", paddingRight: "400px" }}
    >
      <div className="bg-sky-500 pb-5">
        <h1 className="text-3xl py-5 font-bold">REGISTER</h1>
        <hr className="pt-5"></hr>
        {error && <p className="text-red-700 font-bold py-2">User Already Exists</p>}
        {message && <p className="text-red-700 font-bold py-2">Password do not match</p>}
        <form onSubmit={submitHandler}>
            <label
            id="name"
            style={{ paddingRight: "215px" }}
            className="font-bold pt-5"
            >
            Enter Name
            </label>
            <br />
            <input
            id="name"
            type='text'
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "300px" }}
            className=" bg-white border border-slate-300 rounded-md py-2 my-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
          <br />
            
          <label
            id="email"
            style={{ paddingRight: "200px" }}
            className="font-bold pt-5"
          >
            Email Address
          </label>
          <br />
          <input
            id="email"
            type="email"
            placeholder="username@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "300px" }}
            className=" bg-white border border-slate-300 rounded-md py-2 my-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <br />

          <label
            id="password"
            style={{ paddingRight: "230px" }}
            className="font-bold"
          >
            Password
          </label>
          <br />
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "300px" }}
            className=" bg-white border border-slate-300 rounded-md py-2 my-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <br />
        
          <label
            id="confirmpassword"
            style={{ paddingRight: "160px" }}
            className="font-bold"
          >
            Confirm Password
          </label>
          <br />
          <input
            id="confirmpassword"
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "300px" }}
            className=" bg-white border border-slate-300 rounded-md py-2 my-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <br />
          <button
            type="submit"
            className="bg-red-600 py-2 px-5 mb-2 font-bold rounded-md"
            isLoading={loading}
          >
            Register
          </button>
        </form>
        <a className="py-5 mb-2" href='/login'>Already Customer? Go to login</a>
      </div>
    </div>
  );
};
export default RegisterScreen;
