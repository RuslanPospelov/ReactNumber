const express = require('express');
const morgan = require('morgan');

// главная конфигурация приложения
const config = (app) => {
  // использование middleware
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = config;
