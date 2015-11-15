from contextlib import closing
from flask import *
import crudder
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


if __name__ == '__main__':
	#app.debug = True
	app.run(host='0.0.0.0')# makes server publicly available
