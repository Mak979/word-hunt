import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import InputBox from './component/InputBox';
import MeaningBox from './component/MeaningBox';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState([])
  const [isInvalid, setIsInvalid] = useState(false)

  const handleChange = (event) => {
    
    setInputValue(event.target.value)
    const { value } = event.target
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`).then(res => setResult(res.data))
    .catch(error => {
      console.log('Error: ', error);
      setIsInvalid(true)
      })
  }

  useEffect(() => {
    if(inputValue === '') {
      setResult([])
      setIsInvalid(false) 
    }
  }, [inputValue])

  

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

  return (
    <div className="w-full min-h-screen h-auto bg-indigo-900 font-sans text-gray-300">
      <div className="fixed w-full top-0 bg-indigo-900">
          <div className="container mx-auto p-5 shadow-xl md:shadow-none">
            <div>
              <Header 
                word={ inputValue === '' ? 'word quest' : inputValue } 
                phonetic={ inputValue === '' ? '' : result[0]?.phonetic } 
                src={result[0]?.phonetics[0].audio} 
              />
            </div>
            <div className="flex flex-wrap justify-between w-full mb-2 md:w-4/5 md:mx-auto">
              <div className="mt-2 md:mt-10 text-xl md:text-3xl font-bold text-white w-full">
                <InputBox 
                  placeholder="Search any Word" 
                  className="border-2 border-gray-200 bg-gray-200 text-indigo-700 rounded-lg tracking-widest p-2 md:p-5 pr-12 md:pr-16 outline-none w-full" 
                  onChange={getData}
                  onClick={() => setInputValue('')}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-5 mt-40 md:mt-72">
          { result.length ? <MeaningBox result={ inputValue === '' ? [] : result } /> 
          : <div className="mt-20 md:mt-28 w-full text-center text-3xl text-gray-500 md:text-5xl p-4"> 
             {isInvalid ? "Sorry pal, we couldn't find definitions for the word you were looking for." : 'Search the Word and see the magic happen!'} 
          </div>}
        </div>
    </div>
  );
}

export default App;
