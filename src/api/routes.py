"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Error email y password son requeridos"})

    user = User.query.filter_by(email=email, password=password).first()

    if not user:
            return jsonify({"message": "Error, datos incorrectos"})
    
    token = create_access_token(identity=user.id)

    return jsonify({"token": token})


@api.route('/payment', methods=['POST'])
@jwt_required()
def pago():
    data = request.json
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    print(user_id)

    return jsonify("Pago exitoso")
