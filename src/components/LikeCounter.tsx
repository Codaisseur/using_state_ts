// src/components/LikeCounter.tsx
import React, { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };

  // This console log will happen on every render of the
  //  component, which is very often. In fact, you never
  //  have 100% control over how often this will happen.
  // In our case, every state change actually triggers
  //  TWO re-renders, because the app is rendered in
  //  "strict mode", which forces you to debug your
  //  app better while developing it.
  console.log("A render!");

  // This console log will only happen once, when the
  //  component is "mounted" (= added to the screen).
  // The printed numLikes will be 0, because that's
  //  what it starts out as, initially.
  useEffect(() => {
    console.log("The useEffect action!", numLikes);
  }, []);

  // This console log will happen once, every time,
  //  that the numLikes state cell changes, regardless
  //  of how many times the component is re-rendered.
  // So, you will see exactly one log per increment.
  useEffect(() => {
    console.log("Current numLikes:", numLikes);
  }, [numLikes]);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <button onClick={increment}>Like</button>
      </p>
    </div>
  );
}
