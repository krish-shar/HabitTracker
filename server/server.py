from flask import Flask, request, jsonify, Response, Request
from flask_cors import CORS
from camera import VideoCamera
import pymongo

# app instance
app = Flask(__name__)
CORS(app)

# get database instance
uri = "mongodb+srv://1:1@cluster0.1mtdyxs.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(uri)

# /api/home
@app.route("/api/home", methods=["GET"])
def home():
    return jsonify({"message": "Hello World!"})

# api to add user information to database
@app.route("/api/register", methods=["POST"])
def user_method():
    if not request.method == "POST":
        return jsonify({"message": "Invalid Request"})
    name = request.json["name"]
    email = request.json["email"]
    id = request.json["id"]
    user_db = client.get_database("user_db")
    user_collection = user_db.get_collection("user_records")
    if user_collection.find_one({"id": id}):
        return "User already exists", 201
    user_collection.insert_one({"name": name, "email": email, "id": id})
    remove_dupe_users()
    return "Done", 201



# look for duplicate emails in database when user registers and leave only 1
def remove_dupe_users():
    user_db = client.get_database("user_db")
    user_collection = user_db.get_collection("user_records")
    user_list = []
    for user in user_collection.find():
        user_list.append(user)
    for user in user_list:
        if user_list.count(user) > 1:
            user_collection.delete_one(user)



# /video_feed
@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')


# helper method for video_feed
def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')


# run app
if __name__ == "__main__":
    app.run(debug=True, port=8080, threaded=True, use_reloader=False)
