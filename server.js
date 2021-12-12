const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const connectDB = require("./database/db");

const authRoutes = require("./routes/auth");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

connectDB();

app.listen(port, () => console.log(`Listening on port ${port}`));
