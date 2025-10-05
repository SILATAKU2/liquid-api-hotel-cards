export async function fetchRooms() {
 const url = "https://liquid.staging.hotelwize.com/booking/rates";


 const payload = {
 rooms: [
 {
 check_in: "2026-05-12",
 check_out: "2026-05-13",
 guests: [
 { type: "Adult", age: 0, pax: 2 },
 { type: "Child", age: 2, pax: 0 },
 { type: "Infant", age: 0, pax: 0 },
 ],
 coupon: "",
 lang: "el",
 currency: "EUR",
 device: "Desktop",
 room: "",
 rate: "",
 },
 ],
 device: "Desktop",
 lang: "en",
 currency: "EUR",
 country: "GR",
 sort: [{ field: "Price", order: "Asc" }],
 };

 const response = await fetch(url, {
 method: "POST",
 headers: {
 "Accept": "application/json, text/plain, */*",
 "Content-Type": "application/json",
 "Origin": "https://www.247-1.demo.hotelwize.com",
 "Referer": "https://www.247-1.demo.hotelwize.com/check-rates/",
 "x-website": "https://www.247-1.demo.hotelwize.com/check-rates/",
 },
 body: JSON.stringify(payload),
 });

 if (!response.ok) {
 throw new Error(`API error: ${response.status}`);
 }

 return response.json();
}
