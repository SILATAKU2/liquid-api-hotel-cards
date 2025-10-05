# liquid-api-hotel-cards
A React-based hotel room overview component that fetches live data from the Liquid API and displays dynamic room cards with real time rates and meal plans.

##  Overview

This project was built as part of a coding challenge to demonstrate how to:
- Fetch and process **real-time data** from a REST API.
- Normalize and structure API responses.
- Display hotel room details with **interactive UI components**.
- Implement **meal plan filtering** dynamically.
- Use modern **React Hooks (useState, useEffect)** and clean component architecture.

---

##  Features

 **Live API Data Fetching**
- Data is fetched via HTTP request using a dedicated API helper function.
- Automatically updates the UI when the data is loaded.

 **Dynamic Room Cards**
- Each card displays hotel room info, images, and available rates.
- User can toggle between different meal plans (Room Only, Breakfast, Half Board, etc.).

 **Meal Plan Filtering**
- Rates are filtered based on the selected plan.
- Uses normalized strings to match API-provided data reliably.

 **Clean Component Separation**
- `RoomsOverview.jsx` handles data fetching, normalization, and filtering.
- `RoomCard.jsx` focuses purely on the room display logic.

 **Error Handling & Loading States**
- fallback messages for loading and missing data.

---

##  Key Concepts Demonstrated

- **API Integration:** Fetching data asynchronously with error handling.
- **State Management:** Handling multiple layers of dynamic UI state.
- **Data Normalization:** Cleaning inconsistent API responses for reliable rendering.
- **Reusable Components:** Each part of the UI is modular and isolated.
- **Semantic JSX + CSS Structure:** Clear class naming for scalable styling.

---

##  Tech Stack

- **React 18+**
- **JavaScript (ES6+)**
- **CSS Modules**
- **Fetch API**

