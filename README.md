# React + Vite dev environment

npm create vite@latest - select React framework and Vanilla JS

# ESlint for React and Vite

npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

# React Router

npm i react-router-dom

# Launch dev preview build

npm run dev

# Styling

Uses css for global styling and css modules for component specific styling.

# Access to server

- run "npm i json-server" in the cli
- to access "server" add "json-server --watch data/cities.json --port 8000 --delay 500" to package.json within scripts object. 
- in the terminal run "npx json-server --watch data/cities.json --port 8000 --delay 500" to launch mock server.

# React leaflet and leaflet library

- run "npm i react-leaflet leaflet" to install open source map library

# React-Datepicker
- run 'npm i react-datepicker' to install open source date picker. Place this css link into the file where datepicker element is to be used. import 

"react-datepicker/dist/react-datepicker.css";
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
