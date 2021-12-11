import React from "react";

export const Greetings: React.FC = () => (
  <h1>Howdy! 🌃 {process.env.NEXT_PUBLIC_APP_ENV}</h1>
);
