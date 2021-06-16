const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('Kiosko.html', { title: 'Pasatiempos'});
});

router.get('/Registrarse',(req,res) => {
    res.render('Registrarse.html', { title: 'Pasatiempos'});
});

router.get('/Iniciar_Sesion',(req,res) => {
    res.render('Iniciar-Sesion.html', { title: 'Pasatiempos'});
});

router.get('/Animales',(req,res) => {
    res.render('Animales.html', { title: 'Pasatiempos 1'});
});

router.get('/Futbol',(req,res) => {
    res.render('Futbol.html', { title: 'Pasatiempos'});
});

router.get('/Pokemon',(req,res) => {
    res.render('Pokemon.html', { title: 'Pasatiempos'});
});

router.get('/Compra-Cromos',(req,res) => {
    res.render('Compra-Cromos.html', { title: 'Pasatiempos'});
});

router.get('/Compra_Coleccion',(req,res) => {
    res.render('Compra_Coleccion.html', { title: 'Pasatiempos'});
});

router.get('/Cuenta',(req,res) => {
    res.render('Cuenta.html', { title: 'Pasatiempos'});
});

router.get('/fichero',(req,res) => {
    res.render('fichero.html', { title: 'Pasatiempos'});
});

module.exports = router;