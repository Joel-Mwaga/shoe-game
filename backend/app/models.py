from . import db

class UserShoe(db.Model):
    __tablename__ = 'user_shoe'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    shoe_id = db.Column(db.Integer, db.ForeignKey('shoe.id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)

    user = db.relationship("User", back_populates="user_shoes")
    shoe = db.relationship("Shoe", back_populates="user_shoes")

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_shoes = db.relationship("UserShoe", back_populates="user")

class Shoe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    brand = db.Column(db.String(80), nullable=False)
    price = db.Column(db.Float, nullable=False)
    user_shoes = db.relationship("UserShoe", back_populates="shoe")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "brand": self.brand,
            "price": self.price
        }