import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <main className="container">
      <h1>Click Counter App</h1>
      <p className="count">Count: {count}</p>
      
      {count >= 10 && <p className="limit-msg">🎉 You've reached the limit!</p>}
      
      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </main>
  );
}

export default App;
