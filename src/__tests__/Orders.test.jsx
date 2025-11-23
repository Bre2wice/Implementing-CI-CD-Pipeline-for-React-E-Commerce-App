// src/__tests__/Orders.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Orders from "../components/Orders";
import { TestQueryWrapper } from "../utils-test/TestQueryWrapper";

describe("Orders Component", () => {
  // Mock Firestore timestamp
  const mockTimestamp = {
    toDate: () => new Date("2024-01-01T12:00:00Z"),
  };

  const mockOrders = [
    {
      id: 1,
      name: "Product A",
      price: 19.99,
      quantity: 2,
      createdAt: mockTimestamp,
      total: 39.98,
    },
    {
      id: 2,
      name: "Product B",
      price: 9.99,
      quantity: 1,
      createdAt: mockTimestamp,
      total: 9.99,
    },
  ];

  const customRender = (ui) =>
    render(<TestQueryWrapper>{ui}</TestQueryWrapper>);

  test("renders list of orders", () => {
    customRender(<Orders orders={mockOrders} />);

    // Check product names
    expect(screen.getByText(/Product A/i)).toBeInTheDocument();
    expect(screen.getByText(/Product B/i)).toBeInTheDocument();

    // Check quantities
    expect(screen.getByText(/Qty: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Qty: 1/i)).toBeInTheDocument();

    // Check total prices
    expect(screen.getByText(/\$39\.98/i)).toBeInTheDocument();
    expect(screen.getByText(/\$9\.99/i)).toBeInTheDocument();

    // Check date rendering
    expect(screen.getAllByText(/1\/1\/2024/i).length).toBe(2);
  });

  test("renders empty state when no orders", () => {
    customRender(<Orders orders={[]} />);
    expect(screen.getByText(/No orders found/i)).toBeInTheDocument();
  });
});
