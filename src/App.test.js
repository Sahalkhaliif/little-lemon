import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import BookingForm from "./BookingForm";

test("renders booking form", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[
          "17:00",
          "18:00",
          "19:00",
          "20:00",
          "21:00",
          "22:00",
        ]}
        dispatch={() => {}}
      />
    </MemoryRouter>
  );

  const label = screen.getByText("Choose date:");
  expect(label).toBeInTheDocument();
});