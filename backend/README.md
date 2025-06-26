# Shoegame Backend README

# Shoegame Backend

## Overview
Shoegame is a full-stack e-commerce application focused exclusively on shoes, designed to provide a seamless shopping experience. The backend is built using Flask, providing a RESTful API for the frontend React application.

## Features
- User authentication and management
- CRUD operations for shoes
- Shopping cart functionality
- Responsive design resembling Netflix

## Setup Instructions

### Prerequisites
- Python 3.7 or higher
- pip (Python package installer)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/shoegame.git
   cd shoegame/backend
   ```

2. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

3. Set up the database (if applicable):
   - Configure your database settings in `app/__init__.py`.
   - Run migrations if using a migration tool.

### Running the Application
To run the Flask application, execute:
```
flask run
```
Make sure to set the `FLASK_APP` environment variable to `app`.

### API Usage
- **GET /api/shoes**: Retrieve a list of all shoes.
- **POST /api/shoes**: Create a new shoe entry.
- **GET /api/shoes/<id>**: Retrieve details of a specific shoe.
- **PUT /api/shoes/<id>**: Update a specific shoe entry.
- **DELETE /api/shoes/<id>**: Delete a specific shoe entry.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.