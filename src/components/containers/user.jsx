import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function User() {
  return (
    <div>
      <h2>User Component</h2>
      <Link to='profile'>Profile</Link> | {" "}
      <Link to='acount'>Profile</Link>
      <Outlet />
    </div>
  );
}
