## Project Name & Pitch
Team11-CM-FrontEnd

This is a unimelb software project of subject COMP90082. This repositoary aims to design a single front-end
and connect the back-end and do data visualization. Data collected in Garmin Connect is acquired through Garmin wearable. devices used by athletes training under CoachingMate. This project was bootstrapped with Create React App and built with Kendo framework. This the master branch of our project.


## Project Status

This project is currently in development.

1. provide an initial design of the layout
2. connect and retrieve data from the backend
3. User can choose to connect my Garmin watch to the dashboard through Garmin Connect.

## the package introduction

- /src/data/models.tsx: provide data interface and initialize all the data
- /src/layout/DrawerRouterContainer.tsx: design a dashboard banner(including user avatar, router info, etc)
- /src/layout/Loading.tsx: design the animation of loading the data
- /src/panels/*: design functions to parse the data
- /src/services/dataServices.ts: interact with backend
- /src/styles/*: css design
- /src/App.tsx & /src/index.tsx: define display logics
- /src/Dashboard.tsx: Dashboard page implementation
- /src/Home.tsx: Home page implementation
- /src/login.tsx: login page implementation
- /src/react-app-env.d.ts: environment settings


## Installation and Setup Instructions

Clone down this repository. You will need some node modules installed globally on your machine.

`git clone https://github.com/ESJiang/Team11-CM-FrontEnd.git`

Installation of the node dependencies:

`cd Team11-CM-FrontEnd` <br>
`npm install`

To run:

`npm start` or
`yarn start`
