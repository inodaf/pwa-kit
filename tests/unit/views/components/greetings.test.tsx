import React from "react";
import { render } from "@testing-library/react";

import { Greetings } from "@/views/components/greetings";

test("renders the correct text", () => {
  const { getByText } = render(<Greetings />);
  const element = getByText(/Howdy! 🌃/i);
  expect(element).toBeInTheDocument();
});
