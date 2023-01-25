import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-4">
        Actualmente residiendo en Barcelona.<br />
        <br />
        Cuento con experiencia trabajando en empresas multinacionales con mas de 140.000 empleados.<br />
        Proyectos de gran envergadura, involucrando metodologías ágiles y desarrollados en distintas tecnologías, con equipos de Latinoamérica y Europa como España y Portugal.<br />
        Cumpliendo diferentes roles:
        <ul>
          <li>Implementador + 5 años</li>
          <li>Analista funcional + 4 años</li>
          <li>Product Owner + 2 años</li>
        </ul>
        Enfocado en el área de datos.<br /><br />

        Amplio conocimiento en Healthcare .<br />
        Participe en el desarrollo de diferentes módulos como su implementación algunos de ellos son:<br />
        Hospitalización, Urgencias, Consulta externa, admisión de pacientes, farmacia, cirugías, facturación, compras, pago a proveedores.
        </p>

        <br />

        <p className="text-xl">
        
        </p>


      </div>
    </div>
  );
};

export default About;
