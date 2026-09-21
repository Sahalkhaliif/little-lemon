import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import BookingForm from "./BookingForm";

const availableTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

test("Renders the BookingForm date label", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={() => {}}
      />
    </MemoryRouter>
  );

  const labelElement = screen.getByText("Choose date:");
  expect(labelElement).toBeInTheDocument();
});

test("date input can be changed", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={() => {}}
      />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText("Choose date:");

  fireEvent.change(dateInput, {
    target: { value: "2026-09-21" },
  });

  expect(dateInput.value).toBe("2026-09-21");
});

test("date input is required", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={() => {}}
      />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText("Choose date:");

  expect(dateInput).toBeRequired();
});

test("guests input has min and max values", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={() => {}}
      />
    </MemoryRouter>
  );

  const guestsInput = screen.getByLabelText("Number of guests:");

  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
  expect(guestsInput).toBeRequired();
});

test("submit button is disabled when date is empty", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={() => {}}
      />
    </MemoryRouter>
  );

  const button = screen.getByRole("button", {
    name: "Reserve a table",
  });

  expect(button).toBeDisabled();
});

test("submit button is enabled when form is valid", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={() => {}}
      />
    </MemoryRouter>
  );

  const dateInput = screen.getByLabelText("Choose date:");

  fireEvent.change(dateInput, {
    target: { value: "2026-09-21" },
  });

  const button = screen.getByRole("button", {
    name: "Reserve a table",
  });

  expect(button).toBeEnabled();
});