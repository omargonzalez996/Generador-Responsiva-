import React, { useState } from "react";
import "./estilos.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ModalGenerador from "./components/ModalGenerador";
import DocuWeb from "./components/DocuWeb";
import moment from "moment";
import { useEffect } from "react";

function App() {
  const [equipo, setEquipo] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [serie, setSerie] = useState("");
  const [costo, setCosto] = useState("");
  const [Responsable, setResponsable] = useState("");
  const [entrega, setEntrega] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    setFecha(moment(new Date()).format("DD/MM/YYYY"));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ModalGenerador
                  equipo={equipo}
                  setEquipo={setEquipo}
                  marca={marca}
                  setMarca={setMarca}
                  modelo={modelo}
                  setModelo={setModelo}
                  serie={serie}
                  setSerie={setSerie}
                  costo={costo}
                  setCosto={setCosto}
                  Responsable={Responsable}
                  setResponsable={setResponsable}
                  entrega={entrega}
                  setEntrega={setEntrega}
                />
              }
            />
            <Route
              path="responsiva"
              element={
                <DocuWeb
                  equipo={equipo}
                  marca={marca}
                  modelo={modelo}
                  serie={serie}
                  costo={costo}
                  Responsable={Responsable}
                  entrega={entrega}
                  fecha={fecha}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
