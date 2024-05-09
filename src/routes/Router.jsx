import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  DashboardPage,
  HomePage,
  LoginPage,
  PostDetails,
  Register,
} from "../pages";
import { getCookie, setCookie } from "../utils/cookie";
import Layout from "../layout/Layout";

const Router = () => {
  const initialIsLoggedIn = getCookie("isLoggedIn") === "true";

  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  useEffect(() => {
    setCookie("isLoggedIn", isLoggedIn ? "true" : "false", 2);
  }, [isLoggedIn]);

  return (
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
        path="/register"
        element={
          isLoggedIn ? (
            <Navigate to="/home-page" />
          ) : (
            <Register setIsLoggedIn={setIsLoggedIn} />
          )
        }
      />
      <Route>
        <Route
          element={
            isLoggedIn ? (
              <Layout>
                <HomePage />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
          path="/home-page"
        />
        <Route
          element={
            isLoggedIn ? (
              <Layout>
                <DashboardPage />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
          path="/dashboard"
        />
        <Route
          element={
            isLoggedIn ? (
              <Layout>
                <PostDetails />
              </Layout>
            ) : (
              <Navigate to="/" />
            )
          }
          path="/details/:id"
        />
      </Route>
    </Routes>
  );
};

export default Router;
