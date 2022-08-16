import React from "react";
import UsersList from "../components/UsersList/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      places: 1,
    },
    {
      id: "u2",
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      places: 5,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
