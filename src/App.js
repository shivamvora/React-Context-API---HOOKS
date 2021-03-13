import React from 'react';
import './App.css';
import "bootswatch/dist/materia/bootstrap.min.css";
import Languages from './components/Languages';
import InputHook from './components/InputHook';
import Counter from './components/useEffect/Counter';
import Listen from './components/useEffect/Listen';
import Todo from './components/Todo/Todo';


function App() {
  return (
    <div className="container mt-5  ">
      <Todo/>
      {/* <Languages/>
      <Counter/>
      <Listen/> */}

    </div>
  );
}

export default App;
