import { Provider } from "react-redux";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import store from "./store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
);
