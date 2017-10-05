from flask import Flask
import requests

app = Flask(__name__)


@app.route('/', methods=["GET"])
def index():
    response = requests.get('http://nodeapp:3000')
    return 'O node me disse para dizer isto: ' + str(response.content)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)
