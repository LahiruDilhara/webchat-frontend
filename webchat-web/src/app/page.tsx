"use client";

import { useEffect, useState } from "react";

export default function Home() {
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", "dark");
  },[])

  const [counter,setCounter] = useState(0);

  return (
    <>
    <div className="bg-card-bg m-10 p-4 bg-amber-950 rounded-lg flex flex-col items-center">
      <h1 className="text-4xl bg-background rounded-4xl font-bold p-5">Lahiru Dilhara</h1>
      <h1 className="text-8xl m-20 flex font-extrabold">{counter}</h1>
      <button className="px-5 py-2 bg-primary text-on-primary rounded-2xl" onClick={()=>setCounter(counter+5)}>Increment</button>
      <button className="px-5 py-2 bg-primary text-on-primary rounded-2xl" onClick={()=>document.documentElement.setAttribute("data-theme", "light")}>Light Mode</button>
      <button className="px-5 py-2 bg-primary text-on-primary rounded-2xl" onClick={()=>document.documentElement.setAttribute("data-theme", "dark")}>Dark Mode</button>
      <button className="px-5 py-2 bg-primary text-on-primary rounded-2xl" onClick={()=>document.documentElement.setAttribute("data-theme", "ldark")}>LDark mode</button>

      <div className="m-5 px-2 py-2  rounded-lg flex flex-col gap-2">
        <h2 className="text-1xl text-blue-200">Username *</h2>
        <input type="text" className="bg-blue-900 rounded-lg px-2 py-2 w-100" placeholder="username"/>
      </div>
    </div>
    </>
  );
}
