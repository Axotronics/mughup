#Install pytesseract by the following ways:
# If on Windows: $ pip install pytesseract
#On mac: $ brew install tesseract
# On Linux: sudo apt-get install tesseract-ocr

#import libraries
from PIL import Image
import pytesseract
import numpy as np

#Code:
filename = 'image_2.jpg'
img2 = np.array(Image.open(filename))
text = pytesseract.image_to_string(img2)

print(text)

