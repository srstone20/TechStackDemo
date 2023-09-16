from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# Creates the app and cors headers
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Running list of variables
# Reset when the app restarts
list_of_users_entered = dict()
number_of_users = 0
user_input = {
    "User": ""
}

# Home Route
@app.route("/home")
def home():
    welcome_message = {
        "Greeting": "Hello There",
        "Message": "Welcome to our Project from Flask API"
    }
    return jsonify(welcome_message)

# Webpage View 1
@app.route("/view1", methods=['GET', 'POST'])
@cross_origin()
def viewOne():
    global number_of_users
    number_of_users += 1
    if request.method == "POST":
        data = request.get_json()
        keyStr = str(number_of_users)
        list_of_users_entered[keyStr] = data.get('name')
        user_input["User"] = data.get('name')
    
    print(list_of_users_entered)
    return jsonify(user_input)

# Webpage View 2
@app.route("/view2", methods=['GET'])
def viewTwo():
    print(list_of_users_entered)
    return jsonify(list_of_users_entered) 

# Reading json Demo
@app.route("/jsondemo", methods=['GET'])
def jsonDemo():
    demo_message = {
        "Greeting": "Hello There",
        "Message": "This is a demonstration of reading json data from Flask",
        "Detail": "These three lines are coming from the Flask server.py file"
    }
    return jsonify(demo_message)

if __name__ == '__main__':
    app.run(debug=True)