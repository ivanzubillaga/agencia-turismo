import { ContactForm } from "../components/ContactForm";
import { getByLabelText, getByText, render, screen } from '@testing-library/react';

test('Comprueba que existan todos los campos del form y reciba el strind de la aerolinea', () => {
    const aerolinea = "Qatar Airways"
    const {getByText} = render(<ContactForm aerolineas={aerolinea}/>);      

    expect(getByText('Nombre')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('Celular')).toBeTruthy();
    expect(getByText('Edad')).toBeTruthy();
    expect(getByText('Fecha')).toBeTruthy();
    expect(getByText('Origen')).toBeTruthy();
    expect(getByText('Destino')).toBeTruthy();
    
})
