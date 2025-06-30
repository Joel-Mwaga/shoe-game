from app import create_app
from app.models import db, Shoe

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()
    shoes = [
        Shoe(
            name="Air Jordan 1",
            brand="Nike",
            price=120,
            image_url="https://www.shoegame.co.ke/uploadshoes/as3243234243234267.png",
            is_new=True,
            is_popular=True
        ),
        Shoe(
            name="Adidas Samba OG",
            brand="Adidas",
            price=90,
            image_url="https://www.shoegame.co.ke/uploadshoes/samba3746746578654875.png",
            is_new=False,
            is_popular=True
        ),
        Shoe(
            name="Baseball shoes",
            brand="Reebok",
            price=80,
            image_url="https://m.media-amazon.com/images/I/71ZIhiNlejL._AC_UL320_.jpg",
            is_new=True,
            is_popular=False
        ),
        Shoe(
            name="All star High tops",
            brand="Converse",
            price=75,
            image_url="https://m.media-amazon.com/images/I/71B0udp-6LL._AC_UL320_.jpg",
            is_new=True,
            is_popular=True
        ),
        Shoe(
            name="Puma RS-X",
            brand="Puma",
            price=100,
            image_url="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/373108/01/sv01/fnd/PNA/fmt/png",
            is_new=False,
            is_popular=True
        ),
    ]
    db.session.bulk_save_objects(shoes)
    db.session.commit()
    print("✅ Database seeded with real shoes!")
