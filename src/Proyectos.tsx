import React, { useState } from "react";

const proyectos = [
  {
    nombre: "DiscipleLink.net",
    descripcion:
      "DiscipleLink es una aplicación diseñada para facilitar el estudio de la Biblia en múltiples versiones, permitiendo a los usuarios organizarse en grupos dentro de sus comunidades eclesiásticas.",
    imagenes: ["/images/dis1.png", "/images/dis2.png"],
    url: "https://app.disciplelink.net/",
    categorias: [".NET"],
  },
  {
    nombre: "Pyramids Pharmacy",
    descripcion:
      "Plataforma para la gestión de inventario de medicinas, prescripciones y usuarios. Incluye mensajería privada, chat en tiempo real y reportes.",
    imagenes: ["/images/pyr1.png"],
    categorias: ["PHP", "Laravel"],
  },
  {
    nombre: "Streetsmartinvestor.net",
    descripcion:
      "Dashboard para estudiantes de bienes raíces, gestionando leads, documentos y campañas de email masivo.",
    imagenes: ["/images/sm1.png"],
    categorias: ["PHP", "Wordpress"],
  },
  {
    nombre: "Ucontrol (ERP)",
    descripcion:
      "Ucontrol es un ERP diseño para ayudar a MIPES a gestionar sus operaciones de manera eficiente.",
    imagenes: ["/images/placeholder.jpg"],
    categorias: ["PHP", "Codeigniter"],
  },
  {
    nombre: "Space Shooter PICO8",
    descripcion:
      "Space Shooter es un juego de nave desarrollado en PICO8, similar a Space Invaders.",
    imagenes: ["/images/spacepico81.png"],
    url: "https://luisv1308.itch.io/my-space-game",
    categorias: ["Videogame", "PICO8"],
  },
];

const categorias = [
  "PHP",
  ".NET",
  "Móvil",
  "Laravel",
  "Codeigniter",
  "Wordpress",
  "Videogame",
  "PICO8",
];

const Proyectos = () => {
  const [filtro, setFiltro] = useState([]);
  const [galeria, setGaleria] = useState({ imagenes: [], index: 0 });

  const toggleFiltro = (categoria) => {
    setFiltro(
      (prev) =>
        prev.includes(categoria)
          ? prev.filter((cat) => cat !== categoria) // Quita la categoría si ya está seleccionada
          : [...prev, categoria] // Agrega la categoría si no está seleccionada
    );
  };

  const proyectosFiltrados =
    filtro.length === 0
      ? proyectos
      : proyectos.filter((proyecto) =>
          proyecto.categorias.some((cat) => filtro.includes(cat))
        );

  const abrirGaleria = (imagenes, index) => {
    setGaleria({ imagenes, index });
  };

  const cambiarImagen = (dir) => {
    setGaleria((prev) => ({
      ...prev,
      index: (prev.index + dir + prev.imagenes.length) % prev.imagenes.length,
    }));
  };

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Proyectos</h2>

      {/* Filtros */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleFiltro(cat)}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${
              filtro.includes(cat)
                ? "bg-blue-500 shadow-md scale-105"
                : "bg-gray-700 hover:bg-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Proyectos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosFiltrados.map((proyecto, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{proyecto.nombre}</h3>
            <div className="overflow-hidden rounded-lg cursor-pointer">
              <img
                src={
                  proyecto.imagenes.length > 0
                    ? proyecto.imagenes[0]
                    : defaultImg
                }
                alt={proyecto.nombre}
                className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                onClick={() => abrirGaleria(proyecto.imagenes, 0)}
              />
            </div>
            <p className="text-gray-300 mt-3">{proyecto.descripcion}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proyecto.categorias.map((cat) => (
                <span
                  key={cat}
                  className="bg-blue-700 px-2 py-1 text-sm text-white rounded-md"
                >
                  {cat}
                </span>
              ))}
            </div>
            {proyecto.url && (
              <a
                href={proyecto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 underline mt-3"
              >
                Ver Proyecto
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Galería Modal */}
      {galeria.imagenes.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setGaleria({ imagenes: [], index: 0 })}
        >
          <div className="relative flex items-center">
            {/* Flecha Izquierda */}
            <button
              className="absolute left-4 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(-1);
              }}
            >
              ⬅️
            </button>

            {/* Imagen */}
            <img
              src={galeria.imagenes[galeria.index]}
              alt="Proyecto"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />

            {/* Flecha Derecha */}
            <button
              className="absolute right-4 bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(1);
              }}
            >
              ➡️
            </button>

            {/* Botón de Cierre */}
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
              onClick={() => setGaleria({ imagenes: [], index: 0 })}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Proyectos;
