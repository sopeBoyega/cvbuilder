import uuid
from flask import Blueprint, jsonify, request,make_response
from . import db
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint('auth', __name__,url_prefix='/auth')

def get_user_from_cookie() -> User:
    localID = request.cookies.get('localID')
    if localID:
        user = User.query.filter_by(localID=localID).first()
        if user:
            return user
    return None

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        response = make_response(jsonify({"message": "Login successful", "user": {"username": user.username, "email": user.email}}), 200)
        response.set_cookie('localID', user.localID, httponly=True, secure=True, samesite='Strict')
        return response
    else:
        return make_response(jsonify({"message": "Invalid credentials"}), 401)
    
    
@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    if User.query.filter_by(username=username).first() :
        return jsonify({"message": "Username already exists"}), 409
    if User.query.filter_by(email=email).first() :
        return jsonify({"message": "Email already exists"}), 409
    hashed_password = generate_password_hash(password)#
    localID = str(uuid.uuid4())
    new_user = User(username=username,localID = localID, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    response = make_response(jsonify({"message": "User registered successfully", "user": {"username": new_user.username, "email": new_user.email}}), 201)
    response.set_cookie('localID', new_user.localID, httponly=True, secure=True, samesite='Strict')
    return response


@auth.route('/logout', methods=['POST'])
def logout():
    response = make_response(jsonify({"message": "Logout successful"}), 200)
    response.set_cookie('localID', '', expires=0)
    return response

@auth.route('/user', methods=['GET'])
def get_user():
    user = get_user_from_cookie()
    if user:
        return jsonify({"user": user.toJson()}), 200
    else:
        return jsonify({"message": "User not authenticated"}), 401
