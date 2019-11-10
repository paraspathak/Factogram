
from textblob import TextBlob
from flask import json, Flask, request
import os

app = Flask(__name__)

@app.route("/", methods = ['POST'])
def process_string():
    sentence = request.get_data().decode('utf8')
    sentence = json.loads(sentence)
    print("original sentence is:", sentence )
    result = TextBlob(sentence)
    answer =  result.sentiment
    print(result,answer, type(sentence))
    return json.dumps({
        'polarity':answer[0],
        'subjectivity':answer[1]    #Close to 1 is subjective 0 is objective
    })

if __name__ == "__main__":
    # print(process_string("Textblob is amazingly simple to use. What great fun!"))
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'filesystem'
    app.debug = True
    app.run(port= 8080)
    