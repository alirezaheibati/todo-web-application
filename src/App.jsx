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
import useHttp from "./hooks/use-http";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logInHelper, setLogInHelper] = useState(false);

  const userData = useSelector((store) => store.userInfo);
  const navigate = useNavigate();
  let userInfoID = localStorage.getItem("userId");
  useEffect(() => {
    if (userInfoID) {
      setIsLoggedIn(true);
      setLogInHelper(true);
    } else {
      setIsLoggedIn(false);
      setLogInHelper(true);
      navigate("/login");
    }
  }, [userInfoID]);
  return (
    <>
      <Routes>
        {logInHelper && isLoggedIn && (
          <Route path="/homepage" element={<HomePage />} />
        )}
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
