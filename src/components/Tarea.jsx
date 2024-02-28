import { useState } from 'react';

function Tarea({ tarea, setTareas, tareas }) {
  const [completada, setCompletada] = useState(false);
  const eliminarTarea = () => {
    const nuevasTareas = tareas.filter((t) => t.id != tarea.id);
    setTareas(nuevasTareas);
  };
  const completarTarea = () => {
    setCompletada(!completada);
  };
  return (
    <article className="bg-white/40 w-[90%] sm:w-[80%] p-4 rounded-md shadow-md border shrink-0 border-gray-400/50 flex gap-3 lg:w-[500px] items-center">
      <input
        type="checkbox"
        className="size-10 accent-green-600 shrink-0 border-none"
        checked={completada}
        onClick={completarTarea}
      />
      <div className="flex flex-col w-[80%] sm:w-[88%] md:w-[88%]">
        <p
          className={`${
            completada ? 'line-through opacity-60' : ''
          } font-medium text-gray-800 text-lg break-words `}
        >
          {tarea.title}
        </p>
        <button
          className="inline ml-auto text-slate-800/60 hover:text-red-600 hover:underline underline-offset-2 hover:font-semibold transition"
          onClick={eliminarTarea}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default Tarea;
