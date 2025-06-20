"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred.</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}
