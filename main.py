from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def TuneRoomHome():
    return render_template('index.html')

@app.route('/chat')
def TuneRoomChat():
		return render_template('chat.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')# makes server publicly available
