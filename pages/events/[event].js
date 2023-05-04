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
      const userList = await getAllUsers();
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
      <InviteUser setUsers={setUsers} />
      {users.map((user) => {
        return (
          <>
            <div key={user.phone}>{`${user.name} ${user.phone}`}</div>
            <button
              key={user.phone}
              onClick={() => handleSendSMS(user.name, user.phone)}
            >
              Send SMS
            </button>
          </>
        );
      })}

      <div>
        <Link href="/">Back Home</Link>
      </div>
    </div>
  );
};

export default EventPage;
