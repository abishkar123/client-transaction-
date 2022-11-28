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
        @Cobyright all right reserved 2022 || Made with fun by Abishkar rai 
      </footer>
    </div>
  );
};