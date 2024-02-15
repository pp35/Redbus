import React, { useState } from "react";
import { connect } from "react-redux";
import { selectSeat, deselectSeat } from "../Actions/BusOptionAction";
import CustomCheckbox from "./Check";
import BookingDetails from "./BookingDetails";

const SeatSelection = ({ selectedSeats, selectSeat, deselectSeat }) => {
  const [upperDeckSeats] = useState(
    Array.from({ length: 19 }, (_, index) => ({
      id: `UA${index + 1}`,
      price: Math.floor(Math.random() * 300) + 700,
    }))
  );
  const [lowerDeckSeats] = useState(
    Array.from({ length: 19 }, (_, index) => ({
      id: `LA${index + 1}`,
      price: Math.floor(Math.random() * 300) + 700,
    }))
  );

  const handleSeatSelection = (seat) => {
    if (!selectedSeats) {
      return; // Add a check to handle null or undefined selectedSeats
    }
  
    if (selectedSeats.includes(seat)) {
      deselectSeat(seat);
    } else {
      selectSeat(seat);
    }
  };
  

  return (
    <div className="flex">
      <div className="col">
        <h2>Select Your Seats</h2>
        <div className="seat-selection-container">
          <div className="deck-container">
            <div className="upper-deck">
              <h3>Upper Deck</h3>
              {upperDeckSeats.map((seat) => (
                <div key={seat.id} className="seat">
                  <CustomCheckbox
                    id={seat.id}
                    checked={selectedSeats.includes(seat.id)}
                    onChange={() => handleSeatSelection(seat.id)}
                  />
                  <label
                    htmlFor={seat.id}
                    className={`label ${
                      selectedSeats.includes(seat.id) ? "selected" : ""
                    }`}
                  >
                    {seat.id} - ₹{seat.price}
                  </label>
                </div>
              ))}
            </div>
            <div className="lower-deck">
              <h3>Lower Deck</h3>
              {lowerDeckSeats.map((seat) => (
                <div key={seat.id} className="seat">
                  <CustomCheckbox
                    id={seat.id}
                    checked={selectedSeats.includes(seat.id)}
                    onChange={() => handleSeatSelection(seat.id)}
                  />
                  <label
                    htmlFor={seat.id}
                    className={`label ${
                      selectedSeats.includes(seat.id) ? "selected" : ""
                    }`}
                  >
                    {seat.id} - ₹{seat.price}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BookingDetails selectedSeats={selectedSeats} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  selectedSeats: state.seatSelection.selectedSeats // Ensure this matches your reducer structure
});


const mapDispatchToProps = {
  selectSeat,
  deselectSeat,
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatSelection);
