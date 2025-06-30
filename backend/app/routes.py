from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from .models import db, Shoe, User

routes = Blueprint('routes', __name__)

### ---- Shoe Routes ---- ###

@routes.route('/shoes', methods=['GET'])
def get_shoes():
    category = request.args.get('category')
    if category == 'new':
        shoes = Shoe.query.filter_by(is_new=True).all()
    elif category == 'popular':
        shoes = Shoe.query.filter_by(is_popular=True).all()
    else:
        shoes = Shoe.query.all()
    return jsonify([shoe.to_dict() for shoe in shoes]), 200


@routes.route('/shoes', methods=['POST'])
def create_shoe():
    data = request.get_json()
    new_shoe = Shoe(
        name=data['name'],
        brand=data['brand'],
        price=data['price'],
        image_url=data['image_url'],
        is_new=data.get('is_new', False),
        is_popular=data.get('is_popular', False)
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
    shoe.image_url = data.get('image_url', shoe.image_url)
    shoe.is_new = data.get('is_new', shoe.is_new)
    shoe.is_popular = data.get('is_popular', shoe.is_popular)
    db.session.commit()
    return jsonify(shoe.to_dict()), 200


@routes.route('/shoes/<int:shoe_id>', methods=['DELETE'])
def delete_shoe(shoe_id):
    shoe = Shoe.query.get_or_404(shoe_id)
    db.session.delete(shoe)
    db.session.commit()
    return jsonify({'message': 'Shoe deleted'}), 204


### ---- Auth Routes ---- ###

@routes.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'error': 'Username already exists'}), 400
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400
    try:
        hashed_pw = generate_password_hash(data['password'])
        user = User(username=data['username'], email=data['email'], password=hashed_pw)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User created'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': 'Server error: ' + str(e)}), 500


@routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful', 'user': user.username}), 200
    return jsonify({'error': 'Invalid credentials'}), 401

