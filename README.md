# Manage App

## Overview

Manage App is a task management application built with React, Node.js, Express, MongoDB, and Chakra UI. This application allows users to register and log in with their own credentials. Once logged in, users can access a dashboard to manage their tasks by adding, updating, deleting, and changing the status of tasks (done or pending).

## Features

- User Registration and Login
- Protected Dashboard
- Add, Update, Delete Tasks
- Change Task Status (Done or Pending)

## Technologies Used

- **Frontend:** React, Chakra UI
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Installation

###1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/manage-app.git
   cd manage-app
###2. Install dependencies for both client and server:
In the root directory
npm install

In the client directory
cd client
npm install

###3. Create a .env file in the root directory and add the following:
   ####frontend
     REACT_APP_API_URL = "type_your_api_url" like this http://localhost:5432
   ####backend
     secretkey="type_your_secret_key"
     CLIENT_URL="type_your_frontend_url"
     connection="type_your_mongodb_connection_link"
###4. Start the application:
   In the root directory
   npm start
