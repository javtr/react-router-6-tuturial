import React from "react";
import { Link, Outlet, useSearchParams,NavLink, useLocation } from "react-router-dom";
import { getAllUsers } from "../../users_data";

export default function User() {
  const users = getAllUsers();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("filter") ?? "";
  const location = useLocation();

  function handleSearck(e) {
    setSearchParams({ filter: e.target.value });
  }

  return (
    <div>
      <h2>User Component</h2>
      <input
        value={filterValue}
        onChange={handleSearck}
        type="text"
        placeholder="search"
      ></input>

      <div style={{display:"flex"}}>
        <ul>
          {users

            .filter((user) => {
              if (!filterValue) {
                return true;
              } else {
                const name = user.name.toLowerCase();
                return name.includes(filterValue.toLowerCase());
              }
            })

            .map((user) => (
              <li key={user.id}>
                <h3>
                  <NavLink  style={({isActive})=>(isActive? {color: 'red'}:{})} 
                  to={user.id.toString() + location.search}>{user.name}</NavLink>
                </h3>
              </li>
            ))}
        </ul>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
