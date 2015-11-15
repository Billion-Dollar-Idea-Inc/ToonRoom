from contextlib import closing
from flask import *
import crudder
import json
import random
import sqlite3

crud = crudder.Crudder()
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/join', methods=['POST'])
def join():
	room_num = crud.get_room()
	return redirect(url_for('chat', room=room_num))

@app.route('/chat/<room>', methods =['GET', 'POST'])
def chat(room):
	# Room validation code
	return render_template('chat.html', room_num=room)

@app.route('/queue/<room>')
def queue(room):
	urls = crud.get_queue(room)
	urls = json.dumps(urls)
	return urls

@app.route('/addsong/<room>/<song>')
def addsong(room, song):
	print room, song
	crud.add_song(room, song)
	return "successful"


if __name__ == '__main__':
#	app.debug = True
	app.run(host='0.0.0.0')# makes server publicly available
