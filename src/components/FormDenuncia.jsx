"use client";
import { useForm } from "react-hook-form";

const FormDenuncia = ({ usuario }) => {
  console.log(usuario);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const resJSON = await res.json();
    /* console.log(resJSON); */
    if (res.ok) {
      router.push("/auth/login");
    }
  });

  return (
    <form className="mr-32 flex flex-col w-96  p-5 rounded-lg shadow-lg">
      <label>Municipio de la denuncia</label>
      <select className="border border-black text-center" name="" id="">
        <option value="">--Selecciona el municipio--</option>
        <option value="1">Metapan</option>
        <option value="2">Santa Ana</option>
        <option value="3">El congo</option>
        <option value="4">Coatepeque</option>
        <option value="5">Texistepeque</option>
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
  );
};

export default FormDenuncia;
