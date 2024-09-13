const express = require('express'); // или import express from 'express' для ES Modules
const sequelize = require('./config/db.js'); // Подключение к базе данных
const Book = require('./models/book'); // Импорт модели книги (Book)

const app = express(); // Инициализация приложения Express

app.use(express.json()); // Middleware для работы с JSON

// Определение маршрута для получения всех книг
app.get('/books', async (req, res) => {
  try {
    const books = await Book.findAll(); // Получаем все книги из базы данных
    res.json(books); // Отправляем книги в ответе
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении данных.' });
  }
});

// Другие маршруты (POST, PUT, DELETE)...

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
