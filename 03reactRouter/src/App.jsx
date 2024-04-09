import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-3xl text-center bg-green-600 p-4 text-white'>
        React router
      </h1>
    </>
  );
}

export default App;
