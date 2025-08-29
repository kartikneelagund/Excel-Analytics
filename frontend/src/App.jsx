// App.jsx
import './App.css';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Loginpage/navbar/navbar";
import Signup from "./components/Loginpage/Singup";
import Login from "./components/Loginpage/Login";
import Footer from "./components/Loginpage/footer/footer";

import Sidebar from './components/Dashbord/layout/Sidebar/Sidebar';
import Content from './components/Dashbord/layout/Content/Content';
import Charts_page from './components/Dashbord/Main_pages/Charts_page/Charts_page';
import Users_page from './components/Dashbord/Main_pages/Users_page/Users_page';
import AI_Insights_page from './components/Dashbord/Main_pages/AI_Insights_page/AI_Insights_page';
import Help_page from './components/Dashbord/Main_pages/Help_page/Help_page';
import Setting_page from './components/Dashbord/Main_pages/Setting_page/Setting_page';

// Landing page
function LandingPage() {
  return (
    <div className="landing">
      <Navbar />
      <div className="landing-content" style={{ textAlign: "center", padding: "4rem" }}>
        <h1>Welcome to Excel Analytics 📊</h1>
        <p>Upload, analyze, and visualize your Excel data with ease.</p>
        <div style={{ marginTop: "2rem" }}>
          <a href="/login" className="btn">Login</a>
          <a href="/signup" className="btn" style={{ marginLeft: "1rem" }}>Signup</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Logout component
function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); // Clear login token
    navigate("/login", { replace: true }); // Redirect to login
  }, [navigate]);

  return null;
}

// Protect private pages
const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("token");
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      
      <Route path="/signup" element={
        <>
          <Navbar />
          <Signup />
          <Footer />
        </>
      } />
      
      <Route path="/login" element={
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      } />

      {/* Private Routes */}
      <Route path="/dashboard" element={
        <PrivateRoute>
          <div className="app">
            <Sidebar />
            <Content />
          </div>
        </PrivateRoute>
      } />

      <Route path="/users" element={
        <PrivateRoute>
          <div className="app">
            <Sidebar />
            <Users_page />
          </div>
        </PrivateRoute>
      } />

      <Route path="/charts" element={
        <PrivateRoute>
          <div className="app">
            <Sidebar />
            <Charts_page />
          </div>
        </PrivateRoute>
      } />

      <Route path="/ai-insights" element={
        <PrivateRoute>
          <div className="app">
            <Sidebar />
            <AI_Insights_page />
          </div>
        </PrivateRoute>
      } />

      <Route path="/help" element={
        <PrivateRoute>
          <div className="app">
            <Sidebar />
            <Help_page />
          </div>
        </PrivateRoute>
      } />

      <Route path="/settings" element={
        <PrivateRoute>
          <div className="app">
            <Sidebar />
            <Setting_page />
          </div>
        </PrivateRoute>
      } />

      <Route path="/logout" element={<Logout />} />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} replace />} />
    </Routes>
  );
}

export default App;
