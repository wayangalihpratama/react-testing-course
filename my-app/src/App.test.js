import { fireEvent, render, screen } from "@testing-library/react";
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

test("button submit should have Login text", () => {
  render(<App />);
  const buttonEl = screen.getByTestId("submit-button");
  expect(buttonEl.textContent).toBe("Login");
});

test("button submit should be disabled if username/password is empty", () => {
  render(<App />);
  const buttonEl = screen.getByTestId("submit-button");
  expect(buttonEl).toBeDisabled();
});

test("username input value should change", () => {
  render(<App />);
  const usernameEl = screen.getByPlaceholderText(/username/i);
  const userValue = "john";
  fireEvent.change(usernameEl, { target: { value: userValue } });
  expect(usernameEl.value).toBe(userValue);
});

test("password input value should change", () => {
  render(<App />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  const passValue = "john123";
  fireEvent.change(passwordEl, { target: { value: passValue } });
  expect(passwordEl.value).toBe(passValue);
});

test("button submit should not be disabled", () => {
  render(<App />);
  const buttonEl = screen.getByTestId("submit-button");

  const usernameEl = screen.getByPlaceholderText(/username/i);
  const userValue = "john";
  fireEvent.change(usernameEl, { target: { value: userValue } });

  const passwordEl = screen.getByPlaceholderText(/password/i);
  const passValue = "john123";
  fireEvent.change(passwordEl, { target: { value: passValue } });

  expect(buttonEl).not.toBeDisabled();
});
