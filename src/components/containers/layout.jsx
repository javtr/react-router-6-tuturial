import React from "react";
import { Link,Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{padding:"10px 35px"}}>
      <nav>
        <Link to="home" >Home</Link> | {" "}
        <Link to="user" >User</Link> | {" "}
        <Link to="acount" >Acount</Link> | {" "}
        <Link to="profile" >Profile</Link> 
      </nav>
      
      <Outlet />
    </div>
  );
}
