"use client";

import { useState } from "react";
import axios from "axios";
import { formatearFecha } from "@/utils/helpers";
import { set } from "react-hook-form";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
const FormTracking = () => {
  const conponentPDF = useRef();
  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "userdata",
    onafterprint: () => alert("Printed Successfully"),
  });
  const [numero, setNumero] = useState();
  const [res, setRes] = useState({});
  const [error, setError] = useState(false);
  function submit(e) {
    e.preventDefault();

    axios
      .get(`/api/denuncias/${numero}`)
      .then(function (response) {
        if (!response) {
          setRes();
          setError(true);
        } else {
          setRes(response);
        }
      })
      .catch(function (error) {
        console.log(error);
        console.log(error);
        setError(true);
      });
  }

  console.log(res.data);

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
            {/* <h3>No. Denuncia: {res.data?.id} </h3>
            <p>
              Denunciante: {res.data?.user.nombre} {res.data?.user.apellido}
            </p>
            <p>Municipio: {res.data?.municipio.nombre}</p>
            <p>Direccion: {res.data?.direccion}</p>
            <p>Descripción: {res.data?.descripcion}</p>
            <p>Fecha: {formatearFecha(res.data?.fecha)}</p>
            <p>Estado: {res.data?.estado}</p> */}
            <h2 className="text-3xl mb-5 font-bold text-center uppercase">
              Detalles de la denuncia
            </h2>
            <table ref={conponentPDF} className="border">
              <thead>
                <th className="bg-teal-600 py-3 px-7 text-white border">Id</th>
                <th className="bg-teal-600 py-3 px-7 text-white border">
                  Denunciante
                </th>
                <th className="bg-teal-600 py-3 px-7 text-white border">
                  Municipio
                </th>
                <th className="bg-teal-600 py-3 px-7 text-white border">
                  Dirección
                </th>
                <th className="bg-teal-600 py-3 px-7 text-white border">
                  Descripción
                </th>

                <th className="bg-teal-600 py-3 px-7 text-white border">
                  Fecha
                </th>
                <th className="bg-teal-600 py-3 px-7 text-white border">
                  Estado
                </th>
              </thead>

              <tbody>
                <tr className=" text-center">
                  <td className="border py-3 px-7">{res.data?.id}</td>
                  <td className="border py-3 px-7">
                    {res.data?.user.nombre} {res.data?.user.apellido}
                  </td>
                  <td className="border py-3 px-7">
                    {res.data?.municipio.nombre}
                  </td>
                  <td className="border py-3 px-7">{res.data?.direccion}</td>
                  <td className="border py-3 px-7"> {res.data?.descripcion}</td>
                  <td className="border py-3 px-7">
                    {formatearFecha(res.data?.fecha)}
                  </td>
                  <td className="border py-3 px-7">{res.data?.estado}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="bg-teal-600 rounded-lg py-2 px-7 mt-5 text-white "
              type="submit"
              onClick={generatePDF}
            >
              PDF
            </button>
          </article>
        )}
        {error && (
          <div className="text-red-700 underline">
            No se ha encontrado ninguna{" "}
          </div>
        )}
      </div>
    </form>
  );
};

export default FormTracking;
