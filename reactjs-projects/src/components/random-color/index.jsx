import React, { useEffect, useState } from 'react'

const RandomColor = () => {

    const [typeofColor,setTypeofColor] = useState("hex");
    const [color,setColor] = useState('#000000');

    function utilityColorGenerator(length){
      return Math.floor(Math.random()*length);
    }

    function handleHexColorGenerator(){
      let hex = [0,1,2,3,4,5,6,'a','b','c','d','e','f'];
      let hexColor = "#";

      for(let i=0 ;i<6 ; i++){
         hexColor += hex[utilityColorGenerator(hex.length)];
      }
      console.log(hexColor);

      setColor(hexColor);
      setTypeofColor('hex');
      
    }

    function handleRgbColorGenerator(){
      let r = utilityColorGenerator(256);
      let g = utilityColorGenerator(256);
      let b = utilityColorGenerator(256);

      let rgbColor = `rgb(${r},${g},${b})`;
      setColor(rgbColor);
      setTypeofColor('rgb');
      
    }

    useEffect(()=>{
      if(typeofColor === 'hex')handleHexColorGenerator
      else handleRgbColorGenerator;

    },[typeofColor])

  return (
    <div style={{
      height:'100vh',
      width : '100vw',
      color:'white',
      textAlign:'center',
      background :color
    }}>
        <button onClick={handleHexColorGenerator}>Create Hex color</button>
        <button onClick={handleRgbColorGenerator}>Create RGB color</button>
        <button onClick={typeofColor === 'hex' ? handleHexColorGenerator : handleRgbColorGenerator}>Generate Random Color</button>  

         <div>
          <h3>{typeofColor === 'hex' ? 'Hex Color' : 'RGB Color'}</h3>
          <h1>{color}</h1>
          
          </div>  
    </div>
  )
}

export default RandomColor;
