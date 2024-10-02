"use client"

import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../modules/App.module.css";
import "../Global.css";

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header handleLogout={handleLogout} />
          <div className="contenedor">
            <Sidebar />
            <div className="areaPrincipal">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Component {...pageProps} onLogin={handleLogin} />
      )}
    </>
  );
}

export default MyApp;
