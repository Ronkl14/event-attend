import { useState } from "react";
import { createUser, getAllUsers } from "@/api/api";

const InviteUser = ({ setUsers }) => {
  const [formData, setFormData] = useState({});

  async function submitHandler(e) {
    e.preventDefault();
    await createUser(formData);
    async function fetchData() {
      const userList = await getAllUsers();
      setUsers(userList);
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
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" onChange={changeHandler}></input>
        </li>
        <li>
          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" name="phone" onChange={changeHandler}></input>
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InviteUser;
