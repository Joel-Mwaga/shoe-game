# Shoegame Frontend Documentation

## Overview
Shoegame is a full-stack e-commerce application focused exclusively on shoes, designed to provide a seamless shopping experience. The frontend is built using React and styled to resemble the Netflix interface, featuring a visually appealing layout with a background image.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/shoegame.git
   ```
2. Navigate to the frontend directory:
   ```
   cd Shoegame/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

## Folder Structure
- `public/`: Contains the static files, including `index.html`.
- `src/`: Contains the React components and styles.
  - `components/`: Contains reusable components like Navbar, ShoeList, ShoeDetail, and Cart.
  - `styles/`: Contains CSS files for styling the application.

## Components
- **Navbar**: Provides navigation links to different sections of the application.
- **ShoeList**: Fetches and displays a list of shoes from the backend API.
- **ShoeDetail**: Displays detailed information about a selected shoe.
- **Cart**: Manages the user's shopping cart, allowing them to add and remove items.

## Styling
The application is styled using CSS to achieve a Netflix-like design, with a focus on user experience and visual appeal.

## API Integration
The frontend communicates with the Flask backend API to fetch shoe data and manage the shopping cart. Ensure the backend is running to interact with the frontend.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.