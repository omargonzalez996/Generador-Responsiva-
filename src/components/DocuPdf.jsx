import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

const DocuPdf = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text
            style={{
              marginTop: "100px",
              fontSize: "14px",
              marginBottom: "50px",
              textAlign: "right",
            }}
          >
            Salvatierra Gto a 25/07/2022
          </Text>
          <View>
            <Text
              style={{
                fontSize: "20px",
                marginBottom: "50px",
              }}
            >
              Carta Responsiva de Equipo de Computo
            </Text>
            <Text
              style={{
                fontSize: "14px",
                marginBottom: "50px",
              }}
            >
              Recibí de la empresa MORPHEUS DSS el equipo de cómputo que se
              menciona a continuación:
            </Text>
          </View>
          <Text
            style={{
              marginBottom: "120px",
            }}
          >
            El cual me comprometo a cuidar, mantener en buen estado y utilizar
            única y exclusivamente para asuntos relacionados con mi actividad
            laboral. En caso de su extravío, daño o uso inadecuado me
            responsabilizo a pagar el costo de la reposición del equipo la
            cantidad de $ 25,000 Pesos.
          </Text>
          <View
            style={{
              display: "flex",
              alignContent: "space-between",
              fontSize: "14px",
            }}
          >
            <View
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text>___________________________________________</Text>
              <Text>FIRMA DE QUIEN RECIBE EL EQUIPO</Text>
              <Text>LUIS OMAR GONZALEZ GARCIA</Text>
            </View>
            <View
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text>___________________________________________</Text>
              <Text>FIRMA DE QUIEN ENTREGA EL EQUIPO</Text>
              <Text>ADRIANA MOLINA LÓPEZ</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
export default DocuPdf;
