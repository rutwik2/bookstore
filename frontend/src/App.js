import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="mt-20 pt-5 flex flex-col">
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path="/register" element={<RegisterScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
