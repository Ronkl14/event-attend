import { useRouter } from "next/router";
import { getEventById, getAllUsers, sendSMS } from "@/api/api";
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

  useEffect(() => {
    async function fetchData() {
      const userList = await getAllUsers(eventId);
      setUsers(userList);
    }
    fetchData();
  }, [users]);

  function handleSendSMS(name, phone) {
    sendSMS(name, phone);
    console.log("sent");
  }

  return (
    <div>
      {event.name}
      <InviteUser setUsers={setUsers} eventId={eventId} />
      {users?.map((user) => {
        return (
          <div key={user.phone}>
            <div>{`${user.attendee_name} ${user.attendee_phone}`}</div>
            <button
              onClick={() =>
                handleSendSMS(user.attendee_name, user.attendee_phone)
              }
            >
              Send SMS
            </button>
          </div>
        );
      })}

      <div>
        <Link href="/">Back Home</Link>
      </div>
    </div>
  );
};

export default EventPage;
