import { Navigate, Route, Routes } from "react-router-dom";
import Login from "scenes/loginPage/Login";
import Home from "scenes/homePage/Home";
import Profile from "scenes/profilePage/Profile";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/profile/:userId"
            element={isAuth ? <Profile /> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
