import { useState } from "react";

const proyectos = [
  {
    nombre: "DiscipleLink.net",
    descripcion:
      "DiscipleLink es una aplicación diseño para facilitar el estudio de la Biblia en múltiples versiones, permitiendo a los usuarios organizarse en grupos dentro de sus comunidades eclesiásticas.",
    imagenes: [
      "/images/dis1.png",
      "/images/dis2.png",
      "/images/dis3.png",
      "/images/dis4.png",
      "/images/dis5.png",
      "/images/dis6.png",
      "/images/dis7.png",
      "/images/dis8.png",
      "/images/dis9.png",
      "/images/dis10.png",
      "/images/dis11.png",
    ],
    url: "https://app.disciplelink.net/",
    categorias: [".NET"],
  },
  {
    nombre: "Pyramids Pharmacy",
    descripcion:
      "Plataforma para la gestión de inventario de medicinas, prescripciones y usuarios. Incluye mensajería privada, chat en tiempo real y reportes.",
    imagenes: ["/images/pyr1.png", "/images/pyr2.png", "/images/pyr3.png", "/images/pyr4.png", "/images/pyr5.png"],
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
    nombre: "Metroidvania GODOT",
    descripcion:
      "Metroidvania es un juego de plataformas desarrollado en GODOT, inspirado en el juego original de Nintendo Metroid.",
    imagenes: ["/images/godotmetroidvania1.png", "/images/godotmetroidvania2.png"],
    categorias: ["GODOT", "Videogame"],
  },
  {
    nombre: "Space Shooter PICO8",
    descripcion:
      "Space Shooter es un juego de nave desarrollado en PICO8, similar a Space Invaders.",
    imagenes: ["/images/spacepico81.png"],
    url: "https://luisv1308.itch.io/my-space-game",
    categorias: ["Videogame", "PICO8"],
  },
  {
    nombre: "X-MEN UNIVERSE",
    descripcion:
      "X-Men Universe es una aplicación web interactiva que ofrece un catálogo detallado de personajes del universo X-Men, junto con un quiz para poner a prueba los conocimientos de los usuarios. Optimizado para móviles y escritorio usando Tailwind CSS.  Gestión de estado con Zustand: Manejo eficiente del estado global para una experiencia fluida. Rutas dinámicas con React Router",
    imagenes: ["/images/x-men1.png", "/images/x-men2.png"],
    categorias: ["React", "Javascript", "Tailwind CSS"],
    url: "https://x-men-universe.pages.dev"
  }
];

const categorias = [
  "PHP",
  ".NET",
  "Móvil",
  "Laravel",
  "Javascript",
  "Tailwind CSS",
  "Wordpress",
  "Videogame",
  "PICO8",
  "GODOT",
];

const Proyectos = () => {
  const [filtro, setFiltro] = useState<string[]>([]);
  const [galeria, setGaleria] = useState<{ imagenes: string[], index: number }>({ imagenes: [], index: 0 });


  const toggleFiltro = (categoria: string) => {
    setFiltro(
      (prev) =>
        prev.includes(categoria)
          ? prev.filter((cat) => cat !== categoria)
          : [...prev, categoria]
    );
  };

  const proyectosFiltrados =
    filtro.length === 0
      ? proyectos
      : proyectos.filter((proyecto) =>
          proyecto.categorias.some((cat) => filtro.includes(cat))
        );

  const abrirGaleria = (imagenes: string[], index: number) => {
    setGaleria({ imagenes, index });
  };

  const cambiarImagen = (dir: number) => {
    setGaleria((prev) => ({
      ...prev,
      index: (prev.index + dir + prev.imagenes.length) % prev.imagenes.length,
    }));
  };

  return (
    <section className="p-6 px-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosFiltrados.map((proyecto, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2 break-words">{proyecto.nombre}</h3>
            <div className="overflow-hidden rounded-lg cursor-pointer">
              <img
                src={proyecto.imagenes[0]}
                alt={proyecto.nombre}
                className="w-full h-auto max-h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
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
              className="max-w-full max-h-[70vh] rounded-lg shadow-lg"
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
