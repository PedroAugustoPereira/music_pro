// const { contextBridge, ipcRenderer } = require("electron");
// //contextoBridge: permite expor funcionalidades do electron de form segura para o ambiente de renderização do aplicativo
// //ipcRenderer: módulo que permite a comunicação IPC do Electron  na janela de renderização.
// //IPC: comunicação entre processos, refere-se a capacidae de trocar informações e dados entre diferentes processos

// contextBridge.exposeInIsolatedWorld("electronAPI", {
//   //export a electron API, evita que o código do renderizador tenha acesso a tudo do Electron
//   SendToElectron: (channel, data) => ipcRenderer.send(channel, data), //pode ser chaado a partir do ambiente de renderização, channel é o canal dos dados, e data é os dados. ipcRenderer.send envia tudo para o processo principal d electron através d channel

//   //ReciveFromElectron vai ser usado para registrar um ouvinte no processo de renderização para ouvir mensagens do processo principal
//   //ipcRenderer.on registra um ouvinte no channel especificado, quando uma mensagem é recebida em channel, a func será chamada com a mensaem e outros parametros
//   ReciveFromElectron: (channel, func) =>
//     ipcRenderer.on(channel, (event, ...args) => func(event, ...args)),

//   //usado para estabelecer uma conexão bidericional entre o processo principal e a renderização
//   //a partir do channel, usa-se ipcRenderer.invoke para chamar uma função no processo principal através do channel explicado
//   BidirectionalComunication: (channel) => ipcRenderer.invoke(channel),
// });

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  SendToElectron: (channel, data) => ipcRenderer.send(channel, data),
  ReciveFromElectron: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(event, ...args)),
  BidirectionalComunication: (channel) => ipcRenderer.invoke(channel),
});
