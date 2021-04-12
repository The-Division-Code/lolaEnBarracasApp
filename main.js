const {app, BrowserWindow} = require('electron');
var win;

const path = require('path');
const express = require('express');
const webApp = express();

const routerIndex = require('./routes/index.js');

webApp.set('views', path.join(__dirname, 'views'));
webApp.set('view engine', 'ejs');

webApp.use(express.static(path.join(__dirname, 'public')));

webApp.listen('3030', () => console.log('App listening at port 3030'));

webApp.use('/', routerIndex);

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
    })
})

app.on('window-all-closed', () => {

    if(process.platform !== 'darwin') app.quit();
})