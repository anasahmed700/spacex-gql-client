import React, {useState, useCallback} from 'react';
import './App.css';
import Launch from './components/launch';
import LaunchDetails from './components/launchDetails';

function App() {
  const [id, setId] = useState(42);
  const handleIdChange = useCallback( (newId) => {
      setId(newId)
    }, []);

  return (
    <div className="App">
      <Launch handleIdChange={handleIdChange}/>
      <LaunchDetails id={id}/>
    </div>
  );
}

export default App;
