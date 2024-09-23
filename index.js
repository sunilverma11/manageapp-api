// here we are using express
// express is big function , function of objects
const express = require("express");
const taskController = require("./controllers/task.controller")
const userController = require("./controllers/user.controller")
const app = express()
const cors = require('cors');
const viewurl = process.env.viewurl;
const connect = require("./configs/db");


const corsOptions ={
    origin: viewurl, 
    // origin:'https://todos-api-react.netlify.app',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


// to read json file have to initialize

app.use(express.json())

app.use("", taskController,userController);

app.listen(process.env.PORT || 5432, async () => {
    try {
      await connect();
      console.log("listioning to port 5432");
    } catch (error) {
      console.log(error);
    }
  });