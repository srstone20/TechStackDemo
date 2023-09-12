from flask import Flask
from markupsafe import escape
from flask import request
from flask import render_template
import sys

port = sys.argv[1]
app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port=port)