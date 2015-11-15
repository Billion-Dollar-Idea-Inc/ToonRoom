from flask import *
import random


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/join', methods=['POST'])
def join():
	room_num = random.randint(1, 1000000)
	# Redirect to /chat/<room>
	# DB find
	return redirect(url_for('chat', room=room_num))

@app.route('/chat/<room>', methods =['GET', 'POST'])
def chat(room):
	# Room validation code
	return render_template('chat.html', room_num=room)

def TuneRoomHome():
	return render_template('index.html')

@app.route('/chat')
def TuneRoomChat():
	return render_template('chat.html')

if __name__ == '__main__':
	app.debug = True
	app.run(host='0.0.0.0')# makes server publicly available
