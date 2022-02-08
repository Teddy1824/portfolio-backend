const express = require('express');
const projectRouter = require('./route/projectRoute');
const testimonialRoute = require('./route/testimonialRoute')

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send({msg:"Welcome to Teddy's API!"});
})

app.use("/projects", projectRouter);
app.use("/testimonials", testimonialRoute)

app.listen(5000, console.log(`Listening on port 5000...`));