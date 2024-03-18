const express = require('express')
const connectDB = require('./database/db')
const app = express();
const appRoute = require("./routes/userRoute")
const cors = require('cors');


// Enable CORS for all routes
const PORT = process.env.PORT || 3500
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
connectDB();


app.use(cors(corsOptions));

app.use("/api", appRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

