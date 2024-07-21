import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-screen container mx-auto "> {children}</div>
      <Footer />
    </>
  );
};

export default Layout;
