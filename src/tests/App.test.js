import React from "react";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import App from "../App";

it("Doit afficher le début du compteur à 1w", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("counter")).toHaveTextContent("1");
});

it("Doit incrémenter le cpmteur de 1 si on clique sur Next", () => {
  const { getByTestId, getByText } = render(<App />);

  fireEvent.click(getByText("Next"));
  expect(getByTestId("counter")).toHaveTextContent("2");

  fireEvent.click(getByText("Next"));
  expect(getByTestId("counter")).toHaveTextContent("Fizz");
});
