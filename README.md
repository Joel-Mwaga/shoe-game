# Shoegame Project

## Overview
Shoegame is a full-stack e-commerce application designed to provide users with a seamless shopping experience focused exclusively on shoes. The application features a modern interface inspired by Netflix, allowing users to browse, view details, and purchase shoes effortlessly.

## Project Structure
The project is divided into two main parts: the backend and the frontend.

### Backend
The backend is built using Flask and provides a RESTful API for the application. It includes the following components:
- **app**: Contains the main application logic, including models, routes, and utility functions.
- **requirements.txt**: Lists the dependencies required for the backend.
- **README.md**: Documentation for the backend setup and API usage.

### Frontend
The frontend is built using React and provides a dynamic user interface. It includes the following components:
- **public**: Contains the main HTML file for the React application.
- **src**: Contains the main application code, including components for navigation, shoe listing, shoe details, and the shopping cart.
- **package.json**: Configuration file for npm, listing dependencies and scripts.
- **README.md**: Documentation for the frontend setup and usage.

## Setup Instructions

### Backend Setup
1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```
   flask run
   ```

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## Usage
- Users can browse through a list of shoes, view detailed information, and add items to their shopping cart.
- The application supports full CRUD operations for managing shoe listings and user interactions.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.