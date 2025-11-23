import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import ProductPage from "../components/ProductPage";
import { MemoryRouter } from "react-router";

// Correct mock path
jest.mock("../services/productService", () => ({
  getProductById: jest.fn(),
}));

import { getProductById } from "../services/productService";

// Mock router params
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "1" }),
}));

// Wrapper
function renderWithProviders(ui) {
  const queryClient = new QueryClient();
  const store = configureStore({
    reducer: { cart: cartReducer },
  });

  return render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>{ui}</MemoryRouter>
      </QueryClientProvider>
    </Provider>
  );
}

describe("ProductPage Component", () => {
  const mockProduct = {
    id: 1,
    title: "Test Product",
    price: 19.99,
    category: "Test Category",
    description: "A great item",
    image: "test.jpg",
  };

  beforeEach(() => {
    getProductById.mockResolvedValue(mockProduct);
  });

  test("renders product information", async () => {
    renderWithProviders(<ProductPage />);

    expect(await screen.findByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Price: $19.99")).toBeInTheDocument();
    expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
  });

  test("dispatches addToCart when button is clicked", async () => {
    const store = configureStore({
      reducer: { cart: cartReducer },
    });

    const queryClient = new QueryClient();

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <ProductPage product={mockProduct} />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    const button = await screen.findByRole("button", {
      name: /add to cart/i,
    });

    fireEvent.click(button);

    const state = store.getState().cart;
    expect(state.items.length).toBe(1);
    expect(state.items[0].id).toBe(1);
  });
});
