import React from "react";
import NttData from "../assets/NttData.png";
import Everis from "../assets/Everis.png";


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
];

export default function Modal() {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);

  const handleOpenModal = (id) => {
    switch (id) {
    case 1:
    setShowModal1(true);
    break;
    case 2:
    setShowModal2(true);
    break;
    case 3:
    setShowModal3(true);
    break;
    case 4:
    setShowModal4(true);
    break;
    default:
    break;
    }
    }
    
  return (
    <div name="Experience" className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
      <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline position:relative">
          Experience
          </p>
          </div>

{/*DIV para el cuadro donde se muestran las imagenes */}
        <div className="w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiencia.map(({ id, src, title,fecha,lugar,style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <p className="mt-1">{fecha}</p>
              <p className="mt-1">{lugar}</p>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="button" onClick={() => handleOpenModal(id)}>
              Open
              </button>
            </div>
            ))}
        </div>
{/*TERMINA DIV para el cuadro donde se muestran las imagenes */}

{/* Inicio Modal 1 */}
<>
  {showModal1 ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-center">
            {/*header*/}
            <div className=" justify-between bg-gradient-to-b from-gray-800 to-black">
              <h3 className="text-3xl font-semibold">
              Product Owner
              </h3>
            </div>
            {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed text-left">
                  <ul>
                    <li>
                  - Generar una solución sobre ERP y CRM a la necesidad de armar un circuito para la implementación del Área de Compras y Contrataciones, Ministerio de Salud de la provincia de Córdoba.
                  </li>
                  <li>
                  -Turnero provincial. Armado de querys con SQL para generar la disponibilidad de turnos sobre la aplicación.
                  </li>
                  <li>
                  -Fusion de pacientes. Generar una solución para fusionar más de 60.000 clientes que cuentan con mas de una historia clínica.
                  </li>
                  <li>
                  -Migración de mas de 30.000 pacientes entre aplicaciones con SQL.
                  </li>
                  <li>
                  -Análisis de datos de diferentes aplicaciones con python y SQL para corregir datos cruzados, mas de 60.000 clientes.
                  </li>
                  <li>
                  -Eliminación de datos del sistema central para su depurado con SQL, mas de 60.000 clientes.
                  </li>
                  <li>
                  - Definición de la estrategia Go-live junto con el cliente y equipo de Proyecto.
                  </li>
                  <li>
                  - Transferencia de conocimientos internas y capacitación a usuarios finales.
                  </li>
                  <li>
                  - Tester de nuevas versiones de la aplicación.
                  </li>
                    </ul>
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="button" onClick={() => setShowModal1(false)}>
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

      {/*Fin Modal 1*/}

      {/* Inicio Modal 2 */}
<>
  {showModal2 ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-center">
            {/*header*/}
            <div className=" justify-between bg-gradient-to-b from-gray-800 to-black">
              <h3 className="text-3xl font-semibold">
              Solutions Analyst
              </h3>
            </div>
            {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed text-left">
                - Colabore para el equipo de Portugal desde el comienzo del proyecto con las siguientes tareas:
                <br />
                -As is and To be
                <br />
                - Levantamiento y documentación de mas de 300 requerimientos funcionales. 
                <br />
                - Análisis de procesos de negocio.
                <br />
                - Transferencia interna de conocimiento a diferentes equipos como farmacia, facturación, Enfermería, Hospitalización, Urgencias, Admisión de pacientes, entre otros.
                <br />
                - Formación de usuarios finales sobre los diferentes módulos de la aplicación.
                <br />
                - Tester de nuevas versiones de aplicaciones.
                <br />
                - Desarrollo de consultas sobre PostgreSQL.
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="button" onClick={() => setShowModal2(false)}>
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

      {/*Fin modal 2*/}

    {/* Inicio Modal 3 */}
<>
  {showModal3 ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-left">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-center">
            {/*header*/}
            <div className=" justify-between bg-gradient-to-b from-gray-800 to-black">
              <h3 className="text-3xl font-semibold">
              Solutions Analyst
              </h3>
            </div>
            {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed text-left">
                -En la diaria se trabajo con el equipo de producto perteneciente a España para el relevamiento de nuevos requerimientos funcionales, documentación de errores y casos de prueba.
                <br />
                - Responsable de implementar módulos de farmacia y facturación.
                <br />
                - Más de 20 farmacias y puntos de ventas implementados.
                <br />
                - Módulos de facturación para las diferentes aseguradoras, coordinación de stock inicial, configuración de permisos de usuarios, mas de 100 usuarios capacitados sobre dispensación ambulatoria e internación, uso del modulo de facturación.
                <br />
                - Consultas SQL en base de datos Oracle para la obtención de información de los diferentes módulos de la aplicación. Hospitalización, Urgencias, Turnos, Profesionales medicos, etc.
                <br />
                - Documentación de análisis funcionales.
                <br />
                - Análisis de procesos de negocio e identificación de puntos débiles.
                <br />
                - Definición de la estrategia Go-live junto con el cliente y equipo de Proyecto.
                <br />
                - Tester de nuevas versiones de la aplicación.
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="button" onClick={() => setShowModal3(false)}>
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

      {/*Fin Modal 3*/}

      {/* Inicio Modal 4 */}
<>
  {showModal4 ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none text-center">
            {/*header*/}
            <div className=" justify-between bg-gradient-to-b from-gray-800 to-black">
              <h3 className="text-3xl font-semibold">
              Solutions Analyst
              </h3>
            </div>
            {/*body*/}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-slate-500 text-lg leading-relaxed text-left">
                - Responsable de implantación en el Instituto Regional de Enfermedades Neoplásicas (IREN) 
                <br />
                -Para este proyecto viaje a Peru donde de manera presencial se llevo a cabo la implementación.
                <br />
                  Módulos de la aplicación implementados: 
                  admisión de pacientes: Urgencias, Hospitalización, Consulta externa.
                  Clínicos: quirófano, hospitalización, urgencias, consulta externa
                  Facturación.
                  Farmacia.
                  <br />
                - Definición de la estrategia Go-live junto con el cliente y equipo de Proyecto.
                <br />
                - Transferencia de conocimientos interno para personal de sistemas de la clínica.
                <br />
                - capacitación a usuarios finales. Profesionales de la salud , doctores, enfermeros y administrativos más de 200 personas.
                <br />
                - Configuración CPOE a través de SQL Base de datos Postgres y front de aplicación. Más de 5000 elementos entre prestaciones, insumos, practicas.
                <br />
                - Reportes realizados con JasperReport.
                </p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="button" onClick={() => setShowModal4(false)}>
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

      {/*Fin modal 4*/}
 



      </div>
    </div>
  );
}