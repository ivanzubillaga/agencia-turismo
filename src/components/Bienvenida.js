import React from "react";
import { Container } from "react-bootstrap";

export const Bienvenida = ({ aerolineas }) => {
  return (
    //recibe aerolinea seleccionada y devuelve container con mensaje de bienvenida

    <Container className="p-5 text-center text-muted">
      {aerolineas ? (
        <p className="lead fw-light">
          Hola, bienvenido a nuestra agencia de turismo. Entendemos que quieres
          realizar un viaje en {aerolineas}. Completa el siguiente formulario
          para que podamos brindarte la información que necesitas."
        </p>
      ) : (
        <h1>Bienvenido!</h1>
      )}
    </Container>
  );
};
