import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import ProductCard from "../components/ProductCard";

// 1️⃣ MOCK REACT ROUTER LINK — fixes the useRef(null) crash
jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <div data-testid="mock-link">{children}</div>,
}));

const renderWithProviders = (ui) =>
  render(<Provider store={store}>{ui}</Provider>);

describe("ProductCard Component", () => {
  const sampleProduct = {
    id: "1",
    title: "Test Product",
    description: "Nice item",
    price: 10,
    category: "Test Category",
    rating: { rate: 4.5, count: 100 },
    image: "test.jpg",
  };

  test("renders product name and price", () => {
    renderWithProviders(<ProductCard product={sampleProduct} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
  });

  test("renders product image", () => {
    renderWithProviders(<ProductCard product={sampleProduct} />);
    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", "test.jpg");
    expect(img).toHaveAttribute("alt", "Test Product");
  });
});
