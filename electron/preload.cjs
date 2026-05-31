const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    // 后续需要时在这里暴露 API，暂时留空
})