import os
from flask import Flask, flash, jsonify, request, send_file, abort, render_template, redirect, send_from_directory, session, url_for, make_response



app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
context = ('fullchain.pem', 'privkey.pem')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'assets/logofundo.ico', mimetype='image/vnd.microsoft.icon')

app.run(host='0.0.0.0', port='443', ssl_context= context, debug=True)
