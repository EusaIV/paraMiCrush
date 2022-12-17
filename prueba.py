import pytube

video_url = input('ingresa la url : ')
youtube = pytube.YouTube(video_url)
video = youtube.streams.first()
video.download(r'C:\Users\eusa5\Videos')