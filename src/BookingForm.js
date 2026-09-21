import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api";

function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState("1");
  const [occasion, setOccasion] = useState("Birthday");

  function handleDateChange(event) {
    const selectedDate = event.target.value;

    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const success = submitAPI({
      date,
      time,
      guests: Number(guests),
      occasion,
    });

    if (success) {
      navigate("/confirmed");
    }
  }

  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10 &&
    occasion !== "";

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date:</label>

      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="time">Choose time:</label>

      <select
        id="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests:</label>

      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion:</label>

      <select
        id="occasion"
        value={occasion}
        onChange={(event) => setOccasion(event.target.value)}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!isFormValid}>
        Reserve a table
      </button>
    </form>
  );
}

export default BookingForm;