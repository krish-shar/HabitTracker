from flask import Flask, request, jsonify
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)

# /api/home
@app.route("/api/home", methods=["GET"])
def home():
    return jsonify({"message": "Hello World!"})

# run app
if __name__ == "__main__":
    app.run(debug=True, port=8080)
