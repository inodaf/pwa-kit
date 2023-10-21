import type { GetServerSideProps } from "next";
import React from "react";

import { Greetings } from "@/modules/ui/views/components/greetings";

type Props = { message: string };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: { message: "Welcome to PWA Kit!" },
  };
};

export function HelloPage(props: Props) {
  return (
    <div className="flex items-center p-6">
      <Greetings message={props.message} />
    </div>
  );
}
