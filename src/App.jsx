import { useState } from "react";
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
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Routes>
        {isLoggedIn && <Route path="/" element={<HomePage />} />}
        {isLoggedIn && <Route path="/profile" element={<ProfilePage />} />}

        {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
        {isLoggedIn && <Route path="*" element={<HomePage />} />}
        {!isLoggedIn && <Route path="*" element={<LoginPage />} />}
      </Routes>
    </>
  );
}

export default App;
