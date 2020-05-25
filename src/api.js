var cors = require('cors');
const express = require('express');
const profileRouter = require('./routers/profile');
require('./db/mongooseConfig');

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use(profileRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
