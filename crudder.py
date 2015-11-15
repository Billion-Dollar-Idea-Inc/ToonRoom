import random
import sqlite3

class Crudder():
		def __init__(self):
			self.filepath = "schema.db"
			self.conn = sqlite3.connect(self.filepath)
			self.conn.text_factory = str
			self.c = self.conn.cursor()

		def get_room(self):
			self.c.execute("SELECT * FROM rooms")
			fetch = self.c.fetchall()
			rooms = []
			for room in range(0, len(fetch)):
					rooms.append(fetch[room][0])
					if fetch[room][1] < 3:
						self.add_to_room(fetch[room])
						return fetch[room][0]
			return create_room(rooms)

		def add_to_room(self, room):
			self.c.execute("UPDATE rooms SET users={num} WHERE number={roomnum}".format(num=room[1]+1, roomnum=room[0]))


		def create_room(self, rooms):
			while True:
				num = random.randint(10000, 99999)
				good = True
				for x in rooms:
					if num == rooms[0]:
						good = False
						break
				if good:
					break
			self.c.execute("INSERT INTO rooms VALUES({room_num}, 1)".format(room_num = num))
