import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export async function getAllEvents() {
  try {
    const response = await api.get("/events");
    return response.data.data;
  } catch (err) {}
}

export async function createEvent(data) {
  try {
    const response = await api.post("/events", data);
  } catch (err) {}
}

export async function getEventById(id) {
  try {
    const response = await api.get(`/events/${id}`);
    return response.data.data;
  } catch (err) {}
}
