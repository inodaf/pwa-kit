import type { GetServerSideProps } from "next";
import React from "react";

import { Greetings } from "@/modules/ui/views/components/greetings";

type Props = { message: string };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: { message: "Welcome to PWA Kit! 🌃" },
  };
};

export function HelloPage(props: Props) {
  return (
    <div className="h-screen p-6 dark:bg-zinc-800">
      <Greetings message={props.message} />
      <a
        className="dark:text-orange-500"
        href="/xpto"
        data-testid="link-trigger"
      >
        Click me
      </a>
    </div>
  );
}
