"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    name = data.get('name')

    if not email or not password or not name:
         return jsonify({"message": "Todos los datos son requeridos"})
    
    new_user = User(email=email, password=password, name=name)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(name=name, email=email), 200


@api.route('/login', methods=['POST'])
def login():
    data = request.json
    name = data.get('name', None)
    password = data.get('password', None)

    if not name or not password:
        return jsonify({"message": "Nombre y contraseña son requeridos"}), 400

    user = User.query.filter_by(name=name, password=password).first()

    if user is None:
        return jsonify({"message": "Credenciales incorrectas"}), 401
    
    token = create_access_token(identity=user.name)

    return jsonify({"token": token, "user_name": user.name}), 200


@api.route('/privatearea', methods=['GET'])
@jwt_required()
def private():
    user_name = get_jwt_identity()
    user = User.query.filter_by(name=user_name).first()

    if not user:
        return jsonify({"message": "Error, no existe el usuario"})

    return jsonify(user.serialize())


@api.route('/user', methods=['GET'])
def get_user():
    users = User.query.all() # Devuelve un array de objetos (users)
    data = []

    for user in users:
         data.append(user.serialize())

    return jsonify(data)


