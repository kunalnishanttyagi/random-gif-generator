import Tags from "./components/Tags";
import Random from "./components/Random";
import { useEffect,useState } from "react";
export default function App() {
  return (
    <div className=" w-full h-screen items-center flex flex-col background">
      <h1 className="text-3xl text-center">Hello Laddu</h1>
      
      <Tags></Tags>
      <h2 className=" mt-[40px] text-black text-4xl font-bold rounded-md m-[40px] w-10/12 flex justify-center bg-white ">Random GIFS</h2>
      <Random></Random>
      
    </div>
  );
}
