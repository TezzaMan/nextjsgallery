"use client";

import { Button } from "react-bootstrap";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div>
      <h3>Error</h3>
      <p>Something went wrong</p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
