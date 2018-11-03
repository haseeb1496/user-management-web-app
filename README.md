
# Prerequisites

### Without Docker:
- NodeJS (Link: `https://nodejs.org/en/download/`)
- MongoDB (Link: `https://docs.mongodb.com/manual/installation/`)
- Angular CLI (Link: `https://cli.angular.io/`)

### With Docker:
- Docker (`https://docs.docker.com`)
- MongoDB Docker image (Command: `docker pull mongo`)

## Technologies

The Project uses the following technologies:

- Angular 7
- Angular Material
- NodeJS
- MongoDB
- ExpressJS
- Chart.js
- Docker


## Setup

NodeJs and MongoDB must be installed in order to run the Application successfully. Clone the repository to a folder and open a terminal in that folder. Execute 'npm install' command to install the required dependencies. Same must be done for the Back end of the API, link for the Back end content can be found in the 'Back End' section.
Once the dependencies are installed for both the front-end and the back-end, we must individually start both projects using 'npm start' in seperate terminal windows. Make sure MongoDB service is up and running before fetching or creating any data using the application as it will result in an error. The front-end of the application can be accessed at `localhost:4200` whereas the back-end can be accessed at `localhost:3000`.

If docker implementation is used pull the official MongoDB image and use: `docker-compose up` to start the application.

The Web app consists of two parts:

## Back End

The backend content can be found in 'express' folder. The backend uses a REST API to perform basic CRUD operations. The backend requires MongoDB server and database to be installed locally if docker implementation is not used. The data is fetched from the local MongoDB server which is then manipulated using the API.

### GET `/api/users`
The end-point returns list of users existing in the database. Two parameters can be passed along namely `age` and `operator` to filter the existing users by age. The 'operator' values can be:
 - 'lt' (Less than)
 - 'lte' (Less than or equal to)
 - 'gt' (Greater than)
 - 'gte' (Greater than or equal to)
 - 'eq' (Equal to)
 - 'ne' (Not equal to)
 
### GET `/api/users/:id`
The end point is used to get a specific user using `_id` key.
### POST `/api/users`
The end point is used to create a new user.
### PUT `/api/users/:id`
The end point is used to update an existing user.
### DELETE `/api/users/:id`
The end point is used to delete an existing user.
### GET `/api/users/city/find`
The end point returns the list of people count grouped by cities.


## Front End

The front-end of the application can be found in this folder. The project allows us to access the UI of the application.
### '/'
Home page has a 'Get Started' button that takes you the main page of the API where you can register a new user. 
### '/home/create'
Allows the client to create a new user.
### '/home/view'
Allows the client to view the existing users in the form of a table. The user can also be edited or deleted using the provided buttons.
### '/home/view/edit/:id'
Allows the user to edit a specific user.
### '/home/charts'
Allows the user to view the Bar chart of user count against different cities.

Angular Material Navigation tabs are used to route between different pages. 'View Users' page allow us to look through a table of existing users in the local Mongo database. We can also filter users using an 'age' and an 'operator' e.g. 'gt', 'lt', 'eq' etc. The table itself contains a sorting header for the column 'Age', which allows the us to sort users in ascending and descending order. Including all this, we have a 'Charts' page, which allows us to see the 'User Count' against different cities existing in the database.

## Future Works

The application could be improved by adding following features:
- Authentication and Authorization: Guards implementation on Angular to prevent unaurthorized users to access certain pages. Authentication and authorization middleware on express application to prevent unauthorized users from accessing secure end points.
- Schema: Schemas for the users can be pre-defined to make database more consistent.
- Improved UI: Pop up window forms and Modals can also be used to improve user experience.

