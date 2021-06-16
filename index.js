const express = require('express');
const app = express();
const path = require('path');

//ajustes
app.set('port',800);
app.set('views', path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//rutas
app.use(require('./rutas/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname,'publica')));

//puerto escucha
app.listen(app.get('port'), () => {
    console.log('Server alojado en el puerto', app.get('port'));
});