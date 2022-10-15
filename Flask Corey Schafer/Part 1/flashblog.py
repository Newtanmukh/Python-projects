from flask import Flask
app=Flask(__name__) # creating an instance of flask. __name__ is name of the module. basically this tells flask where to look for static files,etc.

# Routes are what we type into the browser to go to different pages.
# Decorators are way to  add additional functionaloties to existing functions.
# app.route will handle all the backend stuff and allow us to write a function that returns the information that will be shown on the website for the specific route mentioned inside.

@app.route("/")
@app.route("/home")  #for both of these routes it will go to the home page
def hello():
    return "<h1>Hello World!</h1>"

@app.route("/about")
def about():
    return "<h1>About Page!</h1>"

# HOW TO RUN : 
'''
1) set FLASK_APP=flashblog.py
2) $env:FLASK_APP = "flashblog.py"
3) flask run
'''


'''
alternate mode of running this without using the flask run command.


Just add this piece of code to the end and run this as a normal python file.

if __name__ == '__main__':
    app.run(debug=True)

'''