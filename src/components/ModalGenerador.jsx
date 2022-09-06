import "./Generador.css";
import React from "react";
import clean from "../assets/clean.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ModalGenerador = ({
  equipo,
  setEquipo,
  marca,
  setMarca,
  modelo,
  setModelo,
  serie,
  setSerie,
  costo,
  setCosto,
  Responsable,
  setResponsable,
  entrega,
  setEntrega,
}) => {
  let navigate = useNavigate();

  //Inicializar los valores para evitarme escribir todo cada vez que inicio la aplicacion
  useEffect(() => {
    setEquipo("Laptop");
    setMarca("Apple");
    setModelo("MacBook Pro 16 2019");
    setSerie("ISSN-615-682536");
    setCosto("50000");
    setResponsable("Luis Omar González Garcia");
    setEntrega("Adriana Molina López");
  }, []);

  const HandleSubmit = (e) => {
    e.preventDefault();
    navigate("/responsiva", { replace: true });
  };

  const HandleClean = () => {
    setEquipo("");
    setMarca("");
    setModelo("");
    setSerie("");
    setCosto("");
    setResponsable("");
    setEntrega("");
  };

  return (
    <>
      <div id="contenedor-input-pdf">
        <label id="titulo_modal">Generador Responsíva</label>
        <form id="formulario" onSubmit={(e) => HandleSubmit(e)}>
          <input
            className="input-pdf"
            id="pdf-equipo"
            placeholder="Equipo"
            value={equipo}
            onChange={(e) => setEquipo(e.target.value)}
          />
          <input
            className="input-pdf"
            id="pdf-marca"
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
          <input
            className="input-pdf"
            id="pdf-modelo"
            placeholder="Modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
          <input
            className="input-pdf"
            id="pdf-serie"
            placeholder="Numero de Serie"
            value={serie}
            onChange={(e) => setSerie(e.target.value)}
          />
          <input
            type="number"
            className="input-pdf"
            id="pdf-costo"
            placeholder="Costo"
            value={costo}
            onChange={(e) => setCosto(e.target.value)}
          />
          <input
            className="input-pdf"
            id="res-nombre"
            placeholder="Nombre del Responsable"
            value={Responsable}
            onChange={(e) => setResponsable(e.target.value)}
          />
          <input
            className="input-pdf"
            id="res-entrega"
            placeholder="Nombre de quien entrega"
            value={entrega}
            onChange={(e) => setEntrega(e.target.value)}
          />
          <button type="button" id="btn-limpiar" onClick={() => HandleClean()}>
            <img id="icono-btn-limpiar" src={clean} alt="" />
          </button>
          <button type="submit" id="boton-pdf">
            Generar Responsiva
          </button>
        </form>
      </div>
    </>
  );
};

export default ModalGenerador;
