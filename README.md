# E-Commerce React Project with CI/CD and TDD

This project is a React-based e-commerce application designed with **Test-Driven Development (TDD)** principles and a **Continuous Integration/Continuous Deployment (CI/CD) pipeline** to ensure high reliability and seamless deployment.

---

## Features

- **Test-Driven Development (TDD):**  
  - Unit tests for individual components  
  - Integration tests to verify interactions (e.g., updating the cart)  
  - Focused, independent, and deterministic tests using **Jest** and **React Testing Library**

- **Continuous Integration (CI):**  
  - Automated builds and tests using **GitHub Actions**  
  - Ensures code quality and prevents deployment of failing code  
  - Workflow triggers on pushes to the `main` branch

- **Continuous Deployment (CD):**  
  - Automatic deployment to **Vercel** after successful CI  
  - Streamlined pipeline for rapid and reliable delivery  

---

## Test-Driven Development (TDD) Approach

### Unit Testing
- Each component has at least **two unit tests**  
- Tests cover:  
  - Component rendering  
  - State changes  
  - User interactions  
- Tests are designed to be **focused, independent, and deterministic**

### Integration Testing
- Validates interactions between components  
- Example: Adding a product to the cart updates the cart correctly  
- Uses **React Testing Library** to simulate user actions and assert results

---

## CI/CD Pipeline

### Continuous Integration (CI)
- Workflow defined in `.github/workflows/main.yml`  
- Steps include:  
  1. Trigger workflow on push to the `main` branch  
  2. Install dependencies  
  3. Build the application  
  4. Run all unit and integration tests using Jest  
- Workflow **fails if any tests fail**, preventing deployment

### Continuous Deployment (CD)
- Deployment stage integrated into the same GitHub Actions workflow  
- Deploys the application to **Vercel** only after CI passes successfully  
- Ensures reliable, tested code is always delivered to production

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Install dependencies:
   npm install
3. Run tests:
   npm test
4. Start the development server:
   npm start

### Technologies Used

React – Frontend framework

React Redux – State management

React Query – Data fetching and caching

Jest – Unit and integration testing

React Testing Library – Simulated user interactions

GitHub Actions – CI/CD automation

Vercel – Cloud deployment platform

### Vercel 
Link: implementing-ci-cd-pipeline-for-rea-six.vercel.app
