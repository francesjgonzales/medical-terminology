# medical-terminology

## Building REST API using Node.js, Express, and MongoDB (Mongoose)

## Starting the project

1. initialize a package `npm init -y`
2. install dependencies
   a. axios for API: `npm install axios`
   b. Express.js: Install the Express framework, which simplifies API development `npm install express`
   c. mongoose: database storage
   d. dotenv: to store sensitive information
   e. nodemon: it restarts the server whenever a file is saved.
3. To run the app, use command:
   `nodemon app.js` or `npm start` if starter script is available in package.json file

## Back end: Connect to Mongoose by MongoDB

1. Login to your MongoDB account and create a new cluster.
2. Connect your MongoDB database by selecting the `Node.js` driver. Add connection string to your main js file.
3. Create Model Schema
   - create 'models' folder and add a js file inside the folder. A naming convention practice is to save the file according to the type of data you are using (eg. productModel.js)
4. Create CRUD routes for endpoints in your main js file
5. Add a middleware to parse JSON data
6. Test API endpoints in Postman using GET, POST, UPDATE, and DELETE.
7. Check if data is reflected in your MongoDB account.
8. Alternative way of importing large data is to use MongoDB Compass. [Click to download](https://www.mongodb.com/products/tools/compass)

## Front end Connection

1. Locate Mongoose API endpoint where you will find it in your Postman
2. Create a script.js file and use a Promise based HTTP client to fetch your data from the API. We'll be using Axios for this project.
3. Use DOM manipulation to show the data in the front-end.
4. Useful Javascript array methods are filter() to create a new array based on multiple arrays of document, map() to create a new set of array that calls out a function that provides each element in an array.

## Deployment

1. Back-end Mongoose API deployed in Render
2. Front-end deployed in Netlify

### Errors:

1.  Message: MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    Solution: Check mongoose connection. Check dotenv import is correct.
2.  Message: fatal: the remote end hung up unexpectedly
    Solution: `git config http.postBuffer 524288000`

### Resources:

https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
https://www.youtube.com/watch?v=tXS_1VMhdT4
https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
https://dev.to/kodebae/how-to-remove-a-leaked-env-file-from-github-permanently-3lei
[dummyjson](https://dummyjson.com/)
[Build Restful CRUD API with Node.js, Express and MongoDB by Devtamin](https://www.youtube.com/watch?v=9OfL9H6AmhQ)
[Store html form data in MongoDb using Nodejs and express](https://www.youtube.com/watch?v=YD5iOPCO9z8)
