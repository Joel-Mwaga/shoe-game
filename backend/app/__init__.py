from flask import Flask
from flask_cors import CORS
from .models import db
from .routes import routes

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shoes.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    app.register_blueprint(routes)
    CORS(app)

    with app.app_context():
        db.create_all()

    return app