# Tomato - MERN Stack Food Delivery Web Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
  - [Front End](#front-end)
  - [Back End](#back-end)
  - [Admin Panel](#admin-panel)
  - [Authentication](#authentication)
  - [Database](#database)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
  - [User View](#user-view)
  - [Admin View](#admin-view)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgement](#acknowledgement)
- [Contact](#contact)

## Introduction

Tomato is a full-fledged food delivery web application built using the MERN stack (MongoDB, Express, React, and Node.js). This project includes a fully responsive front end, a robust back end, and an admin panel to manage food items and orders. It supports user authentication, shopping cart functionality, and order placement with Stripe integration for payments.

## Features

### Front End

- **Menu Section**: Browse food items categorized by type. Each item has an add-to-cart option.
- **Responsive Design**: The web application is fully responsive and works seamlessly across various devices.
- **User Authentication**: Users can sign up and log in to their accounts. Authentication is managed using JWT (JSON Web Tokens).
- **Profile Management**: Users can view and update their profiles.
- **Cart Functionality**: Users can add items to their cart, view the cart, and proceed to checkout.
- **Order Placement**: Users can place orders from their cart and complete payments using Stripe.

### Back End

- **Express Server**: Handles API requests and communicates with the MongoDB database.
- **User Authentication**: Implements secure user authentication using JWT.
- **Data Management**: CRUD operations for managing food items and orders.

### Admin Panel

- **Add Items**: Admins can add new food items to the menu.
- **List Items**: View a list of all available food items.
- **Manage Orders**: View and update orders. Changes in order status are automatically reflected in the user interface.

### Authentication

- **Sign Up/Login**: Users can create an account or log in to an existing account.
- **JWT Authentication**: Secure authentication using JSON Web Tokens.

### Database

- **MongoDB**: Stores user information, food items, and orders.

## Technologies Used

- **Front End**: React.js, HTML, CSS, JavaScript
- **Back End**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Processing**: Stripe
- **State Management**: React Hooks, Context API
- **Styling**: CSS, responsive design

## Installation

1. **Clone the repository:**
   ```sh
   git clone git@github.com:Pranab239/Tomato.git
   cd Tomato
   ```

2. **Install dependencies:**
   ```sh
   npm install
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Run the application:**
   ```sh
   npm run dev
   ```

## Usage

1. **Start the server:**
   ```sh
   npm run server
   ```

2. **Start the client:**
   ```sh
   cd client
   npm start
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:4000`

## API Endpoints

### Authentication
- **POST** `/api/user/register`: Register a new user
- **POST** `/api/user/login`: Login an existing user

### Food Items
- **GET** `/api/food/list`: Get a list of all food items
- **POST** `/api/food/add`: Add a new food item (Admin only)

### Orders
- **GET** `/api/order/list`: Get a list of all orders (Admin only)
- **POST** `/api/order/place`: Place a new order

# Screenshots
## User-View
### 1. Home Page:
![Tomato_Homepage](https://github.com/user-attachments/assets/63b56c88-0d04-428e-bec9-478e1ee23683)

### 2. Menu Page
![Tomato_Menu](https://github.com/user-attachments/assets/5af84505-77f7-459a-9cf2-134e4a8c7be2)

### 3. Selection Feature:
![Tomato_SelectFeature](https://github.com/user-attachments/assets/72ec6b7d-ae04-4953-94b2-18941fa52d6a)

### 4. Cart Page
![Tomato_cartPage](https://github.com/user-attachments/assets/66465b3b-09d4-4c7a-8b4a-87d35eb94e3c)

### 5. Delivery Page:
![Tomato_Delivery](https://github.com/user-attachments/assets/5f2cbe78-5ea8-4c3d-ab02-9e3521e98eea)

### 6. Payment Page:
![Tomato_PaymentPage](https://github.com/user-attachments/assets/505c6c29-2833-4f0f-a731-a383d7a55e8f)

## Admin-View
### 1. Add Item Panel:
![Screenshot from 2024-07-29 17-22-28](https://github.com/user-attachments/assets/77552270-30f3-44b7-bb08-61cc8f7fc0e9)

### 2. List Item Panel:
![Screenshot from 2024-07-29 17-23-08](https://github.com/user-attachments/assets/5cb8ee09-aade-4e51-91b7-4976fbb449f5)

### 3. Orders Panel:
![Screenshot from 2024-07-29 17-23-15](https://github.com/user-attachments/assets/e6dd70fc-9eef-4c19-a214-ca5ddf03642e)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, improvements, or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgement
Thanks for the superb video from **GreatStack** .
link: https://www.youtube.com/watch?v=DBMPXJJfQEA

## Contact

For any inquiries or questions, please contact:
- **Name**: Pranab Paul
- **Email**: pranab4752@gmail.com
