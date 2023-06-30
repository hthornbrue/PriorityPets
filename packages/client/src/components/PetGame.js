import React, { useState, useEffect } from "react";
import axios from "axios";
// import auth from "packages/client/src/hooks/useAuth.js";

const PetGame = () => {
//   const [health, setHealth] = useState(50);
//   const [points, setPoints] = useState(0);


    // console.log(auth);
}
//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(`/api/users/${Username}`);
//         setUser(response.data.user);
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     fetchUserData();
//   }, [Username]);

  
//   const feedPet = async () => {
//     if (points >= 10) {
//       setHealth(health + 10);
//       setPoints(points - 10);
  
//       try {
//         await axios.post(`/api/pets/${auth.pets.currentpet}`{
//           username: user.username,
//           xp: user.xp,
//           level: user.level,
//           points: user.points - 10,
//           pet: {
//             ...user.pet,
//             healthLevel: user.pet.healthLevel + 10,
//           },
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       alert("Not enough points to feed the pet!");
//     }
//   };
  
//   const waterPet = async () => {
//     if (points >= 5) {
//       setHealth(health + 5);
//       setPoints(points - 5);
  
//       // Update the user's data on the server
//       try {
//         await axios.post(`/api/users/${Username}`, {
//           username: user.username,
//           xp: user.xp,
//           level: user.level,
//           points: user.points - 5, // Deduct 5 points
//           pet: {
//             ...user.pet,
//             healthLevel: user.pet.healthLevel + 5, // Increase pet's health by 5
//           },
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       alert("Not enough points to water the pet!");
//     }
//   };
  
//   const playWithPet = async () => {
//     if (points >= 15) {
//       setHealth(health + 20);
//       setPoints(points - 15);
  
//       // Update the user's data on the server
//       try {
//         await axios.post(`/api/users/${Username}`, {
//           username: user.username,
//           xp: user.xp,
//           level: user.level,
//           points: user.points - 15, // Deduct 15 points
//           pet: {
//             ...user.pet,
//             healthLevel: user.pet.healthLevel + 20, // Increase pet's health by 20
//           },
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       alert("Not enough points to play with the pet!");
//     }
//   };


//   if (!user) {
//     return <div>Loading...</div>;
//   }
  
//   return (
//     <div>
//       <h1>Virtual Pet Game</h1>
//       <div>
//         {user.pet && <img src={user.pet.appearance} alt="Pet" />}
//       </div>
//       <div>
//         <h2>Health: {health}</h2>
//         <h2>Points: {points}</h2>
//       </div>
//       <div>
//         <button onClick={feedPet}>Feed</button>
//         <button onClick={waterPet}>Water</button>
//         <button onClick={playWithPet}>Play</button>
//       </div>
//     </div>
//   );
  
// }
export default PetGame;