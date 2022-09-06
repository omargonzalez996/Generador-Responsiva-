import "./DocuWeb.style.css";
import logoOmar from "../assets/WhiteBack.png";
import print from "../assets/printing.png";
import React from "react";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

const DocuWeb = ({
  equipo,
  marca,
  modelo,
  serie,
  costo,
  Responsable,
  entrega,
  fecha,
}) => {
  let componentRef = useRef(null);

  return (
    <>
      <ReactToPrint
        trigger={() => {
          return (
            <button id="btn-print">
              <img id="icon" src={print} alt="" />
              Imprimir/Exportar
            </button>
          );
        }}
        documentTitle={`Responsiva ${Responsable}`}
        content={() => componentRef}
      />
      <page
        ref={(el) => {
          componentRef = el;
        }}
        size="A4"
        id="documento"
      >
        <div id="container-logo">
          <img id="logo" src={logoOmar} alt="" />
        </div>
        <p id="lugarfecha">{`Salvatierra, Guanajuato. a ${fecha}`}</p>
        <section id="contenido">
          <section id="section-header">
            <h1>Carta Responsiva de Equipo de Computo</h1>
            <p>
              Recibí de la empresa MORPHEUS DSS el equipo de cómputo que se
              menciona a continuación:
            </p>
          </section>
          <section id="section-tabla">
            <table id="pdf-tabla">
              <tr>
                <th>EQUIPO</th>
                <th>MARCA</th>
                <th>MODELO</th>
                <th>NUMERO DE SERIE</th>
              </tr>
              <tr>
                <td>{`${equipo}`}</td>
                <td>{`${marca}`}</td>
                <td>{`${modelo}`}</td>
                <td>{`${serie}`}</td>
              </tr>
            </table>
          </section>
          <p id="compromiso">
            {`El cual me comprometo a cuidar, mantener en buen estado y utilizar única
        y exclusivamente para asuntos relacionados con mi actividad laboral. En
        caso de su extravío, daño o uso inadecuado me responsabilizo a pagar el
        costo de la reposición del equipo la cantidad de $${costo} Pesos.`}
          </p>
          <section id="section-firmas">
            <div>
              <p>___________________________________________</p>
              <p>FIRMA DE QUIEN RECIBE EL EQUIPO</p>
              <p>{`${Responsable}`}</p>
            </div>
            <div>
              <p>___________________________________________</p>
              <p>FIRMA DE QUIEN ENTREGA EL EQUIPO</p>
              <p>{`${entrega}`}</p>
            </div>
          </section>
        </section>
      </page>
    </>
  );
};
export default DocuWeb;
