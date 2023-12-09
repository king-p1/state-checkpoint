import { useEffect, useState } from "react";

function App() {
const [person,setPerson] = useState(false)
    const [time, setTime] = useState(new Date().getTime());

let fullName ='Damon Sylas'
let bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam aliquid ad esse modi aliquam totam quae obcaecati porro asperiores!'
let profession = 'Developer'
let image = 'https://tse3.mm.bing.net/th?id=OIP.LfUcKCHKBamgN20k7KQWeAHaHT&pid=Api&P=0&h=220'

useEffect(()=>{
    if (!person) return;

        setTime((prevTime) => (new Date().getTime()) - prevTime);
},[person])

  return (
    <>
    <div className="App">

<button onClick={()=> setPerson(!person)}>Show State</button>
<br/>
<br/>

{person && <div style={{margin:'0 auto', marginLeft:'20px'}}>
  <img src={image} alt="" style={{maxWidth:'100px', border:'2px solid darkcyan',padding:'10px',borderRadius:'8px'}} />
  <h1>Name: {fullName}</h1>
  <h3>Occupation: {profession}</h3>
  <p style={{width:'300px'}}>Bio: {bio}</p>
  </div>}
  time interval since last mount:
  <div style={{marginLeft:'2px'}}> 
   {time}
</div>
    </div>
    </>
  );
}

export default App;




















































// import React, { useState, useEffect } from 'react';

// const initialMaze = [
//  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
//  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
//  ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],
//  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
//  ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],
//  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
//  ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],
//  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
//  ['#', '.', '#', '#', '#', '#', '#', '#', '.', '#'],
//  ['#', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
//  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
// ];

// function MazeGame() {
//  const [maze, setMaze] = useState(initialMaze);
//  const [position, setPosition] = useState({ x: 1, y: 1 });
//  const [timeInterval, setTimeInterval] = useState('');

//  useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentInterval = new Date();
//       const timeDifference = currentInterval - startTime;
//       setTimeInterval(new Date(timeDifference).toISOString().substr(11, 8));
//     }, 1000);

//     return () => {
//       clearInterval(intervalId);
//     };
//  }, []);

//  const startTime = new Date();

//  const handleKeyDown = (e) => {
//     let newPosition = { ...position };

//     switch (e.key) {
//       case 'ArrowUp':
//         if (maze[newPosition.y - 1][newPosition.x] !== '#') {
//           newPosition.y--;
//         }
//         break;
//       case 'ArrowDown':
//         if (maze[newPosition.y + 1][newPosition.x] !== '#') {
//           newPosition.y++;
//         }
//         break;
//       case 'ArrowLeft':
//         if (maze[newPosition.y][newPosition.x - 1] !== '#') {
//           newPosition.x--;
//         }
//         break;
//       case 'ArrowRight':
//         if (maze[newPosition.y][newPosition.x + 1] !== '#') {
//           newPosition.x++;
//         }
//         break;
//       default:
//         break;
//     }

//     setPosition(newPosition);
//  };

//  return (
//     <div
//       onKeyDown={handleKeyDown}
//       tabIndex="0"
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(10, 25px)',
//         gridTemplateRows: 'repeat(10, 25px)',
//       }}
//     >
//       {maze.map((row, rowIndex) =>
//         row.map((cell, cellIndex) => (
//           <div
//             key={`${rowIndex}-${cellIndex}`}
//             style={{
//               width: 25,
//               height: 25,
//               backgroundColor: cell === '#' ? 'black' : 'white',
//               border: '1px solid black',
//             }}
//           >
//             {position.x === cellIndex && position.y === rowIndex ? (
//               <div
//                 style={{
//                  width: 25,
//                  height: 25,
//                  backgroundColor: 'blue',
//                 }}
//               />
//             ) : null}
//           </div>
//         ))
//       )}
//       <p>Time interval since game started: {timeInterval}</p>
//     </div>
//  );
// }

// export default MazeGame;