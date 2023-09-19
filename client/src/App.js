import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "scenes/loginPage/Login";
import Home from "scenes/homePage/Home";
import Profile from "scenes/profilePage/Profile";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile/:userId" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
