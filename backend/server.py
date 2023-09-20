from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pymongo,certifi

# Creates the app and cors headers
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Connect to MongoDB
connection = "mongodb+srv://user:UEowIaMmCIrqxvwH@cluster0.1qnf6y5.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(connection, tlsCAFile=certifi.where())
db = client["TechStackDemo"]  
collection = db["users"]

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
    if request.method == "POST":
        data = request.get_json()

        # Count the number of documents in the collection
        num_documents = collection.count_documents({})
        
        # Generate the next user_id by adding 1 to the count
        user_id = num_documents + 1

        user = {
            "user_id": user_id,
            "name": data.get('name')
        }
        collection.insert_one(user)

    return jsonify({"message": "User added successfully"})


# Webpage View 2
@app.route("/view2", methods=['GET'])
def viewTwo():
    users = list(collection.find({}, {"_id": 0}))
    return jsonify(users)
 

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