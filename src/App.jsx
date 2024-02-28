import { useState } from 'react';
import Principal from './Principal';
import ListaTareas from './ListaTareas';

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Principal setTareas={setTareas} tareas={tareas} />
      <ListaTareas setTareas={setTareas} tareas={tareas} />
    </div>
  );
}

export default App;
