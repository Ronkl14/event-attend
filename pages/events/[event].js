import { useRouter } from "next/router";
import { getEventById } from "@/api/api";
import { useEffect, useState } from "react";
import Link from "next/link";
import InviteUser from "@/components/InviteUser";

const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.event;
  const [event, setEvent] = useState({});
  const [users, setUsers] = useState([]);

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

  return (
    <div>
      {event.name}
      <InviteUser />
      <div>
        <Link href="/">Back Home</Link>
      </div>
    </div>
  );
};

export default EventPage;
