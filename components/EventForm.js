import { useState } from "react";
import { createEvent, getAllEvents } from "@/api/api";

const EventForm = ({ setEventList }) => {
  const [formData, setFormData] = useState({});

  async function submitHandler(e) {
    e.preventDefault();
    await createEvent(formData);
    async function fetchData() {
      const events = await getAllEvents();
      setEventList(events);
    }
    fetchData();
  }

  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <ul>
        <li>
          <label htmlFor="name">Event name:</label>
          <input id="name" name="name" onChange={changeHandler}></input>
        </li>
        <li>
          <label htmlFor="location">Location:</label>
          <input id="location" name="location" onChange={changeHandler}></input>
        </li>
        <li>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            onChange={changeHandler}
          ></input>
        </li>
        <li>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            name="date"
            type="date"
            onChange={changeHandler}
          ></input>
        </li>
      </ul>
      <button type="submit">Create New Event</button>
    </form>
  );
};

export default EventForm;
