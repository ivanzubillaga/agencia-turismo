import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { ContactForm } from "./components/ContactForm";
import { Bienvenida } from "./components/Bienvenida";

function App() {
  //CONSTANTE AEROLINEA SELECCIONADA
  const [aerolinea, setAerolinea] = useState(false);

  return (
    <>
      {/* MENÚ NAVBAR */}
      <header>
        <NavBar aerolinea={aerolinea} setAerolinea={setAerolinea} />
      </header>

      {/* MENSAJE DE BIENVENIDA CON LA AEROLINEA SELECCIONADA */}
      <main>
      <section class="py-1 text-center container">
    <div class="row py-1">
      <div class="col-lg-6 col-md-8 mx-auto">
      <Bienvenida aerolineas={aerolinea} />
</div>
</div>
</section>
      {/* SI LA AEROLINEA FUE SELECCIONADA MUESTRO EL FORMULARIO */}

      {aerolinea ? (
        <div class="card shadow-sm bg-light">
          <div class="card-body">
            <ContactForm aerolineas={aerolinea} />
          </div>
        </div>
      ) : (
        <></>
      )}
      </main>
<footer class="text-muted py-5">
  <div class="container"> 
  </div>
</footer>

    </>
  );
}

export default App;
