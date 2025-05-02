import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState<number>(0);
  return (
    <div className='text-center mt-40'>
      <h1 className='font-bold'>Ready Freddie</h1>
      <p>count：{count}</p>
      <button className='p-2 bg-blue-200' onClick={() => {setCount(prev => prev + 1)}}>+</button>
      <p>変更しました</p>
    </div>
  );
}

export default App;
