import React from "react";
import NttData from "../assets/NttData.png";
import Everis from "../assets/Everis.png";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const experiencia = [
    {
      id: 1,
      src: NttData,
      title: "Product Owner",
      fecha: "ago. 2021 - nov. 2022",
      lugar: "Córdoba, Argentina",
      style: "shadow-white",
    },
    {
      id: 2,
      src: Everis,
      title: "Solutions Analyst",
      fecha: "mar. 2020 - sept. 2021",
      lugar: "Lisboa, Portugal",
      style: "shadow-green-500",
    },
    {
      id: 3,
      src: Everis,
      title: "Solutions Analyst",
      fecha: "oct. 2019 - sept. 2021",
      lugar: "Córdoba, Argentina",
      style: "shadow-green-500",
    },
    {
      id: 4,
      src: Everis,
      title: "Solutions Analyst",
      fecha: "ene. 2020 - abr. 2020",
      lugar: "Lima, Perú",
      style: "shadow-green-500",
    },
]

const experiencia_modal = [
  {
    id: 1,
    title: "Product Owner",
    texto: "ago. 2021 - nov. 2022",
  },
]
  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-auto">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline position:relative;">
          Experience
          </p>
          {/*<p className="py-6">These are the technologies I've worked with</p>*/}
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiencia.map(({ id, src, title,fecha,lugar,style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <p className="mt-1">{fecha}</p>
              <p className="mt-1">{lugar}</p>
              <button
                    className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Open
                </button>
            </div>
            ))}
        </div>
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" justify-between bg-gradient-to-b from-gray-800 to-black">
                  <h3 className="text-3xl font-semibold">
                    PRODUCT OWNER
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  - Generar una solución sobre ERP y CRM a la necesidad de armar un circuito para la implementación del Área de Compras y Contrataciones, Ministerio de Salud de la provincia de Córdoba.
                  <br />
                  -Turnero provincial. Armado de querys con SQL para generar la disponibilidad de turnos sobre la aplicación.
                  <br />
                  -Fusion de pacientes. Generar una solución para fusionar más de 60.000 clientes que cuentan con mas de una historia clínica.
                  <br />
                  -Migración de mas de 30.000 pacientes entre aplicaciones con SQL.
                  <br />
                  -Análisis de datos de diferentes aplicaciones con python y SQL para corregir datos cruzados, mas de 60.000 clientes.
                  <br />
                  -Eliminación de datos del sistema central para su depurado con SQL, mas de 60.000 clientes.
                  <br />
                  - Definición de la estrategia Go-live junto con el cliente y equipo de Proyecto.
                  <br />
                  - Transferencia de conocimientos internas y capacitación a usuarios finales.
                  <br />
                  - Tester de nuevas versiones de la aplicación.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
        </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    </div>
    </div>
  );
}