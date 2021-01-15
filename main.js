const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

function createWindow(config, url, onClosed) {
    mainWindow = new BrowserWindow(config);
    mainWindow.loadURL(url);
    mainWindow.on('closed', onClosed);
}

const mainWindowConfig = [
    {width: 800, height: 600},
    "http://localhost:8000/",
    () => mainWindow = null,
];

app.on('ready', () => createWindow(...mainWindowConfig));
app.on('window-all-closed', () => {
    if(process !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if(mainWindow === null) {
        createWindow(...mainWindowConfig);
    }
});