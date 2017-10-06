from flask import Flask
import requests

app = Flask(__name__)


@app.route('/', methods=["GET"])
def index():
    return 'Veio do python'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)
