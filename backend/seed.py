from app import create_app, db
from app.models import Shoe, User

app = create_app()
with app.app_context():
    db.drop_all()
    db.create_all()
    user = User(username="testuser", email="test@example.com")
    shoe1 = Shoe(name="Air Max", brand="Nike", price=120.0)
    shoe2 = Shoe(name="Yeezy Boost", brand="Adidas", price=250.0)
    db.session.add_all([user, shoe1, shoe2])
    db.session.commit()
    print("Seeded database!")