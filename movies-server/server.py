from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

with open("data/movies.json") as mv:
    movies = json.load(mv)
    print("\n Movies Loaded \n")

@app.route("/api/movies")
def get_movies():
    return jsonify(movies)

@app.route("/images/<filename>")
def get_image(filename):
    return send_from_directory("data/images", filename)

if __name__ == "__main__":
    app.run(debug=True, port=5000)