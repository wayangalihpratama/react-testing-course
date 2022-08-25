import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId("link-button");
  expect(linkElement).toBeInTheDocument();
});

test("url is correct", () => {
  render(<App />);
  const linkElement = screen.getByTestId("link-button");
  expect(linkElement.href).toContain("reactjs.org");
});

test("username input should be rendered", () => {
  render(<App />);
  const usernameEl = screen.getByPlaceholderText(/username/i);
  expect(usernameEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<App />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl).toBeInTheDocument();
});

test("button submit should be rendered", () => {
  render(<App />);
  const buttonEl = screen.getByTestId("submit-button");
  expect(buttonEl).toBeInTheDocument();
});

test("username value should be empty", () => {
  render(<App />);
  const usernameEl = screen.getByPlaceholderText(/username/i);
  expect(usernameEl.value).toBe("");
});

test("password value should be empty", () => {
  render(<App />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl.value).toBe("");
});

test("button have Login text", () => {
  render(<App />);
  const buttonEl = screen.getByTestId("submit-button");
  expect(buttonEl.textContent).toBe("Login");
});
