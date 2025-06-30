from app import create_app
from app.models import db, Shoe

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()
    shoes = [
        Shoe(
            name="Air Max",
            brand="Nike",
            price=120,
            image_url="../frontend/src/images/air-max.jpg",
            is_new=True,
            is_popular=True
        ),
        Shoe(
            name="Superstar",
            brand="Adidas",
            price=90,
            image_url="https://assets.adidas.com/images/w_600,f_auto,q_auto/6e8e6e8e6e8e6e8e6e8e6e8e6e8e6e8e_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
            is_new=False,
            is_popular=True
        ),
        Shoe(
            name="Classic",
            brand="Reebok",
            price=80,
            image_url="https://assets.reebok.com/images/w_600,f_auto,q_auto/6e8e6e8e6e8e6e8e6e8e6e8e6e8e6e8e_9366/Classic_Leather_Shoes_White_49799_01_standard.jpg",
            is_new=True,
            is_popular=False
        ),
    ]
    db.session.bulk_save_objects(shoes)
    db.session.commit()
    print("Database seeded!")