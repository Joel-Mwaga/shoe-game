def validate_email(email):
    import re
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

def validate_shoe_data(data):
    required_fields = ['name', 'brand', 'size', 'price']
    for field in required_fields:
        if field not in data:
            return False
    return True

# Example utility function (not required for basic CRUD)
def format_price(price):
    return "${:.2f}".format(price)