"use client";

import { useState } from "react";

export default function InteractivePage() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h1>Chapter 10: Client`s components</h1>
      <p>This is an independent page for show interactive.</p>
      <button onClick={() => setLikes(likes + 1)}>Likes: ({likes})</button>
    </div>
  );
}
