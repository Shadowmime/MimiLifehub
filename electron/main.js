// electron/main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow; // store reference

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 760,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (true) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
};

// Handle window resize requests from renderer
ipcMain.on('resize-window', (event, { width, height }) => {
  if (mainWindow) {
    mainWindow.setSize(width, height);
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
