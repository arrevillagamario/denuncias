import React from "react";

const Denuncias = () => {
  return (
    <div>
      <h1 className="text-center uppercase text-4xl  lg:text-6xl font-bold mt-20">
        Formulario de denuncias
      </h1>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between mb-5 mt-20 ">
        <img src={"/img/fotoDenuncias.avif"} alt="" className="lg:w-1/2 w-96" />
        <form className="mr-32 flex flex-col w-96  p-5 rounded-lg shadow-lg">
          <label>Municipio de la denuncia</label>
          <select className="border border-black text-center" name="" id="">
            <option value="">--Selecciona el municipio--</option>
            <option value="metapan">Metapan</option>
            <option value="santana">Santa Ana</option>
            <option value="elcongo">El congo</option>
            <option value="coatepque">Coatepeque</option>
            <option value="texistepeque">Texistepeque</option>
          </select>
          <label className="mt-4">Dirección exacta de la denuncia</label>
          <input type="text" className="border border-black  shadow-md" />
          <label className="mt-4">Numéro de teléfono</label>
          <input type="text" className="border border-black  shadow-md" />
          <label className="mt-4">Descripcion de la denuncia</label>
          <textarea
            type="text"
            rows="5"
            className="border border-black shadow-md"
          />
          <input
            type="submit"
            className="mt-4 bg-teal-600 text-white h-10 hover:bg-teal-400 transition"
          />
        </form>
      </div>
    </div>
  );
};

export default Denuncias;
