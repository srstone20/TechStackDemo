# 0: How to run on your machine

- Step 1: Make sure you have Python/Node installed
- Step 2: Clone Repo to computer
    - ATM only in the "Deren" branch, not in Main
- Step 3: Create Python Virtual Environment in main directory (not in frontend or backend)
    - CMD: `python -m venv venv`
- Step 4: Start Python virtual environment:
    - Mac CMD: `source venv/bin/activate`
    - Windows CMD: `.\venv\Scripts\activate`
- Step 5: Install packages
    - Mac CMD: `pip install -r requirements.txt` (have to test)
    - Windows CMD: `pip install -r .\requirements.txt`
    - Can check if installed with: `pip list`
    - Only ones added were: Flask, Flask-Cors, Flask-RESTful
- Step 6: Start Flask Server
    - Need python environment running
    - `cd` into backend directory
    - Start CMD: `python server.py`
- Step 7: Check address where Flask is running
    - In the terminal there will be line: "* Running on http://127.0.0.1:5000" (this was my default)
    - Keep track of this location
    - Home Page located at previous address plus: `/home`
- Step 8: Open a 2nd terminal, keep flask terminal open
- Step 9: Check React Proxy
    - Have to set Proxy to location from Step 7
    - Open frontend > package.json
    - Check Line 5: `"proxy": "http://127.0.0.1:5000",`
    - Set this location to where your Flask is running
- Step 10: Check React URL item
    - Open frontend > src > pages > view1.jsx
    - Check line 7: `const url = "http://127.0.0.1:5000/view1"`
    - Set this line to the Flask location from Step 7
- Step 11: Start React Server
    - `cd` into frontend directory
    - Start CMD: `npm start`
    - Possible Error (likely):
      - Server doesn't start, instead shows Error: `react-scripts` is not recognized as an internal or external command
      - To fix run the command: `npm install`
      - This installs the "node_modules" directory content in frontend
    - Rerun `npm start` after fixing error
- Step 12: Quit both servers
    - Both Flask and React server can be quit with: `CTRL + C` in the terminal

# 1: Setup Items

- Need:
  - Python 3
  - Node / npm
- Resources:
  - [Video Tutorial: Linking React to Flask](https://youtu.be/7LNl2JlZKHA?si=BjXOvCrcIqu6VkwW)
  - [Adding Bootstrap to React](https://www.youtube.com/watch?v=xdXd8BJwJ-U)
  - [Multiple Pages in React](https://isotropic.co/react-multiple-pages/)
  - [Add Props to React Components](https://www.youtube.com/watch?v=PHaECbrKgs0)
  - [Posting Data with React](https://youtu.be/9KaMsGSxGno?si=lIGatPXmjXOfu1W2)

## 1.1: Create Backend Items

1. Create Directory for backend (flask-server)
   1. `mkdir backend`
   2. Can be any name you want
2. Create the main python file (server.py) in backend directory
   1. `cd backend`
   2. `touch server.py`

## 1.2: Create Frontend Items

- Add React in main project folder
  - `npx create-react-app frontend`
  - The "frontend" is the name of the directory that React will be placed in
  - Can be any name you want
- Remove Git
  - `cd` into frontend directory
  - Remove git ignore: `rm -rf .gitignore`
  - Remove git: `rm -rf .git`
  - Confirm removal with: `ls -a`
  - git automatically add with the React creation
  - Possibly interferes with the primary project git (have to research)
- Add React Router
  - `cd` into frontend directory
  - CMD: `npm install react-router-dom`
  - Allows for multiple "pages" within react
- Add Bootstrap:
  - `cd` into Frontend directory
  - CMD: `npm add bootstrap react-bootstrap`
  - Add Bootstrap and React-Bootstrap
  - adds both at once

## 1.3: Virtual Environment & Packages

- Create Virtual Environment in main project folder
  - `python3 -m venv venv`
- Start Environment
  - **Mac**: `source venv/bin/activate`
  - **Windows**: `.\venv\Scripts\activate`
- Install Flask & Flask Libraries
  - Install while in the virtual environment
  - `pip install Flask`
  - `pip install Flask-RESTful`
  - `pip install -U flask-cors`
- Can check which python packages are installed in virtual environment
  - `pip list`
- Can export installed packages to a text file
  - `pip freeze > requirements.txt`
- How to stop environment: `deactivate`

# 2: Running the Project

- Step 1) Open a terminal in the main directory
- Step 2) Start the virtual environment
  - **Mac**: `source venv/bin/activate`
  - **Windows**: `.\venv\Scripts\activate`
- Step 3) Start the Flask Server
  - Change working directory to the backend
  - `cd backend`
  - Start Server: `python3 server.py`
- Step 4) Open a second terminal
- Step 5) Start the React in the second terminal
  - `cd` into the client directory
  - Start React: `npm start`

# 3: Backend Documentation

## 2.1: Flask API for Demo

- Code:
```

```
- Done in flask-server > `server.py`
- Data is just demo code, showing API working
- Run server in the environment to test:
  - `python3 server.py`
  - Should see the json data if working

# 4: Frontend Documentation

## 4.1: Setup React

- Remove unnecessary files in client folder
  - src > `App.test.js`
  - src > `index.css`
  - src > `logo.svg`
- Remove import line from `index.js` file
  - Line to remove: `import './index.css';`
- Add Proxy
  - Open file frontend > `package.json`
  - Add line after "private": true
  - Line to add: `"proxy": "http://127.0.0.1:5000",`
    - My Mac was running the local Flask server at this address
    - The tutorial was running at: `"proxy": "http://localhost:5000",`
    - When you run the Flask server with `python3 server.py`, it will tell you where the server is running, use whatever it is

## 4.2: How to use Bootstrap in React

- Have to add the bootstrap import to the React page:
  - `import "bootstrap/dist/css/bootstrap.min.css;"`
- Have to import specific type of component:
  - Example: Button import: `import Button from "react-bootstrap/Button";`

### 4.2.1: Alternative Import Method

- This method imports the entire Bootstrap library at once
- It significantly increases the amount of code sent to the client
- `import { button } from 'react-bootstrap`

## 4.3: Frontend Code for Demo

- Open client > src > `App.js`
- Remove all of the code
- Replace with:
```


```
