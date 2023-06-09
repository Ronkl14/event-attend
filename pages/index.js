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
        {eventList?.map((event) => {
          return (
            <li key={event.idevents}>
              <Link href={`/events/${event.idevents}`}>{event.event_name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
