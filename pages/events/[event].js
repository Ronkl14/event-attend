import { useRouter } from "next/router";
import { getEventById } from "@/api/api";
import { useEffect, useState } from "react";

const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.event;
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function fetchEvent() {
      const event = await getEventById(eventId);
      setEvent(event);
    }

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return <div>{event.name}</div>;
};

export default EventPage;
