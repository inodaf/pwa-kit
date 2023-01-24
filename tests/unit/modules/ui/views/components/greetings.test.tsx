import React from "react";
import { render } from "@testing-library/react";
import { Greetings } from "@/modules/ui/views/components/greetings";

test("renders the correct text", () => {
  const { getByText } = render(<Greetings message="Welcome to PWA Kit! 🌃" />);
  expect(getByText(/Welcome to PWA Kit! 🌃/i)).toBeInTheDocument();
});
