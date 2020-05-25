var cors = require('cors');
const express = require('express');
const profileRouter = require('./routers/profile');
require('./db/mongooseConfig');

const port = process.env.PORT;

const app = express();

// enable cors
app.use(cors());
// json middleware
app.use(express.json());
// apply profile express router
app.use(profileRouter);

// start listening
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
