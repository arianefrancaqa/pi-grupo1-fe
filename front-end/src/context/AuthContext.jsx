import React, { createContext, useState, useEffect } from "react";
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const navigate = useNavigate();

  //testando
  useEffect(() => {
    const response = localStorage.getItem("user_name");
    if (response) {
      saveIsLoggedIn(true)
      setUser(response);
    }
  }, [isLoggedIn]);

  const logout = () => {
    removeLocalStorage()
    saveIsLoggedIn(false);
    navigate("/");
  }

  function saveIsLoggedIn(status) {
    setIsLoggedIn(status);
  }

  function saveToken(token) {
    const myDecodedToken = decodeToken(token);
    //debugger
    localStorage.setItem("user_name", myDecodedToken.Username);
    localStorage.setItem("token", token);
    saveIsLoggedIn(true)
  }

  function getToken() {
    return localStorage.getItem("token");
  }

  function removeLocalStorage() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, logout, isLoggedIn, saveIsLoggedIn, removeLocalStorage, getToken, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
