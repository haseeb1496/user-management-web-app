# Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Prerequisites

- NodeJS (Link: `https://nodejs.org/en/download/`)
- MongoDB (Link: `https://docs.mongodb.com/manual/installation/`)

## Techonologies

The Project uses the following technologies:

- Angular 2+
- NodeJS
- MongoDB
- ExpressJS
- Chart.js
- Angular Material

## Running Procedure

NodeJs and MongoDB must be installed in order to run the Application successfully. Clone the repository to a folder and open a terminal in that folder. Execute 'npm install' command to install the required dependencies. Same must be done for the Back end of the API, link for the Back end content can be found in the 'Back End' section.
Once the dependencies are installed for both the front-end and the back-end, we must individually start both projects using 'npm start' in seperate terminal windows. Make sure MongoDB service is up and running before fetching or creating any data using the application as it will result in an error. The front-end of the application can be accessed at `localhost:4200` whereas the back-end can be accessed at `localhost:3000`.

## Back End

The backend content can be found in a seperate repository: `https://github.com/haseeb1496/UserAPI-BackEnd`. The backend uses a REST API to perform baseic CRUD operations. The data is fetched from the local MongoDB server which is then manipulated using the API.

## Front End

The front-end of the application can be found in this repository. The project allows us to access the UI of the application. Home page has a 'Get Started' button that takes you the main page of the API. There you can register a new user. Angular Material Navigation tabs are used to route between different pages. 'View Users' page allow us to look through a table of existing users in the local Mongo database. We can also filter users using an 'age' and an 'operator' e.g. 'gt', 'lt', 'eq' etc. The table itself contains a sorting header for the column 'Age', which allows the us to sort users in ascending and descending order. Including all this, we have a 'Charts' page, which allows us to see the 'User Count' against different cities existing in the database.
