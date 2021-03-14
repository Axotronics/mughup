from PIL import Image
import pytesseract
import numpy as np
from rake_nltk import Rake


def memorize():
    r = Rake()
    filename = 'testocr.png'
    img = np.array(Image.open(filename))
    text = pytesseract.image_to_string(img)
    print(text)
    print(r.extract_keywords_from_text(text),

r.get_ranked_phrases(),

r.get_ranked_phrases_with_scores())











memorize()
