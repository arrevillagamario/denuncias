"use client";

import { useState } from "react";

const Login = () => {
  const [info, setInfo] = useState();
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user === "Mario Arrevillaga" && pass === "12345") {
      navigate("/user");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div
      style={{ backgroundImage: "url(/img/ImagenLogin.jpg)" }}
      className="bg-no-repeat bg-cover w-full h-screen"
    >
      <div className="w-full max-w-xs conatiner mx-auto py-20 rounded-xl">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h4 className="text-xl font-medium text-gray-900 text-center">
              Login
            </h4>

            {error && (
              <p className="text-center bg-red-700 text-white">
                Usuario incorrecto
              </p>
            )}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Usuario
              </label>
              <input
                type="text"
                name="carnet"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start"></div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-teal-600 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              //onClick={info ? () => navigate("/user") : setError(true)}
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
