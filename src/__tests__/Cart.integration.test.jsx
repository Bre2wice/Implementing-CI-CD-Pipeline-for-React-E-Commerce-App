// src/__tests__/Cart.integration.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import AppWithCart from "../AppWithCart"; // a minimal app entry that includes ProductCard(s) and Cart

test("adding a product increases cart count and shows item in cart", async () => {
  render(<AppWithCart />); // this should render product list + cart display

  // find a product's add button and click it
  const addButton = screen.getByRole("button", { name: /add to cart/i });
  await userEvent.click(addButton);

  // assert cart icon count updated (adapt selector to your app)
  expect(screen.getByText(/1/)).toBeInTheDocument();

  // assert an item appears in the Cart panel or modal
  expect(screen.getByText(/sneaker/i)).toBeInTheDocument();
});
