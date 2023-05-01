import EventForm from "@/components/EventForm";
import { useEffect, useState } from "react";
import { getAllEvents } from "@/api/api";
import Link from "next/link";

export default function Home() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const events = await getAllEvents();
      setEventList(events);
    }
    fetchData();
  }, [eventList]);

  return (
    <>
      <EventForm setEventList={setEventList} />
      <ul>
        {eventList.map((event) => {
          return (
            <li key={event._id}>
              <Link href={`/events/${event._id}`}>{event.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
