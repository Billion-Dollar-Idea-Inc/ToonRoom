'''example on how to pull data from a youtube url'''

import pafy

url = "https://www.youtube.com/watch?v=cyMHZVT91Dw"
video = pafy.new(url)

print video.title
print video.rating
print video.length
