// src/__tests__/ProductCard.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ProductCard from "../components/ProductCard";

test("renders product card with name, price and add button", () => {
  const product = { id: "p1", name: "Sneaker", price: 59.99 };
  const onAdd = jest.fn();

  render(<ProductCard product={product} onAdd={onAdd} />);

  expect(screen.getByText(/sneaker/i)).toBeInTheDocument();
  expect(screen.getByText(/\$?59\.99/)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /add to cart/i })
  ).toBeInTheDocument();
});

test("calls onAdd when add button clicked", async () => {
  const product = { id: "p1", name: "Sneaker", price: 59.99 };
  const onAdd = jest.fn();
  render(<ProductCard product={product} onAdd={onAdd} />);

  await userEvent.click(screen.getByRole("button", { name: /add to cart/i }));
  expect(onAdd).toHaveBeenCalledTimes(1);
  expect(onAdd).toHaveBeenCalledWith(expect.objectContaining({ id: "p1" }));
});
