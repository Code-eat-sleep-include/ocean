const express = require('express')
const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: false}));


// events
app.get("/events", (req, res) => {
    // send events list
})

app.post("/events", (req, res) => {
    // add to events list
})

// donations
app.get("/donations", (req, res) => {
    // send donations list
})

app.post("/donate", (req, res) => {
    // process a donation
})

// progress
app.get("/progress", (req, res) => {
    // send progress update
})

app.post("/update_progress", (req, res) => {
    // update progress
})

app.get("*", (req, res) => {
    res.status(404).send();
})

app.listen(PORT, () => {
    console.log("Server is running at port:", PORT)
})
