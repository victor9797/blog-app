import React from "react";

import UserItem from "../UserItem/UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No users found</h2>
      </div>
    );
  } else {
    return (
      <ul>
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              blogCount={user.blogs}
            />
          );
        })}
      </ul>
    );
  }
};

export default UsersList;
