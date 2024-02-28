import { useState } from "react";
import Principal from "./Principal";
import Tarea from "./components/Tarea";

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Principal setTareas={setTareas} tareas={tareas} />
      <div className="w-full lg:h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-amber-400 text-center mb-8 lg:text-7xl">
          Tareas
        </h1>
        <div className="flex justify-center flex-col gap-3 items-center ">
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
    </div>
  );
}

export default App;
