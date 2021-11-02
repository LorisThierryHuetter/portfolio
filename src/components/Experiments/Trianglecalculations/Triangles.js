import React, { useEffect, useState } from "react";
import "./component.css"
import bbw from "./bbw.svg";

function Dreieckidentifizierung() {

  const [result, setResult] = useState("None");
  const [results, setResults] = useState([]);

  let sides = 0
  let angles = 0

  let sideA = 0   // combi value: 1
  let sideB = 0   // combi value: 2
  let sideC = 0   // combi value: 4
  let angleA = 0  // combi value: 1
  let angleB = 0  // combi value: 2
  let angleC = 0  // combi value: 4

  function triangleCalc(){
    if(sideA!==0){
      sides+=1
    }
    if(sideB!==0){
      sides+=2
    }
    if(sideC!==0){
      sides+=4
    }
    if(angleA!==0){
      angles=1
    }
    if(angleB!==0){
      angles+=2
    }
    if(angleC!==0){
      angles+=4
    }

    if(sides===3 || sides===5 || sides===6){
      pythagoras()
    }
    console.log("Angles:", angles)
    if(angles===3 || angles===5 || angles===6){
      console.log("Poggie Woggies")
      angleCalc()
    }

    setResults([sideA, sideB, sideC, angleA, angleB, angleC])
    if(angleA===90 || angleB===90 || angleC===90){
          setResult("Rechtwinklig");
    } 
    else if(angleA+angleB+angleC>180){
      setResult("Error: Not correct angle input")
    } else{
      setResult("")
    }
  }

    


  function angleCalc(){ 
    if(angles===3){
      angleC = 180-(angleB + angleA)
    }
    else if(angles===5){
      angleB = 180-(angleA + angleC)
    }
    else if(angles===6){
      angleA = 180-(angleB + angleC)
    }
  }

  function pythagoras(){
    if(sides===3){
      sideC=Math.sqrt(sideA**2 + sideB**2)
    }
    else if(sides===5){
      sideB=Math.sqrt(sideC**2 - sideA**2)
    }
    else if(sides===6){
      sideA=Math.sqrt(sideC**2 - sideB**2)
    }
  }



  return (
    <div id="full">
      <h2 id="title">Triangles</h2>
      <img src={bbw} />
      <div id="input">
        <p id="#sideA">Side A<input type="number" onChange={ (e) => { sideA = parseFloat(e.target.value) } } /></p>
        <p id="#sideB">Side B<input type="number" onChange={ (e) => { sideB = parseFloat(e.target.value) } } /></p>
        <p id="#sideC">Side C<input type="number" onChange={ (e) => { sideC = parseFloat(e.target.value) } } /></p>
        <p id="#angleA">Angle A<input type="number" onChange={ (e) => { angleA = parseFloat(e.target.value) } } /></p>
        <p id="#angleB">Angle B<input type="number" onChange={ (e) => { angleB = parseFloat(e.target.value) } } /></p>
        <p id="#angleC">Angle C<input type="number" onChange={ (e) => { angleC = parseFloat(e.target.value) } } /></p>
      </div>
      <button id="calculate" onClick={ triangleCalc}>Calculate</button>
      <div>
        <h3>Results:</h3>
        <div>
          <p>Side A = {results[0]}</p>
          <p>Side B = {results[1]}</p>
          <p>Side C = {results[2]}</p>
          <p>Angle A = {results[3]}</p>
          <p>Angle B = {results[4]}</p>
          <p>Angle C = {results[5]}</p>
        </div>
        <p>Identification: {result}</p>
      </div>
    </div>
  );
}

export default Dreieckidentifizierung;