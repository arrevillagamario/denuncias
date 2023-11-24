"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const FormDenuncia = ({ usuario }) => {
  const [municipio, setMunicipio] = useState();
  const [direccion, setDireccion] = useState();
  const [descripcion, setDescripcion] = useState();

  async function submit(e) {
    e.preventDefault();

    try {
      const data = {
        user: { dui: usuario.user.email },
        municipio: municipio,
        direccion: direccion,
        descripcion: descripcion,
        estado: "En revision",
      };
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const res = await fetch("/api/denuncias", config);

      if (res.ok) {
        // La solicitud fue exitosa, puedes manejar la respuesta aquí si es necesario
        console.log("Solicitud exitosa");
        Swal.fire({
          title: "Denuncia enviada",

          icon: "success",
          color: "green",
        });
      } else {
        // La solicitud falló, maneja el error
        console.error("Error en la solicitud:", res.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  }

  return (
    <form
      className="mr-32 flex flex-col w-96  p-5 rounded-lg shadow-lg"
      onSubmit={submit}
    >
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
      <input type="text" className="border border-black  shadow-md" />
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
