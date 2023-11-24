"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
const Register = () => {
  const router = useRouter();
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
    <div
      style={{ backgroundImage: "url(/img/index.png)" }}
      className="bg-no-repeat bg-cover w-full "
    >
      <div className="w-full max-w-xs conatiner mx-auto py-20 rounded-xl">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <form className="space-y-6" onSubmit={submit}>
            <h5 className="text-xl font-medium text-gray-900 text-center">
              SignUp
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                {...register("nombre", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              {errors.nombre && (
                <span className="text-red-700">{errors.nombre.message}</span>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                {...register("apellido", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              {errors.apellido && (
                <span className="text-red-700">{errors.apellido.message}</span>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Correo
              </label>
              <input
                type="text"
                name="correo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                {...register("email", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Número de Dui
              </label>
              <input
                type="text"
                name="dui"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                {...register("dui", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              {errors.dui && (
                <span className="text-red-700">{errors.dui.message}</span>
              )}
              <label className="block mb-2 text-sm font-medium text-gray-900  text-center">
                Ingresar sin guión
              </label>
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
                {...register("password", {
                  required: {
                    value: true,
                    message: "Este campo es requerido",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-700">{errors.password.message}</span>
              )}
            </div>
            <div className="flex items-start">
              <div className="flex items-start"></div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-teal-600 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
Register;
