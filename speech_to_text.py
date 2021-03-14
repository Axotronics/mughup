#Scripts_windows:
# $pip install SpeechRecognition
# $pip install pipwin
# $pipwin install pyaudio


# Pyaudio is extremely necessary in order to run this code.



#Imports
import speech_recognition as sr

r = sr.Recognizer()

with sr.Microphone() as source:
  print("Say something")
  
  audio = r.listen(source)
  
  
# Use sphinx recognizer
try:
  print("Sphinx speech recognizer:", r.sphinx_recognize(audio))
  
except sr.UnknownValueError:
  print("Sphinx could not understand audio")
except sr.RequestError as e:
  print("Sphinx error; {0}".format(e))

  
#Use google speech_recognition

try:
  print("Google Speech recognizer:", r.google_recognize(audio))
  
  
except sr.UnknownValueError:
  print("Google could not understand audio")
except sr.RequestError as e:
  print("Google error; {0}".format(e))  
  
  
  
  
  
