# 0: Setup Items

- [Link to Video Tutorial](https://youtu.be/7LNl2JlZKHA?si=BjXOvCrcIqu6VkwW)

# 1: Flask Backend

1. Create Directory for backend (flask-server)
   1. `mkdir backend`
   2. Can be any name you want
2. Create the main python file (server.py) in backend directory
   1. `cd backend`
   2. `touch server.py`

# 2: React Frontend

- Add React in main project folder
  - `npx create-react-app client`
  - The "client" is the name of the directory that React will be placed in
  - Can be any name you want

# 3: Packages

- Create Virtual Environment in main project folder
  - `python3 -m venv venv`
- Start Environment
  - Mac: `source venv/bin/activate`
  - Windows: `.\venv\Scripts\activate`
- Install Flask
  - Install while in the virtual environment
  - `pip install Flask`
  - `pip install Flask-RESTful`
- Can check which python packages are installed in virtual environment
  - `pip list`
- Can export installed packages to a text file
  - `pip freeze > requirements.txt`

# 4: Setup Backend API

- Code:
```
from flask import Flask,jsonify,request

app = Flask(__name__)

# Home Route
@app.route("/spider", methods=['GET'])
def home():
  if(request.method == 'GET'):
    data = {
      "Name": "Miles Morales",
      "Age": "17",
      "HeroName": "Spider-Man"
    }
    return jsonify(data)
    
if __name__ == '__main__':
  app.run(debug=True)
```
- Done in flask-server > `server.py`
- Data is just demo code, showing API working
- Run server in the environment to test:
  - `python3 server.py`
  - Should see the json data if working

# 5: Setup Frontend React

- Remove unnecessary files in client folder
  - src > `App.test.js`
  - src > `index.css`
  - src > `logo.svg`
- Remove import line from `index.js` file
  - Line to remove: `import './index.css';`
- Add Proxy
  - Open file client > `package.json`
  - Add line after "private": true
  - Line to add: `"proxy": "http://127.0.0.1:5000",`
    - My Mac was running the local Flask server at this address
    - The tutorial was running at: `"proxy": "http://localhost:5000",`
    - When you run the Flask server with `python3 server.py`, it will tell you where the server is running, use whatever it is

# 6: Add Frontend code

- Open client > src > `App.js`
- Remove all of the code
- Replace with:
```
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/spider").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  return (
    <div>
      <h1>JSON Results:</h1>
      <p>Name: {data.Name}</p>
      <p>Age: {data.Age}</p>
      <p>Hero Name: {data.HeroName}</p>
    </div>
  );
}
export default App;

```

# 7: Running the Project

- Step 1) Open a terminal in the main directory
- Step 2) Start the virtual environment
  - Mac: `source venv/bin/activate`
  - Windows: `.\venv\Scripts\activate`
- Step 3) Start the Flask Server
  - Change working directory to the backend
  - `cd backend`
  - Start Server: `python3 server.py`
- Step 4) Open a second terminal
- Step 5) Start the React in the second terminal
  - `cd` into the client directory
  - Start React: `npm start`