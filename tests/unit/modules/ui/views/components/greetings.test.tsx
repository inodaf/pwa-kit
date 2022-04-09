import React from "react";
import { render } from "@testing-library/react";

import { Greetings } from "@/modules/ui/views/components/greetings";

test("renders the correct text", () => {
  const { getByText } = render(<Greetings />);
  expect(getByText(/Howdy! 🌃/i)).toBeInTheDocument();
});
