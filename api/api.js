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
  let data = qs.stringify({
    post: "2",
    token: process.env.SMS_KEY,
    msg: `hola ${name}`,
    list: phone,
    from: "gilad",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://www.micropay.co.il/ExtApi/ScheduleSms.php",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}
