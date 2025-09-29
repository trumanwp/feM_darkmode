import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx"; // your main screen
import Login from "./components/Login.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { useAuth } from "./useAuth.js";
import "./index.css";

function Root() {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute user={user}>
                            <App /> {/* App is now your dashboard */}
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
