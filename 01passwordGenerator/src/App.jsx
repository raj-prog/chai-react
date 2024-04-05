import { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {}, [
    length,
    numAllowed,
    charAllowed,
    setPassword,
  ]);

  return (
    <>
      <h1 className='text-3xl text-center font-semibold uppercase'>
        Password Generator
      </h1>
    </>
  );
}

export default App;
