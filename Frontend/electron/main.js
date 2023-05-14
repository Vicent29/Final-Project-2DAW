const electron = require('electron')
const {Menu} = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
let mainWindow
let isMobile = false


const template = [{
    label: 'Admin', submenu: [
        {
            label: 'Change View', click: async () => {
                isMobile = !isMobile
                if (isMobile) {
                    mainWindow.setSize(428, 926, true)
                } else {
                    mainWindow.setSize(900, 680, true)
                }
            }
        }
    ]
}]

const menuMobile = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menuMobile)

function createWindow() {
    mainWindow = new BrowserWindow({width: 900, height: 680})
    mainWindow.webContents.toggleDevTools()
    mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    mainWindow.on('closed', () => mainWindow = null)
}


app.on('ready', () => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
