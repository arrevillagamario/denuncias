import React from "react";

const Footer = async () => {
  return (
    <div>
      {/* <div className="pt-6 container mb-3">
        <Link href={"/"} type="submit" className="w-33 underline text-teal-600">
          Log Out
        </Link>
      </div> */}

      <footer style={{ backgroundColor: "#9cc8be" }}>
        <div className="lg:flex lg:justify-center lg:space-x-10 lg:h-52 lg:items-center flex flex-col items-center text-center space-y-6 py-3 lg:text-left lg:space-y-0 lg:flex-row">
          <div>
            <p className="w-72 text-white">
              Dirección: Colonia Buenos Aires 3, Diagonal Centroamérica, Avenida
              Alvarado, contiguo al Ministerio de Hacienda
            </p>
          </div>
          <div className="flex space-x-4">
            <img
              src={"/img/facebook.png"}
              alt="Imagen de facebook"
              className="h-11"
            />
            <img src={"/img/instagram.png"} alt="" className="h-11" />
            <img src={"/img/twiter.png"} alt="" className="h-11" />
          </div>
          <div className="w-72 text-white ">
            <p>Liliana Aguilar</p>
            <p>Mario Arrevillaga</p>
            <p>Jairo Erazo</p>
            <p>Gabriel Rendón</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
