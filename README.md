# medical-terminology

Building REST API using Node, Express, and MongoDB (Mongoose)

1. initialize a package `npm init -y`
2. install dependencies
   a. axios for API: `npm install axios`
   b. Express.js: Install the Express framework, which simplifies API development `npm install express`
   c. mongoose: database storage
   d. dotenv: to store sensitive information
   e. nodemon: it restarts the server whenever a file is saved.
3. To run the app, use command:
   `nodemon app.js` or `npm start` if starter script is available in package.json file
4. Connect to your mongoose by accessing your MongoDB account.
5. Import json to MongoDB using MongoDB Compass. Import json file
6. Create CRUD routes for endpoints
7. Test API endpoints in postman.
8. Create the Model

### Errors:

1.  Message: MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    Solution: Check mongoose connection. Check dotenv import is correct.
2.  Message: fatal: the remote end hung up unexpectedly
    Solution: `git config http.postBuffer 524288000`

### Resources:

https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/#1
https://www.youtube.com/watch?v=tXS_1VMhdT4
https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
