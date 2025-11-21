// A heart ❤️ icon

// Clicking it toggles between

// ❤️ Liked

// 🤍 Not liked

// Goal: UI changes based on state.
// import { useState } from "react";

// export const Toggle = () => {
// const[liked,setLiked]=useState(false)
//   return (
//     <div>
//      <p>{liked?"❤️":"🤍"}</p>
//    <button onClick={()=>{setLiked(!liked)}}>{liked?"liked":"not liked"}</button>
//     </div>
//   );
// };

// 9️⃣ Dark/Light Mode

// Button → “Dark / Light mode”

// Entire page changes background + text color

// Goal: Conditional styling with state.

import React, { useEffect, useState } from "react";

export const Toggle = () => {
  const [background, setBackround] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = background ? "black" : "white";
    document.body.style.color = background ? "white" : "black";
  }, [background]);
  return (
    <div>
      <h1>{background ? "this is dark mode":"light mode"}</h1>
      <button onClick={() => setBackround(!background)}>
        {background ? "light mode"  : "dark mode"}
      </button>
    </div>
  );
};
