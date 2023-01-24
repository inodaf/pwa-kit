import React from "react";

type Props = {
  message: string;
};

export function Greetings(props: Props) {
  return (
    <h1 className="text-2xl text-rose-400" data-testid="title">
      {props.message}
    </h1>
  );
}
