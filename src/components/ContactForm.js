import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Row, Col, Container } from "react-bootstrap";
import { LightBox } from "./LightBox";
import { Mensaje } from "./Mensaje";
import {
  validarEdad,
  validarCaracteresEspeciales,
  validarFormatoFecha
} from "../helpers/Validadators";
export const ContactForm = ({ aerolineas }) => {
  const [validar, setvalidar] = useState(false);
  const [showLightBox, setShowLightBox] = useState(false);
  const [mensaje, setMensaje] = useState(false);
  //defino el objeto del form
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    celular: "",
    edad: "",
    fecha: "",
    origen: "",
    destino: "",
    aerolinea: aerolineas,
  });

  const { nombre, email, celular, edad, fecha, origen, destino } = formState;

  // capturo el ingreso de datos de los input

  const onInputchange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case "nombre":
      case "origen":
      case "destino":
        if (validarCaracteresEspeciales(value)) {
          setFormState({ ...formState, [name]: value });
        }
        break;

      default:
        setFormState({ ...formState, [name]: value });
        break;
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    //validaciones de los datos recibidos del evento form
    if (form.checkValidity() === false || validarEdad(form.edad.value)||!validarFormatoFecha(form.fecha.value)) {
      event.stopPropagation();
      setvalidar(true);
      setMensaje(
        "El formulario no pudo ser enviado, revise los datos ingresados."
      );
    } else {
      //Formulario exitoso, muestro por consola el objeto del form
      console.log(formState);
      setShowLightBox(true);
      setvalidar(false);
      setMensaje(false);
      //reseteo formulario
      setFormState({
        nombre: "",
        email: "",
        celular: "",
        edad: "",
        fecha: "",
        origen: "",
        destino: "",
        aerolinea: "",
      });
    }
  };

  return (
    <Container className="px-5">
      {/* si no se eligio ninguna aerolineas muestro mensaje de bienvenida */}

      {mensaje ? <Mensaje mensaje={mensaje}></Mensaje> : <></>}

      {/* FORMULARIO */}

      <Form noValidate validated={validar} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="ingrese Nombre completo"
              name="nombre"
              value={nombre}
              onChange={onInputchange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar solo letras sin caracteres especiales.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Ingrese Email"
              name="email"
              value={email}
              onChange={onInputchange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar un email valido, ej.: nombre@email.com
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Celular</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese Numero Celular"
              name="celular"
              value={celular}
              onChange={onInputchange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar solo numeros
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Edad</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese Edad"
              name="edad"
              value={edad}
              onChange={onInputchange}
              min="18"      
              max="100"     
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar solo numeros entre 18 y 100.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Ingrese Fecha de viaje"
            name="fecha"
            value={fecha}
            onChange={onInputchange}
            min={new Date().toISOString().slice(0, 10)} // seteo fecha actual como minima para elegir.
          />
          <Form.Control.Feedback type="invalid">
            Debe ingresar una fecha valida.
          </Form.Control.Feedback>
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Origen</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese ciudad de origen"
              name="origen"
              value={origen}
              onChange={onInputchange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar solo letras sin caracteres especiales.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Destino</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingrese ciudad de destino"
              name="destino"
              value={destino}
              onChange={onInputchange}
            />
            <Form.Control.Feedback type="invalid">
              Debe ingresar solo letras sin caracteres especiales.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button variant="secondary" type="submit">
          Enviar
        </Button>
      </Form>
      {/* FIN FORMULARIO */
      /* muestro lighBox si el formulario fue exitoso*/}

      {showLightBox ? <LightBox setShowLightBox={setShowLightBox} /> : <></>}
    </Container>
  );
};


ContactForm.propTypes = {
  aerolineas: PropTypes.string.isRequired
};