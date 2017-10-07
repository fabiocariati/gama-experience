import re

from flask import Flask, jsonify
import requests
from lxml import html

app = Flask(__name__)


@app.route('/', methods=["GET"])
def index():
    pageContent = requests.get('https://www.alexa.com/topsites').content
    tree = html.fromstring(pageContent)
    sites = list(tree.xpath('//div[contains(@class, "site-listing")]//a[contains(@href, "siteinfo")]/text()'))
    return jsonify(sites=sites)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, threaded=True)
