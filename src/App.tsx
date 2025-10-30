import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import ExchangePage from "./pages/exchange-page";
import HomePage from "./pages/home-page";
import ProtectedRoute from "./guards/protect-routes";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/exchange" element={<ExchangePage />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
