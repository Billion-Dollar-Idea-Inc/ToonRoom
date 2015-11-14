'''example on how to pull data from a youtube url'''
import pafy

class VideoParser:
		def __init__(self):
				self.video = ""

		def set_url(self, url):
				try:
					self.video = pafy.new(url)
					if self.video.category != "music":
						print "not a good url"
					else:
						self.video = ""
				except:
					print "not a good url"

		def get_title(self):
				return self.video.title

		def get_length(self):
				return self.video.length
