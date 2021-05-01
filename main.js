const {app, BrowserWindow} = require('electron');
var win;

const path = require('path');
const express = require('express');
const webApp = express();
const session = require('express-session');
const methodOverride = require('method-override');
const routerIndex = require('./routes/index.js');
const routerAdministrar = require('./routes/administrar.js');
const routerVentas = require('./routes/ventas.js');
const routerProductos = require('./routes/productos.js');

const routerAPIIndex = require('./routes/apis/index.js');
const routerAPIProducts = require('./routes/apis/productos.js');

webApp.set('views', path.join(__dirname, 'views'));
webApp.set('view engine', 'ejs');

webApp.use(express.static(path.join(__dirname, 'public')));

webApp.use(express.json());
webApp.use(express.urlencoded({ extended: false }));
webApp.use(session({secret: `Secreto`}));
webApp.use(methodOverride('_method'))
webApp.listen('3030', () => console.log('App listening at port 3030'));

webApp.use('/', routerIndex);
webApp.use('/productos', routerProductos)
webApp.use('/administrar', routerAdministrar);
webApp.use('/ventas', routerVentas);

webApp.use('/api/index', routerAPIIndex);
webApp.use('/api/products', routerAPIProducts);

function createWindow(){

    win = new BrowserWindow({

        width: 1366,
        height: 768,
        minWidth: 1366,
        minHeight: 768,
        maximizable: true,
        webPreferences:{
            preload: path.join(__dirname, 'preload.js'),
        }
    })
}

app.whenReady().then(() => {

    createWindow();

    win.loadURL('http://localhost:3030/');

    app.on('activate', () => {

        if(BrowserWindow.getAllWindows().length === 0) createWindow();
        mainWindow.loadUrl(`http://localhost:3030/`);
    })
})

app.on('window-all-closed', () => {

    if(process.platform !== 'darwin') app.quit();
})