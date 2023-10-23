const { app, BrowserWindow } = require("electron");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegrastion: true,
    },
  });

  mainWindow.loadURL("http://localhost:3000");
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.plataform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
