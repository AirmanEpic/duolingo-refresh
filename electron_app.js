const {app, BrowserWindow, ipcMain} = require('electron')

var fs = require('fs');
var files = fs.readdirSync('/');

require('electron-debug')();

function createWindow(){
	win = new BrowserWindow({width: 800, height: 600,webPreferences: {devTools: true},show:false})

	win.setMenu(null)
	win.loadFile('index.html')

	win.on('ready-to-show', function(){
		win.show()
		win.maximize();
		})	
}

app.on('ready', function(){
	createWindow()
})
