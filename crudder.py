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
			for room in range(0, len(fetch)):
					if room[1] < 10:
						add_to_room(room[1])
						return room[0]
			return create_room(rooms)

		def add_to_room(self, room):
			pass

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

c = Crudder()
c.get_room()
