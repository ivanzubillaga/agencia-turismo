import { Alert } from 'react-bootstrap';
import React from 'react'

export const Mensaje = ({mensaje}) => {
  return (
        <Alert variant="danger">      
      <p>
      {mensaje}      
      </p>      
    </Alert>
  );
}

