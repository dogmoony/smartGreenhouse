const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB, Monitoring, Settings, Equipment } = require('./smart-greenhouse/src/DB');

// Підключення до бази даних
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Маршрут: Отримати дані моніторингу
app.get('/api/monitoring', async (req, res) => {
    try {
        const data = await Monitoring.find();
        res.json(data);
    } catch (err) {
        res.status(500).send('Помилка сервера');
    }
});

// Маршрут: Додати дані моніторингу
app.post('/api/monitoring', async (req, res) => {
    try {
        const newData = new Monitoring(req.body);
        await newData.save();
        res.status(201).send('Дані додано');
    } catch (err) {
        res.status(500).send('Помилка сервера');
    }
});

app.listen(5000, () => {
    console.log('Сервер запущено на порту 5000');
});
