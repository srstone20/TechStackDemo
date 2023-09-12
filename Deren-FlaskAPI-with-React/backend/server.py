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