import { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { useSelector } from "react-redux";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logInHelper, setLogInHelper] = useState(false);

  const userData = useSelector((store) => store.userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setIsLoggedIn(true);
      setLogInHelper(true);
    } else {
      setIsLoggedIn(false);
      setLogInHelper(true);
      navigate("/login");
    }
  }, [userData]);
  return (
    <>
      <Routes>
        {logInHelper && isLoggedIn && <Route path="/" element={<HomePage />} />}
        {logInHelper && isLoggedIn && (
          <Route path="/profile" element={<ProfilePage />} />
        )}

        {logInHelper && !isLoggedIn && (
          <Route path="/login" element={<LoginPage />} />
        )}
        {logInHelper && isLoggedIn && <Route path="*" element={<HomePage />} />}
        {logInHelper && !isLoggedIn && (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </>
  );
}

export default App;
