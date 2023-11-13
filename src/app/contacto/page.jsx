"use client";
import React from "react";
import { useState } from "react";

const Contacto = () => {
  const [correo, setCorreo] = useState(false);
  const [tel, setTel] = useState(false);
  const [face, setFace] = useState(false);
  const [insta, setInsta] = useState(false);

  const handleCorreo = () => {
    if (correo === false) {
      setCorreo(true);
    } else {
      setCorreo(false);
    }
  };
  const handleFace = () => {
    if (face === false) {
      setFace(true);
    } else {
      setFace(false);
    }
  };
  const handleInsta = () => {
    if (insta === false) {
      setInsta(true);
    } else {
      setInsta(false);
    }
  };
  const handleTel = () => {
    if (tel === false) {
      setTel(true);
    } else {
      setTel(false);
    }
  };

  return (
    <div>
      <div className="imagencontacto h-screen ">
        <div className="encabezadocontacto">
          <h1 className="text-5xl">CONTÁCTANOS</h1>
        </div>
        <div className="container lg:flex lg:justify-center lg:items-center lg:space-x-20 lg:mt-52 mt-28 flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center">
          <div className="lg:space-y-20 space-y-10">
            <div>
              <button
                className="  py-2 px-5 text-white bg-teal-600 w-40 hover:bg-teal-400 "
                style={{ borderRadius: "5px", border: "solid" }}
                onClick={handleCorreo}
              >
                Correo
              </button>
              {correo === true && (
                <p
                  className="border-1 border-black"
                  style={{ backgroundColor: "white", textAlign: "center" }}
                >
                  Cleaning_service@gmail.org.sv
                </p>
              )}
            </div>
            <div>
              <div>
                <button
                  className=" py-2 px-5 text-white w-40 bg-teal-600 hover:bg-teal-400 "
                  style={{ borderRadius: "5px", border: "solid" }}
                  onClick={handleTel}
                >
                  Teléfono
                </button>
                {tel === true && (
                  <p
                    className="border-1 border-black"
                    style={{ backgroundColor: "white", textAlign: "center" }}
                  >
                    +503 7858-6597<br></br>
                    +503 7859-1597<br></br>
                    +503 2445-6957<br></br>
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="lg:space-y-20 space-y-10  ">
            <div>
              <button
                className=" py-2 px-5 text-white  bg-teal-600 w-40 hover:bg-teal-400 "
                style={{ borderRadius: "5px", border: "solid" }}
                onClick={handleFace}
              >
                Facebook
              </button>
              {face === true && (
                <p
                  className="border-1 border-black"
                  style={{ backgroundColor: "white", textAlign: "center" }}
                >
                  Cleaning Service SV
                </p>
              )}
            </div>
            <div>
              <div>
                <button
                  className="py-2 px-5 text-white bg-teal-600 w-40 hover:bg-teal-400 "
                  style={{ borderRadius: "5px", border: "solid" }}
                  onClick={handleInsta}
                >
                  Instagram
                </button>
                {insta === true && (
                  <p
                    className="border-1 border-black"
                    style={{ backgroundColor: "white", textAlign: "center" }}
                  >
                    Cleaning_srv.SV
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
