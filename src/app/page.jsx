import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Logout from "@/components/Logout";
import FormTracking from "@/components/FormTracking";

const Index = async () => {
  const usuario = await getServerSession(authOptions);
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          src="./img/index.png"
          alt="imagenInicio"
          className="w-full lg:h-96 h-32"
        />
        <div>
          <h1 className="text-xl font-medium text-gray-900  text-center pt-6 ">
            Ingrese su número de denuncia
          </h1>
        </div>
      </div>
      <div className="mt-4">
        <FormTracking />
      </div>
      <div className="ml-5 mb-5 ">{usuario && <Logout></Logout>}</div>
    </div>
  );
};

export default Index;
