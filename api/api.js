import axios from "axios";
import qs from "qs";

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

export async function getAllUsers() {
  try {
    const response = await api.get("/users");
    return response.data.data;
  } catch (err) {}
}

export async function createUser(data) {
  try {
    const response = await api.post("/users", data);
  } catch (err) {}
}

export async function sendSMS(name, phone) {
  try {
    const response = await api.post("/users/msg", { name: name, phone: phone });
  } catch (err) {}
}
