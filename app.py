import flask
from flask import request, jsonify
import sqlite3
from flask_cors import CORS
app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d


@app.route('/api/v1/', methods=['GET'])
def api_filter():
    query_parameters = request.args

    username = query_parameters.get('username')
    password = query_parameters.get('password')

    query = "SELECT * FROM users WHERE"
    to_filter = []

    if username:
        query += ' username=? AND'
        to_filter.append(username)
    if password:
        query += ' password=? AND'
        to_filter.append(password)

    query = query[:-4] + ';'
    conn = sqlite3.connect('./data.db')

    conn.row_factory = dict_factory
    cur = conn.cursor()
    results = cur.execute(query, to_filter).fetchall()
    conn.close()
    return jsonify(results)


@app.route('/api/v2/', methods=['GET'])
def api_filter2():
    query_parameters = request.args

    username = query_parameters.get('username')
    password = query_parameters.get('password')

    query = 'INSERT INTO USERS (username,password) VALUES (\''
    query += username
    query += '\',\''
    query += password
    query += '\');'
    db = sqlite3.connect('./data.db')
    db.execute(query)
    db.commit()
    return query


app.run()
