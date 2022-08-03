// использование данных из конфигурации файла .env
require('dotenv').config();

const express = require('express');
const config = require('./config/config');
const errorHandler = require('./middleware/errorHandler');
const mainRouter = require('./routes/main.route');
const { sequelize } = require('./db/models');

// инициализация приложения 'app'
const app = express();

// условное формирование порта
const PORT = process.env.PORT ?? 3001;

// конфигурация приложения
config(app);

// маршрутизация приложения
app.use('/', mainRouter);

// обработка ошибок из next(error)
app.use(errorHandler);

// проверка работы ДБ
sequelize.authenticate();

// прослушивание порта приложения
app.listen(PORT, () => {
  console.log(`*** Server started at ${PORT} port ***`);
});

