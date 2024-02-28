import { useState } from 'react';

function Principal({ setTareas, tareas }) {
  const [titulo, setTitulo] = useState('');
  const manejarSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: tareas.length + 1,
      title: titulo
    };
    setTareas([...tareas, nuevaTarea]);
    setTitulo('');
  };
  return (
    <div className="w-full lg:w-1/2 lg:h-full h-1/2 shrink-0 flex flex-col justify-center items-center gap-8">
      <h1 className="text-5xl lg:text-7xl font-bold text-amber-400 drop-shadow-sm text-center">
        Organizate
        <br />
        Mejor
      </h1>
      <form className="flex gap-2 justify-center" onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Ingrese la tarea"
          className="border-2 bg-white/10 transition hover:scale-105 hover:shadow-xl hover:bg-gray-50 focus-visible:bg-gray-50 border-gray-400 rounded-lg p-2 w-70 shadow-lg text-gray-900 outline-amber-400 lg:text-xl"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <button className="border-2 bg-white/10 border-gray-400 rounded-lg p-2 shadow-lg font-semibold text-gray-600 hover:bg-gray-50 transition hover:scale-105 hover:shadow-xl lg:text-xl">
          Añadir
        </button>
      </form>
    </div>
  );
}

export default Principal;
