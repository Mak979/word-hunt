import { useState } from 'react';
import './App.css';
import DropDown from './component/DropDown';
import InputBox from './component/InputBox';
import MeaningBox from './component/MeaningBox';

function App() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="w-full h-screen bg-indigo-900 font-sans text-gray-300">
      <div className="container mx-auto p-5">
        <div className="text-5xl md:text-8xl text-center text-gray-300 tracking-wider">
          <h1 className="">{inputValue?inputValue:"WORD"}</h1>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <div className="mt-10 text-xl md:text-3xl font-bold text-white w-full md:w-3/5">
            <InputBox placeholder="Search any Word" className="border-b-2 border-white bg-transparent tracking-widest p-5 outline-none w-full" />
          </div>
          <div className="mt-4 md:mt-14 text-xl md:text-3xl font-bold text-gray-300 w-full md:w-2/5 md:pl-12">
            <DropDown name="languages" className="p-3 border-b-2 border-white outline-none bg-transparent w-full" />
          </div>
        </div>
        <MeaningBox />
        
      </div>
    </div>
  );
}

export default App;
