import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage, HomePage, LoginPage, Register } from "../pages";
import { getCookie, setCookie } from "../utils/cookie";
import Layout from "../layout/Layout";

const Router = () => {
  const initialIsLoggedIn = getCookie("isLoggedIn") === "true";

  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  useEffect(() => {
    setCookie("isLoggedIn", isLoggedIn ? "true" : "false", 2);
  }, [isLoggedIn]);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home-page" />
            ) : (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/home-page"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={
            isLoggedIn ? (
              <Navigate to="/home-page" />
            ) : (
              <Register setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/dashboard"  element={<DashboardPage/>}/>
      </Routes>
    </Layout>
  );
};

export default Router;
