// src/components/LikeCounter.tsx
import React, { useState } from "react"; // <- note the added import of useState

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  console.log("what are these?", numLikes, set_numLikes);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
    </div>
  );
}
