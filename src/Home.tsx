import React from "react";
import { user } from "./layout/DrawerRouterContainer";
import "./styles/_home.scss";

export default function Home() {
  return (
    <>
      <div style={{ float: "left", width: "75%" }}>
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
      <div style={{ float: "right", width: "25%" }}>
        <a
          href="/dashboard"
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
      <div className="xss"> {/* can be replaced by id if you nominate # in scss */}
        <img src="/1.jpg" alt="Garmin_Dashboard_Homepage" />
        <img src="/2.jpg" alt="Garmin_Dashboard_Homepage" />
        <img src="/3.jpg" alt="Garmin_Dashboard_Homepage" />
        <img src="/4.jpg" alt="Garmin_Dashboard_Homepage" />
        <img src="/5.jpg" alt="Garmin_Dashboard_Homepage" />
      </div>
    </>
  );
}
