# Course List

Welcome to the Course List App - A full stack MERN Project!

## Table of Contents

- [Getting Started](#getting-started)
- [Backend](#backend)
   - How to run?
   - [Routes](#routes)
- [Frontend](#frontend)
   - How to start it?
   - Functionalities  


## Getting Started

To get started with the Book Directory API, follow these steps:

1. Clone the repository to your local machine.

2. To clone, copy the repo url and run in the terminal with `git clone`


## BACKEND

## How to run API?

- Run command, `cd server`
- To install all dependencies, run `npm i`
- To start server, `nodemon`

## Routes

### Get list of courses

- Route: `GET /getCourses/:pageNo`
- It returns courses for first page. PageNo refers for pagination

### Get Details by ID

- Route: `GET /getDetails/:id`
- Description: Get details of specific course by its ID.

### Get Enrolled Courses by ID

- Route: `GET /emrolledCourses/:id`
- Description: Get list of course, a user is enrolled by its userID.


### Mark Course As Completed

- Route: `POST /markCompleted`
- Description: Pass userId and courseId in the body.

### Search

- Route: `POST /search`
- Description: Pass the query in the body and it will search based on course Name and instructor name

## FRONTEND

## How to start it?

- Run command, `cd client`
- To install all dependencies, run `npm i`
- To start server, `npm run dev`

##Functionalities

 - Redux is used for data management
 - Pagination implemented
 - Can set courses as completed but can't again mark uncompleted
 - Enroll in courses
 - Can access dashboard only after login
 - Login as Guest functionality provided

