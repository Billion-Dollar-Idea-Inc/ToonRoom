from flask import Flask

app = Flask(__name__)

@app.route('/')
def TuneRoomHome():
    return 'WELCOME OT TUNEROOM!'

if __name__ == '__main__':
    app.run()