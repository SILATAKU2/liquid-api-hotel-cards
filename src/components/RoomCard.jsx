import { useState } from "react";
import { formatBoardName } from "../utilities/boardLabels"; 
import "./RoomCard.css";

export default function RoomCard({ room, selectedPlan }) {
  const [activeRateIndex, setActiveRateIndex] = useState(0);

  const normalize = (str) => (str || "").toLowerCase().replace(/\s+/g, "");

  const filteredRates = (room?.rates || []).filter(
    (rate) => normalize(rate.board_name) === normalize(selectedPlan)
  );

  return (
    <div className="room-card">
      {room?.photo_url && (
        <img src={room.photo_url} alt={room.name} className="room-photo" />
      )}
      <h3 className="room-title">{room.name}</h3>

      <div className="loyalty-row">
        <button className="toggle-btn">
          <span className="toggle-switch">
            <span className="toggle-circle" />
          </span>
          Get Loyalty Club Discount
        </button>
        <a href="#" className="sign-in-link">
          Sign in
        </a>
      </div>

      {filteredRates.length > 0 ? (
        <div className="rates">
          {filteredRates.map((rate, idx) => (
            <div
              key={idx}
              className={`rate-block ${activeRateIndex === idx ? "active" : ""}`}
              onClick={() => setActiveRateIndex(idx)}
            >
              <p className="rate-board">{formatBoardName(rate.board_name)}</p>

              <div className="rate-header">
                <p className="rate-name">{rate.name}</p>
                <div className="price-row">
                  {rate.discount > 0 && (
                    <span className="old-price">€{rate.price.toFixed(2)}</span>
                  )}
                  <strong className="final-price">
                    €{(rate.member_price || rate.price).toFixed(2)}
                  </strong>
                </div>
              </div>

              <div className="rate-footer">
                <a href="#" className="view-more">View more</a>
                <div className="footer-line-container"></div>
                <a
                  href={rate.booking_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-rates">No rates for this meal plan</p>
      )}
    </div>
  );
}
