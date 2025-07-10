from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data.get('text', '')

    emotions = ["Happy", "Sad", "Angry", "Anxious", "Calm", "Excited"]
    return jsonify({
        "emotion": random.choice(emotions),
        "confidence": round(random.uniform(0.7, 0.99), 2)
    })

if __name__ == '__main__':
    app.run(debug=True)
