import React from "react";
export default function Home() {
  return (
    <>
      <h2>Welcome to Garmin Dashboard</h2>
      <p>Today is {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</p>
      <p>Athlete name:</p>
      <p>Other info:</p>
      <img src="/home_page.jpg" width="100%" alt="image1"/>
    </>
  )
}