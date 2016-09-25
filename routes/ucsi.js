var express = require('express');
var router = express.Router();

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', { title: 'Bienvenidos - UCSI' });
  });
  
  app.get('/admision', function(req, res) {
    res.render('ucsi/admision', { title: 'Admisión' });
  });
  
  app.get('/carreras', function(req, res) {
    res.render('ucsi/carreras', { title: 'Carreras' });
  });
  
  app.get('/contacto', function(req, res) {
    res.render('ucsi/contacto', { title: 'Contacto' });
  });
  
  app.get('/identidad', function(req, res) {
    res.render('ucsi/identidad', { title: 'Identidad' });
  });
  
  app.get('/lista-eventos', function(req, res) {
    res.render('ucsi/lista-eventos', { title: 'Eventos' });
  });
  
  app.get('/nuestra-historia', function(req, res) {
    res.render('ucsi/nuestra-historia', { title: 'Nuestra Historia' });
  });
  
  app.get('/unidadpedagogica', function(req, res) {
    res.render('ucsi/unidadpedagogica', { title: 'Unidad Pedagógica'});
  });
  
  app.get('/galeria', function(req, res) {
    res.render('ucsi/galeria', { title: 'Galería' });
  });
};