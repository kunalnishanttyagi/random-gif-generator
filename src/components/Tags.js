import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Spinner from './Spinner';
import Spinner from './Spinner';
const Tags = () => {
  const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  const[gif,setgif]=useState('');
  const[loading,setloading]=useState(false)
  const[search,setsearch]=useState('angry');
  async function fetchdata(){
    setloading(true)
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${search}`;
    const {data} = await axios.get(url);
    console.log(data)
    // let output=data.data.images.downsized_still.url;
    // setgif(output)
    let output=((data.data.images.downsized_still.url));
    setgif(output)
    console.log(output)
    setloading(false)
    // setgif("https://media3.giphy.com/media/9RhuCss6npfKztSeSA/giphy_s.gif?cid=621c9567tkh82fvptr4yuec894brsh70a2wfek2qfu172wzp&ep=v1_gifs_random&rid=giphy_s.gif&ct=g")
  }
  useEffect(()=>{
    fetchdata();
  },[])
  function clickhandler(){
    // console.log(gif);
    fetchdata()
    // setgif({})
  }

  return (
    <div className=' bg-green-500 w-1/2 flex flex-col rounded-lg border border-[5px] border-blue-500 items-center'>
      <h1 className=' text-2xl font-bold'>Random Gif</h1>
      {
        loading?(<Spinner></Spinner>):(<img src={gif} alt='gif' />)
      }
      <input type='text' width={10/12} height={29} value={search} onChange={(event)=>setsearch(event.target.value)}></input>
      
      <button onClick={clickhandler} className=' w-9/12 text-2xl m-[10px] bg-white'>Generate</button>
    </div>
  )
}

export default Tags
