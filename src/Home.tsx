import React from "react";
import {user} from "./layout/DrawerRouterContainer";
export default function Home() {
  return (
    <>
      <div style={{ float: "left", width: "90%" }}>
        <h2>
          <b>Welcome to Garmin Dashboard</b>
        </h2>
        <p>
          Today is {new Date().getDate()}/{new Date().getMonth() + 1}/
          {new Date().getFullYear()}
        </p>
        <p>Athlete name: {user.name}</p>
        <p>Other info: </p>
      </div>
      <div style={{ float: "right", width: "10%" }}>
        <a
          href="https://connect.garmin.com/signin"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img
            style={{ width: "100%", display: "inline-block" }}
            src="/logo_garmin.jpg"
            alt="Garmin_Connect_API"
          />
        </a>
      </div>
      <img
        style={{
          display: "block",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          margin: "auto",
          overflow: "hidden",
          height: "580px",
        }}
        src="/home_page.jpg"
        width="100%"
        alt="Garmin_Dashboard_Homepage"
      />
    </>
  );
}
