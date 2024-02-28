import Tarea from './components/Tarea';
import PropTypes from 'prop-types';

function ListaTareas({ tareas, setTareas }) {
  return (
    <div className="w-full lg:h-full flex flex-col justify-center items-center">
      <h1 className="text-5xl shrink-0 font-bold text-amber-400 text-center mb-8 lg:text-6xl drop-shadow-sm">
        Tareas
      </h1>
      <div className="flex shrink-0 flex-col gap-3 items-center w-full max-w-screen-md lg:h-96 overflow-y-scroll pb-8">
        {tareas.length === 0 && (
          <p className="text-2xl tracking-wide opacity-60">
            No hay tareas pendientes
          </p>
        )}
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            setTareas={setTareas}
            tareas={tareas}
          />
        ))}
      </div>
    </div>
  );
}

ListaTareas.propTypes = {
  setTareas: PropTypes.func.isRequired,
  tareas: PropTypes.array.isRequired
};

export default ListaTareas;
