import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { fetchRooms } from "../api/liquidApi";
import { friendlyLabels } from "../utilities/boardLabels"; 

export default function RoomsOverview() {
  const [rooms, setRooms] = useState([]);
  const [mealPlans, setMealPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [loading, setLoading] = useState(true);

  const normalizeMealPlan = (str) => str?.replace(/\s+/g, "").toLowerCase() || "roomonly";

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchRooms();
        const hotel = data.hotels?.[0];
        const request = hotel?.requests?.[0];
        const roomsData = request?.rooms || [];

        const getMealPlan = (rate) => rate.board_name || rate.board || rate.meal_plan || rate.pension || "Room Only";

        const normalizedRooms = roomsData.map((room) => {
          const rates = (room.rates || []).map((rate) => {
            const mealPlanOriginal = getMealPlan(rate);
            return {
              ...rate,
              board_name: normalizeMealPlan(mealPlanOriginal),
              type: mealPlanOriginal,
            };
          });
          return {
            ...room,
            photo_url: room.photo_url || "/placeholder.jpg",
            rates,
          };
        });

        setRooms(normalizedRooms);

        const boardsSet = new Set();
        normalizedRooms.forEach((room) => {
          (room.rates || []).forEach((rate) => boardsSet.add(rate.board_name));
        });

        const boardsArray = Array.from(boardsSet).map((value) => ({
          value,
          label: friendlyLabels[value] || value,
        }));

        setMealPlans(boardsArray);
        if (boardsArray.length > 0) setSelectedPlan(boardsArray[0].value);
      } catch (err) {
        console.error("Error loading rooms:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="rooms-wrapper">
      <div className="rooms-header">
        <h2></h2>
        {mealPlans.length > 0 && (
          <div className="meal-plan-select">
            <label htmlFor="mealPlan">Choose meal plan:</label>
            <select
              id="mealPlan"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
            >
              {mealPlans.map((plan) => (
                <option key={plan.value} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id || room.name} room={room} selectedPlan={selectedPlan} />
        ))}
      </div>
    </div>
  );
}
