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
    <article className="bg-gray-100 w-[90%] sm:w-[80%] p-4 rounded-md shadow-md border shrink-0 border-gray-400 flex gap-2 lg:w-[500px] items-center">
      <input
        type="checkbox"
        className="size-12 accent-green-600 shrink-0"
        checked={completada}
        onClick={completarTarea}
      />
      <div className="flex flex-col w-[80%] sm:w-[88%] md:w-[88%]">
        <p
          className={`${
            completada ? 'line-through opacity-60' : ''
          } font-semibold text-gray-700 text-lg break-words `}
        >
          {tarea.title}
        </p>
        <button
          className="inline ml-auto text-red-600 underline underline-offset-2 font-semibold"
          onClick={eliminarTarea}
        >
          Eliminar
        </button>
      </div>
    </article>
  );
}

export default Tarea;
