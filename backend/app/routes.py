from flask import Blueprint, request, jsonify
from .models import Shoe, db
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import User

routes = Blueprint('routes', __name__)

@routes.route('/shoes', methods=['GET'])
def get_shoes():
    category = request.args.get('category')
    query = Shoe.query
    if category == 'new':
        shoes = query.filter_by(is_new=True).all()
    elif category == 'popular':
        shoes = query.filter_by(is_popular=True).all()
    else:
        shoes = query.all()
    return jsonify([shoe.to_dict() for shoe in shoes]), 200

@routes.route('/shoes', methods=['POST'])
def create_shoe():
    data = request.get_json()
    new_shoe = Shoe(
        name=data['name'],
        brand=data['brand'],
        price=data['price'],
        image_url=data.get('imageUrl'),
        is_new=data.get('isNew', False),
        is_popular=data.get('isPopular', False)
    )
    db.session.add(new_shoe)
    db.session.commit()
    return jsonify(new_shoe.to_dict()), 201

@routes.route('/shoes/<int:shoe_id>', methods=['GET'])
def get_shoe(shoe_id):
    shoe = Shoe.query.get_or_404(shoe_id)
    return jsonify(shoe.to_dict()), 200

@routes.route('/shoes/<int:shoe_id>', methods=['PUT'])
def update_shoe(shoe_id):
    data = request.get_json()
    shoe = Shoe.query.get_or_404(shoe_id)
    shoe.name = data['name']
    shoe.brand = data['brand']
    shoe.price = data['price']
    shoe.image_url = data.get('imageUrl', shoe.image_url)
    shoe.is_new = data.get('isNew', shoe.is_new)
    shoe.is_popular = data.get('isPopular', shoe.is_popular)
    db.session.commit()
    return jsonify(shoe.to_dict()), 200

@routes.route('/shoes/<int:shoe_id>', methods=['DELETE'])
def delete_shoe(shoe_id):
    shoe = Shoe.query.get_or_404(shoe_id)
    db.session.delete(shoe)
    db.session.commit()
    return jsonify({'message': 'Shoe deleted successfully'}), 204

@routes.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'error': 'Username already exists'}), 400
    hashed_pw = generate_password_hash(data['password'])
    user = User(username=data['username'], email=data['email'], password=hashed_pw)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User created'}), 201

@routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful', 'user': user.username}), 200
    return jsonify({'error': 'Invalid credentials'}), 401