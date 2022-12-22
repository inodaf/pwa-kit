import React from "react";
import { render } from "@testing-library/react";
import { Greetings } from "@/modules/ui/views/components/greetings";

test("renders the correct text", () => {
  const { queryByText } = render(<Greetings />);

  expect(queryByText(/Welcome to PWA Kit! 🌃/i)).not.toBeInTheDocument();
});
