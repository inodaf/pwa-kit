import React from "react";

type Props = {
  message: string;
};

export function Greetings(props: Props) {
  return (
    <>
      <img
        className="mr-4"
        src="/projecticon.svg"
        width="96"
        alt="an icon with tones of purple background and 4 lines representing a fast motion."
      />
      <div>
        <h1 className="text-2xl text-purple-700" data-testid="title">
          {props.message}
        </h1>
        <p>
          Try changing some code at{" "}
          <code className="text-gray-500 underline">
            src/modules/hello/views/pages/hello.tsx
          </code>
        </p>
      </div>
    </>
  );
}
