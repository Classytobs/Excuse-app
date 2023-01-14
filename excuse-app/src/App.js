import { useState } from "react";

function App() {
const [excuse, setExcuse] = useState('')

  return (
    <div className="flex flex-col items-center content-center justify-center">
      <div className="flex items-center content-center justify-center p-8 text-4xl font-serif text-md">
        <h1>GENERATE AN EXCUSE</h1>
      </div>
      <div className="flex flex-col">
        <button className="bg-slate-500 hover:bg-slate-600 
        px-3 py-2 rounded-md">Party</button>
        <button className="bg-slate-500 hover:bg-slate-600 
        px-3 py-2 rounded-md">Family</button>
        <button className="bg-slate-500 hover:bg-slate-600 
        px-3 py-2 rounded-md">Office</button>
      </div>
    </div>
  );
}

export default App;
