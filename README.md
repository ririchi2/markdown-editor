# Markdown Editor
## Used with [electron-vite-react](https://github.com/electron-vite/electron-vite-react)
English | [įŽäŊä¸­æ](README.zh-CN.md)

## đ Overview

đĻ Ready out of the box  
đ¯ Based on the official [template-react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts), project structure will be familiar to you   

## đĢ Quick start

```sh
npm create electron-vite
```

![electron-vite-react.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react.gif?raw=true)

## đ Debug

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react-debug.gif?raw=true)

## đ Directory structure

Familiar React application structure, just with `electron` folder on the top :wink:  
*Files in this folder will be separated from your React application and built into `dist/electron`*  

```tree
âââ electron                  Electron-related code
â   âââ main                  Main-process source code
â   âââ preload               Preload-scripts source code
â   âââ resources             Resources for the production build
â       âââ icon.icns             Icon for the application on macOS
â       âââ icon.ico              Icon for the application
â       âââ installerIcon.ico     Icon for the application installer
â       âââ uninstallerIcon.ico   Icon for the application uninstaller
â
âââ release                   Generated after production build, contains executables
â   âââ {version}
â       âââ {os}-unpacked     Contains unpacked application executable
â       âââ Setup.{ext}       Installer for the application
â
âââ public                    Static assets
âââ src                       Renderer source code, your React application
```
