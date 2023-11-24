import React from "react";
import FormDenuncia from "@/components/FormDenuncia";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Denuncias = async () => {
  const usuario = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-center uppercase text-4xl  lg:text-6xl font-bold mt-20">
        Formulario de denuncias
      </h1>
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-between mb-5 mt-20 ">
        <img src={"/img/fotoDenuncias.avif"} alt="" className="lg:w-1/2 w-96" />
        <FormDenuncia usuario={usuario} />
      </div>
    </div>
  );
};

export default Denuncias;
