import React from "react";

const About = () => {
  return (
    <div>
      <div className="imagenabout">
        <div
          className="text-center"
          style={{
            color: "F081B4",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: " rgb(255, 255, 255)",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
          }}
        >
          <h1 style={{ fontSize: "45px", marginBottom: "30px" }}>
            ABOUT CLEANING SERVICE
          </h1>

          <h3 style={{ fontSize: "20px", textAlign: "justify" }}>
            Somos una institución comprometida con la limpieza y el
            embellecimiento de nuestra ciudad. A través de nuestra plataforma de
            denuncias en línea, animamos a los residentes a informar sobre
            problemas de aseo y ornato. Trabajamos en estrecha colaboración con
            las autoridades locales y la comunidad para resolver estos problemas
            y hacer que nuestra ciudad sea más agradable para todos. Únete a
            nosotros para ser parte del cambio positivo en nuestra comunidad.
            Nuestra misión es promover un entorno limpio y hermoso para todos. A
            través de la colaboración activa con las autoridades locales,
            empresas y la comunidad en general, trabajamos incansablemente para
            abordar y resolver los problemas de aseo y ornato en nuestra ciudad.
          </h3>
          <h1 style={{ fontSize: "40px", marginTop: "30px" }}>
            Tu voz es nuestro motor
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
