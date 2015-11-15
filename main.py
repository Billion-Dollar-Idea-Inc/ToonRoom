from contextlib import closing
from flask import *
import random
import sqlite3


DATABASE = '/schema.db'

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/join', methods=['POST'])
def join():
	# Redirect to /chat/<room>

	# check database for open spot
	if open:
#room_num = the spot of the open one
		pass
	else:
		while True:
			room_num = random.randint(10000, 99999)
#			if room_num has not been used:
			break
	return redirect(url_for('chat', room=room_num))

@app.route('/chat/<room>', methods =['GET', 'POST'])
def chat(room):
	# Room validation code
	return render_template('chat.html', room_num=room)

def init_db():
		with closing(connect_db()) as db:
				with app.open_resource('schema.sql', mode='r') as f:
						db.cursor().executescript(f.read())
				db.commit()

def connect_db():
		return sqlite3.connect(DATABASE)


if __name__ == '__main__':
	init_db()
	app.debug = True
	app.run(host='0.0.0.0')# makes server publicly available
