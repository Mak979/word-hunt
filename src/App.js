import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import './App.css';
import DropDown from './component/DropDown';
import Header from './component/Header';
import InputBox from './component/InputBox';
import MeaningBox from './component/MeaningBox';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [lang, setLang] = useState('en')
  const [result, setResult] = useState([])

  const handleChange = (event) => {
    
    setInputValue(event.target.value)
    const { value } = event.target
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${value}`).then(res => setResult(res.data))
      .catch (error => console.log(error))

    if(inputValue === '') {
      setResult([])
    }
  }

  const debounce = (fn) => {
    let timer
    return function () {
      let context = this
      let args = arguments
      clearTimeout(timer)
      timer = setTimeout(() => fn.apply(context, args), 500)
    }
  }
  
  const getData = debounce(handleChange)
  console.log('Search Text - ', inputValue)
  console.log('result', result)

  return (
    <div className="w-full min-h-screen h-auto bg-indigo-900 font-sans text-gray-300">
      <div className="fixed w-full top-0 bg-indigo-900">
          <div className="container mx-auto p-5 shadow-xl md:shadow-none">
            <div>
              <Header 
                word={ inputValue === '' ? 'word hunt' : inputValue } 
                phonetic={ inputValue === '' ? '' : result[0]?.phonetic } 
                src={result[0]?.phonetics[0].audio} 
              />
            </div>
            <div className="flex flex-wrap justify-between w-full mb-2">
              <div className="mt-10 text-xl md:text-3xl font-bold text-white w-full md:w-3/5">
                <InputBox placeholder="Search any Word" className="border-b-2 border-white bg-transparent tracking-widest p-5 outline-none w-full" onChange={getData} />
              </div>
              <div className="mt-4 md:mt-14 text-xl md:text-3xl font-bold text-gray-300 w-full md:w-2/5 md:pl-12">
                <DropDown name="languages" className="p-3 border-b-2 border-white outline-none bg-transparent w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-5 mt-64">
          <MeaningBox result={ inputValue === '' ? [] :result } />
        </div>
    </div>
  );
}

export default App;
