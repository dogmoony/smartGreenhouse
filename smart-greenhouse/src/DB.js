// MongoDB Configuration and Setup for Smart Greenhouse

const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/smart_greenhouse', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Schema for Monitoring Data
const MonitoringSchema = new mongoose.Schema({
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    co2_level: { type: Number, required: true },
    recorded_at: { type: Date, default: Date.now },
});

// Schema for Settings
const SettingsSchema = new mongoose.Schema({
    min_temperature: { type: Number, required: true },
    max_temperature: { type: Number, required: true },
    min_humidity: { type: Number, required: true },
    max_humidity: { type: Number, required: true },
    min_co2_level: { type: Number, required: true },
    max_co2_level: { type: Number, required: true },
    updated_at: { type: Date, default: Date.now },
});

// Schema for Equipment Status
const EquipmentSchema = new mongoose.Schema({
    heater_status: { type: Boolean, default: false },
    light_status: { type: Boolean, default: false },
    watering_status: { type: Boolean, default: false },
    updated_at: { type: Date, default: Date.now },
});

// Create Models
const Monitoring = mongoose.model('Monitoring', MonitoringSchema);
const Settings = mongoose.model('Settings', SettingsSchema);
const Equipment = mongoose.model('Equipment', EquipmentSchema);

module.exports = {
    connectDB,
    Monitoring,
    Settings,
    Equipment,
};
