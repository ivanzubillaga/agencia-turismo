import React from "react";
import { useState } from "react";
export const LightBox = ({ setShowLightBox }) => {
  const [fade, setFade] = useState("lightbox");
  const handleClose = () => {
    setFade("lightbox fadeout");
    setTimeout(() => {
      setShowLightBox(false);
    }, 5000);
  };
  return (
    <>
      <div onClick={handleClose} className={fade}>
        <h3>
          Tu información fue enviada con éxito, estaremos en contacto contigo
        </h3>
      </div>
    </>
  );
};
