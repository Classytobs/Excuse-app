import { useState } from "react";
import Axios from 'axios';

function App() {
const [excuse, setExcuse] = useState('')

const fetchExcuse = (excuse) => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
    setExcuse(res.data[0].excuse)
  })
}

  return (
    <div className="flex flex-col items-center content-center justify-center">
      <div className="flex items-center content-center justify-center p-8 text-4xl font-serif text-md">
        <h1>GENERATE AN EXCUSE</h1>
      </div>
      <div className="flex flex-col">
        <button className="bg-slate-500 hover:bg-slate-600 
        px-3 py-2 rounded-md"
        onClick={()=>fetchExcuse('party')}>Party</button>
        <button className="bg-slate-500 hover:bg-slate-600 
        px-3 py-2 rounded-md"
        onClick={()=>fetchExcuse('family')}>Family</button>
        <button className="bg-slate-500 hover:bg-slate-600 
        px-3 py-2 rounded-md"
        onClick={()=>fetchExcuse('office')}>Office</button>
      </div>

      <p className="px-8 mt-8">{excuse}</p>
    </div>
  );
}

export default App;
