from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserShoe(db.Model):
    __tablename__ = 'user_shoe'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    shoe_id = db.Column(db.Integer, db.ForeignKey('shoe.id'))
    quantity = db.Column(db.Integer, nullable=False, default=1)

    user = db.relationship("User", back_populates="user_shoes")
    shoe = db.relationship("Shoe", back_populates="user_shoes")

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    user_shoes = db.relationship("UserShoe", back_populates="user")

class Shoe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    brand = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    image_url = db.Column(db.String(255))
    is_new = db.Column(db.Boolean, default=False)
    is_popular = db.Column(db.Boolean, default=False)
    user_shoes = db.relationship('UserShoe', back_populates='shoe')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "brand": self.brand,
            "price": self.price,
            "imageUrl": self.image_url,
            "isNew": self.is_new,
            "isPopular": self.is_popular
        }