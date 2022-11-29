import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />

      <Container className="mt-5" style={{ minHeight: "73vh" }}>
        {children}
      </Container>

      <footer className="text-center text-light p-5 mt-5 footer">
        @2022 Copyright all right reserved  by Abishkar rai 
      </footer>
    </div>
  );
};