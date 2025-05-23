from flask import Blueprint, jsonify, request
from . import db
from .models import CV, User
import json
from .addons import *
from .auth import get_user_from_cookie

view = Blueprint('view', __name__) 


    
@view.route('/cv/generate', methods=['POST'])
def GenerateCVEndPoint():
    current_user = get_user_from_cookie()
    if current_user is None:
        return jsonify({"error": "User not authenticated"}), 401
    else:
        data = request.get_json()
        questions = data.get('questions')
        if not questions:
            return jsonify({"error": "No questions provided"}), 400
        generatedCv = GenerateCV(questions)
        title = ai.generate(f"Generate the job title for this cv `{generatedCv}`. Return only the short title and nothing else. let it be unique from `{[cv.title for cv in current_user.Cvs]}`")
        theme = ai.generate(f"Generate a theme for this cv `{generatedCv}`. Return only the short theme and nothing else")
        cv = CV(
            title=title,
            content=generatedCv,
            theme=theme,
            tags="",
            user_id=current_user.id,
            is_public=False,
            status='draft',
            is_deleted=False,
            is_favorite=False
        )
        db.session.add(cv)
        db.session.commit()
        return jsonify({**cv.toJson()}), 200
    

@view.route('/cv/questions', methods=['POST'])
def GenerateQuestionsEndPoint():
    if get_user_from_cookie() is None:
        return jsonify({"error": "User not authenticated"}), 401
    else:
        data = request.get_json()
        jobDescription = data.get('jobDescription')
        if not jobDescription:
            return jsonify({"error": "No job description provided"}), 400
        questions = GenerateQuestions(jobDescription)
        return jsonify(questions), 200
    
    
@view.route('/cv/get/<cvid>', methods=['POST'])
def GetCVEndPoint(cvid:str):
    current_user = get_user_from_cookie()
    if current_user is None:
        return jsonify({"error": "User not authenticated"}), 401
    else:
        data = request.get_json()
        if not cvid:
            return jsonify({"error": "No CV ID provided"}), 400
        cv = CV.query.filter_by(id=cvid, user_id=current_user.id).first()
        if cv:
            return jsonify({"cv": cv.content}), 200
        else:
            return jsonify({"error": "CV not found"}), 404
        
        
@view.route('/cv/delete/<cvid>', methods=['POST'])
def DeleteCVEndPoint(cvid:str):
    current_user = get_user_from_cookie()
    if current_user is None:
        return jsonify({"error": "User not authenticated"}), 401
    else:
        data = request.get_json()
        if not cvid:
            return jsonify({"error": "No CV ID provided"}), 400
        cv = CV.query.filter_by(id=cvid, user_id=current_user.id).first()
        if cv:
            db.session.delete(cv)
            db.session.commit()
            return jsonify({"message": "CV deleted successfully"}), 200
        else:
            return jsonify({"error": "CV not found"}), 404
        
        
@view.route('/cv/update/<cvid>', methods=['POST'])
def UpdateCVEndPoint(cvid:str):
    current_user = get_user_from_cookie()
    if current_user is None:
        return jsonify({"error": "User not authenticated"}), 401
    else:
        data = request.get_json()
        if not cvid:
            return jsonify({"error": "No CV ID provided"}), 400
        cv = CV.query.filter_by(id=cvid, user_id=current_user.id).first()
        if cv:
            cv.content = data.get('content', cv.content)
            cv.title = data.get('title', cv.title)
            cv.theme = data.get('theme', cv.theme)
            cv.tags = data.get('tags', cv.tags)
            cv.is_public = data.get('is_public', cv.is_public)
            cv.status = data.get('status', cv.status)
            cv.is_deleted = data.get('is_deleted', cv.is_deleted)
            cv.is_favorite = data.get('is_favorite', cv.is_favorite)
            db.session.commit()
            return jsonify({"message": "CV updated successfully"}), 200
        else:
            return jsonify({"error": "CV not found"}), 404