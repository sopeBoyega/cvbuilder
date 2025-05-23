from flask import Flask , jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db) 


#### `CORS` will be changed at deployment ####
CORS(
    app, 
    supports_credentials=True, 
    origins=["*"], ## Will Change this to your frontend URL on deployment
    allow_headers=["*"],
    allow_methods=["*"],
)

from .view import view
from .auth import auth

app.register_blueprint(view)
app.register_blueprint(auth)
