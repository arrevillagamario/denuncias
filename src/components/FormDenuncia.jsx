"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const FormDenuncia = ({ usuario }) => {
  const [municipio, setMunicipio] = useState();
  const [direccion, setDireccion] = useState();
  const [descripcion, setDescripcion] = useState();
  const [telefono, setTelefono] = useState();
  const [error, setError] = useState(false);

  async function submit(e) {
    e.preventDefault();
    const oData = {
      municipio,
      direccion,
      descripcion,
      telefono,
    };
    console.log(oData);

    if (
      oData.municipio === undefined ||
      oData.direccion === undefined ||
      oData.telefono === undefined ||
      oData.descripcion === undefined
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    try {
      const data = {
        user: { dui: usuario.user.email },
        municipio: municipio,
        direccion: direccion,
        descripcion: descripcion,
        estado: "En revision",
      };
      axios
        .post("/api/denuncias", data)
        .then((respuesta) => {
          console.log("Respuesta del servidor:", respuesta.data);
          alert("Su numero de denuncia es: " + respuesta.data.denuncia.id);
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
        });
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  }

  return (
    <form
      className="mr-32 flex flex-col w-96  p-5 rounded-lg shadow-lg"
      onSubmit={submit}
    >
      {error && (
        <>
          <div className="bg-red-700 text-white font-bold px-15 py-5 rounded-md text-center">
            <p>Debe llenar todos los campos</p>
          </div>
        </>
      )}
      <label>Municipio de la denuncia</label>
      <select
        className="border border-black text-center"
        name=""
        id=""
        onChange={(e) => setMunicipio(Number(e.target.value))}
      >
        <option value="">--Selecciona el municipio--</option>
        <option value="1">Metapan</option>
        <option value="2">Santa Ana</option>
        <option value="3">El congo</option>
        <option value="4">Coatepeque</option>
        <option value="5">Texistepeque</option>
      </select>
      <label className="mt-4">Dirección exacta de la denuncia</label>
      <input
        type="text"
        className="border border-black  shadow-md"
        onChange={(e) => setDireccion(e.target.value)}
      />
      <label className="mt-4">Numéro de teléfono</label>
      <input
        type="text"
        className="border border-black  shadow-md"
        onClick={(e) => setTelefono(e.target.value)}
      />
      <label className="mt-4">Descripcion de la denuncia</label>
      <textarea
        type="text"
        rows="5"
        className="border border-black shadow-md"
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="submit"
        className="mt-4 bg-teal-600 text-white h-10 hover:bg-teal-400 transition"
      />
    </form>
  );
};

export default FormDenuncia;
