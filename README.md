# Todo list API

Todo list API is the API to make my [Todo list web app](https://vibrant-euclid-157bdc.netlify.app/) work. This API allows users to : create a task, read all the tasks, update a task and delete a task (CRUD server).

Frontend project is here: 👉 [Frontend](https://github.com/Remi-deronzier/todo-list-frontend)

## Prerequisties

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of `node.js`, `MongoDB`
* You have a `Windowd/Linux/Mac` machine.

*Option : you can install [Postman](https://www.postman.com/) to easily make requests.*

## Installing Todo list API

Clone this repository:
```
git clone https://github.com/Remi-deronzier/todo-list-api.git
cd todo-list-api
```

Install packages:
```
npm i
```

Create a `.env` file at the root of the project and store the following environment variables:
```
MONGODB_URI = <your-mongodb-uri>
PORT = <the-listening-port-of-your-server>
```

When installation is complete, run the project:
```
npx nodemon index.js
```

## Route documentation (main routes)

### /create (POST)
Create a task

Body | Type | Required
------------ | ------------- | ------------
`name` | string | Yes
`done` | boolean | No

### / (GET)
Get all the tasks

### /update (POST)
Update a task

Body | Type | Required
------------ | ------------- | ------------
`done` | boolean | Yes

### /delete (POST)
Delete a task

Body | Type | Required | Description
------------ | ------------- | ------------ | ------------
`id` | boolean | Yes | task id

