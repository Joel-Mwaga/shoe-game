from flask import Blueprint, request, jsonify
from .models import Shoe, db

routes = Blueprint('routes', __name__)

@routes.route('/shoes', methods=['GET'])
def get_shoes():
    shoes = Shoe.query.all()
    return jsonify([shoe.to_dict() for shoe in shoes]), 200

@routes.route('/shoes', methods=['POST'])
def create_shoe():
    data = request.get_json()
    new_shoe = Shoe(name=data['name'], brand=data['brand'], price=data['price'])
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
    db.session.commit()
    return jsonify(shoe.to_dict()), 200

@routes.route('/shoes/<int:shoe_id>', methods=['DELETE'])
def delete_shoe(shoe_id):
    shoe = Shoe.query.get_or_404(shoe_id)
    db.session.delete(shoe)
    db.session.commit()
    return jsonify({'message': 'Shoe deleted successfully'}), 204