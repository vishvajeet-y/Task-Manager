# Task-Manager

## Tech Stack-

- React JS
- Node JS
- Express JS
- Mongoose
- BootStrap

## Environment Setup-

- Drop a :star: on the GitHub repository.
  <br/>

- Download and install a code/ text editor.
  - Recommended-
    - [Download VS Code](https://code.visualstudio.com/download)

<br/>

- Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you download Node, npm also gets installed by default)
  <br/>

- Mongo DB community editition is free and a great software in order to work with MongoDB applications. [Download Mongo DB community editition](https://docs.mongodb.com/manual/administration/install-community/)
  <br/>

- Robo 3T is a desktop graphical user interface (GUI) for Mongo DB. It can help to skip running all the Mongo DB commands manually every time we want to access the data. [Download Robo 3T](https://robomongo.org/download)
  <br/>

* Clone the repository by running command

```
git clone https://github.com/ <your user-name> /Task-Manager.git
```

in your git bash.
<br/>

- Run command `cd Task-Manager`.
  <br/>
- Run this command to install all backend dependencies for the project.

```
npm install
```

<br/>

- Run this command to install all React dependencies for the project.

```
npm client-install
```

<br/>

- Run this command on your terminal/ bash to start the Mongo server on port 27017(default).

```
mongod
```

<br/>

- Run this command to start the project on local host 3000.

```
npm run dev
```

<br/>

- Open link to view the website in your browser window if it doesn't open automatically.

```
http://localhost:3000/
```

<br/>

### Overview

This project aims to create task for the user.

### Features

- It allow user to add Task,Edit Task and Remove Task.

### Development

- The project follows an engineered structure for both backend and frontend development. The initial entry point is by default `server.js`
- The project utilises Bootstrap (v5) for it's primary styling purposes.
- The project contains the following scripts:
  - `npm run dev`: This script runs the app in development mode.

#### Guidelines

    - The usage of each directory is listed below for ease of  navigation and  understanding.

#### `router/api`

    - This directory contains all the routes for ```get``` and ```post``` methods.

#### `model/`

     - This directory contains all the Mongoose models and schemas.

#### `model/`

     - This directory contains all the Mongoose models and schemas.

#### `middleware/`

     - This directory contains authentication of user.

#### `Validation/`

     - This directory contains all files for validating user input.

#### `client/`

     - This directory contains all React Js file for Frontend Development.


