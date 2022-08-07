from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import false
 
#localhost5432 , template_folder='templates', static_folder='static'
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'postgresql://postgres:pokemon123@localhost/final'
db = SQLAlchemy(app)
 
class Data(db.Model):
   __tablename__="data"
   id = db.Column(db.Integer, primary_key = True)
   email_= db.Column(db.String(120), unique = True)
   height_ = db.Column(db.Integer)
   weight_ = db.Column(db.Integer)
   

 
   def __init__(self, email_, height_, weight_):
           self.email_ = email_
           self.height_ = height_
           self.weight_ = weight_

 
 
@app.route("/")
def index():
   return render_template("index.html")
 
@app.route("/thankyou", methods =['POST'])
def thankyou():
   if request.method == 'POST':
       email = request.form["email"]
       height = request.form["height"]
       weight = request.form["weight"]
       print(email, height, weight)
 
       data=Data(email, height, weight)
       
       db.session.add(data)
       db.session.commit()
 
       return render_template("thankyou.html")
 
if __name__ == '__main__':
   app.debug = True
   app.run()