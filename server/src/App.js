const express = require('express')
const connectDB = require('./database/db')
const app = express();
const appRoute = require("./routes/userRoute")
const adminRoute = require("./routes/adminRouter")
const staffRouter = require("./routes/staffRouter")
const cors = require('cors');

// app.use(express.json());
// Enable CORS for all routes
const PORT = process.env.PORT || 3500
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
connectDB();

app.use(cors(corsOptions));

app.use("/api", appRoute)
app.use("/admin", adminRoute)
app.use("/staff", staffRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}`)
})

