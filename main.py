from flask import *
<<<<<<< HEAD
import random
=======
>>>>>>> 09bb85a4b1acbc117bd5de96767f2b7064300d12

app = Flask(__name__)

@app.route('/')
<<<<<<< HEAD
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
=======
def TuneRoomHome():
	return render_template('index.html')

@app.route('/chat')
def TuneRoomChat():
	return render_template('chat.html')
>>>>>>> 09bb85a4b1acbc117bd5de96767f2b7064300d12

if __name__ == '__main__':
	app.debug = True
	app.run(host='0.0.0.0')# makes server publicly available
