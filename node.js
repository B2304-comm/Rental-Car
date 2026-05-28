const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const axios = require("axios");

const app = express();
const PORT = 5000;
const SECRET_KEY = "your_secret_key";
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

app.use(express.json());
app.use(cors());

// Initialize Sequelize (SQLite for simplicity)
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "rental.db",
});

// Define Models
const User = sequelize.define("User", {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
});

const Car = sequelize.define("Car", {
    model: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    available: { type: DataTypes.BOOLEAN, defaultValue: true },
});

// **User Registration**
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(400).json({ error: "User already exists" });
    }
});

// **User Login**
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

// **Get Available Cars**
app.get("/cars", async (req, res) => {
    const cars = await Car.findAll({ where: { available: true } });
    res.json(cars);
});

// **Book a Car**
app.post("/book", async (req, res) => {
    const { car_id } = req.body;
    const car = await Car.findByPk(car_id);
    if (car && car.available) {
        car.available = false;
        await car.save();
        res.json({ message: "Car booked successfully!" });
    } else {
        res.status(400).json({ message: "Car not available" });
    }
});

// **Google Maps Geocoding API**
app.post("/map", async (req, res) => {
    const { location } = req.body;
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${GOOGLE_MAPS_API_KEY}`
        );
        const result = response.data.results[0]?.geometry.location;
        if (result) res.json({ location: result });
        else res.status(400).json({ message: "Location not found" });
    } catch (error) {
        res.status(500).json({ error: "Google Maps API Error" });
    }
});

// **Sync Database & Start Server**
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
