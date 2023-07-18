# CRUD - API

This is a CRUD API with authentication and authorization capabilities that allows you to perform Create, Read, Update, and Delete operations on posts.

## Endpoints

| Endpoint         | Method | Description            | Requirements                                                 |
| ---------------- | ------ | ---------------------- | ------------------------------------------------------------ |
| `/post`          | GET    | Get all posts          | No requirements.                                             |
| `/post`          | POST   | Create a new post      | Valid token. Body payload: {message}.                        |
| `/post/:id`      | PUT    | Update a specific post | Token of the same user as the post. Body payload: {message}. |
| `/post/:id`      | DELETE | Delete a specific post | Token of the same user as the post.                          |
| `/auth/login`    | POST   | Receives a token       | Body payload: {name, password}                               |
| `/auth/register` | POST   | Register a new user.   | Body payload: {name, password}, name must be unique          |

## Technologies used

### Typescript 5.1

TypeScript was employed in this project to enhance the development process by providing improved tooling and detecting potential errors during coding.

### Express 4.18

Express is a fast and minimalist web application framework for Node.js. It simplifies the process of building robust APIs by providing a set of essential features and middleware.

### MongoDB 6.06

MongoDB is a widely used NoSQL database system. It was chosen for this project due to its flexibility and scalability, which make it suitable for storing and retrieving structured data efficiently.

### bcryptjs 2.4

bcryptjs is a JavaScript library used for password hashing. It provides a secure way to store passwords in the database by employing a cryptographic hash function to convert plain-text passwords into a series of characters that cannot be easily reversed.
