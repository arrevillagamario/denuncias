"use client";

import { useState } from "react";
import axios from "axios";
import { formatearFecha } from "@/utils/helpers";

const FormTracking = () => {
  const [numero, setNumero] = useState();
  const [res, setRes] = useState({});
  function submit(e) {
    e.preventDefault();

    axios
      .get(`/api/denuncias/${numero}`)
      .then(function (response) {
        if (!response) {
          setRes();
        } else {
          setRes(response);
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error);
      });
  }

  /*   console.log(res.data);
   */
  return (
    <form onSubmit={submit}>
      <div className="flex flex-col items-center justify-center mb-8">
        <input
          type="text"
          name="nombre"
          placeholder="Ejemplo: 243789"
          className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5"
          onChange={(e) => setNumero(e.target.value)}
        />

        <button
          type="submit"
          className="w-33 text-white bg-teal-600 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mt-2 text-sm px-5 py-2.5 text-center  flex justify-start"
        >
          Buscar
        </button>
        {res.data && (
          <article className="mt-10 bg-slate-100 rounded-md py-10 px-24 border shadow-lg">
            <h3>No. Denuncia: {res.data?.id} </h3>
            <p>
              Denunciante: {res.data?.user.nombre} {res.data?.user.apellido}
            </p>
            <p>Municipio: {res.data?.municipio.nombre}</p>
            <p>Direccion: {res.data?.direccion}</p>
            <p>Descripción: {res.data?.descripcion}</p>
            <p>Fecha: {formatearFecha(res.data?.fecha)}</p>
            <p>Estado: {res.data?.estado}</p>
          </article>
        )}
      </div>
    </form>
  );
};

export default FormTracking;
