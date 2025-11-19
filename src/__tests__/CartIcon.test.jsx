// src/__tests__/CartIcon.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartIcon from "../components/CartIcon";

test("renders cart icon with count", () => {
  render(<CartIcon count={3} />);
  expect(screen.getByLabelText(/cart/i)).toBeInTheDocument();
  expect(screen.getByText("3")).toBeInTheDocument();
});
