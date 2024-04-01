This repository contains a Node.js project that fulfills three tasks as described below:

Task 1: Creating a simple endpoint with Express.js to handle queries for numbers and return a modified message based on divisibility conditions.

Task 2: Developing a Node script to interact with an external API (https://reqres.in/) to perform specific operations like fetching users, updating job titles, and deleting users.

Task 3: Implementing an API similar to Task 2 but with additional functionality of MongoDB integration to perform CRUD operations on users.

Prerequisites

Before running this project, ensure you have the following installed:

Node.js

npm (Node Package Manager)

MongoDB (if you plan to implement Task 3)

Usage

Task 1

To run the Task 1 endpoint:

Ensure MongoDB is running (if you plan to implement Task 3).
Start the server:
node task1.js

Access the endpoint with the following URL format:

http://localhost:3000/task-1?number=<your_number>

Replace <your_number> with any integer value. The server will return a modified message based on the divisibility conditions described in the task.

Task 2

To execute Task 2:

Ensure MongoDB is running (if you plan to implement Task 3).
Run the script:
node task2.js

The script will fetch users from the API, update the job title of the first user whose name starts with 'a' to 'boss', and then delete all other users in parallel.

Task 3

For Task 3, which involves MongoDB integration:

Ensure MongoDB is running locally or accessible via a cloud instance.
Start the server:
node task3.js

This will create an API with endpoints for creating users, fetching all users, and fetching a user by ID. The MongoDB database will be used for storing user data.
