import React, { useReducer } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllUsers } from "../../users_data";

export default function User() {
  const users = getAllUsers();

  console.log(users);

  return (
    <div>
      <h2>User Component</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>
              <Link to={user.id.toString()}>
                {user.name}
              </Link>
            </h3>
          </li>
        ))}
      </ul>

      {/* <Outlet /> */}
    </div>
  );
}
