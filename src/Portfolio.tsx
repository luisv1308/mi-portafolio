import { useState } from "react";
import SobreMi from "./SobreMi";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import Contacto from "./Contacto";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("sobreMi");
    
    return (
        <div className=" inset-0">

            <div className="bg-gray-900 text-white min-h-screen p-5">
                <header className="text-center p-5 bg-gray-800 rounded-lg">
                    <h1 className="text-4xl font-bold">Luis Velasquez - Desarrollador Web</h1>
                    <p className="text-lg">Apasionado por el código y los videojuegos</p>
                </header>
                
                <nav className="flex justify-center space-x-4 my-5">
                    {[
                        { id: "sobreMi", label: "Sobre Mí" },
                        { id: "proyectos", label: "Proyectos" },
                        { id: "habilidades", label: "Habilidades" },
                        { id: "contacto", label: "Contacto" }
                    ].map(tab => (
                        <button 
                            key={tab.id} 
                            className={"px-4 py-2 rounded " + (activeTab === tab.id ? 'bg-green-500' : 'bg-gray-700')}

                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
                
                <main className="bg-gray-800 p-5 rounded-lg">
                    {activeTab === "sobreMi" && (
                        <SobreMi />
                    )}
                    {activeTab === "proyectos" && (
                        <Proyectos />
                    )}
                    {activeTab === "habilidades" && (
                        <Habilidades />
                    )}
                    {activeTab === "contacto" && (
                        <Contacto />
                    )}
                </main>
            </div>

        </div>
    );
};

export default Portfolio;