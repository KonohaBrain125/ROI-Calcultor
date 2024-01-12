import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Calc from './components/Calc';

function App() {
  return (
    <div className="bg-neutral-100 m-8 rounded-md">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <Input/>
        </div>
        <div className="basis-1/2">
          <Calc/>
        </div>  
      </div>
    </div>
  );
}

export default App;
