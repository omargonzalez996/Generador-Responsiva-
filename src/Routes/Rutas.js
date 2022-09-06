import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import DocuWeb from "../components/DocuWeb";
import ModalGenerador from "../components/ModalGenerador";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/inventario" element={<Inventario />} />
            <Route path="/asignaciones" element={<Asignaciones />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
