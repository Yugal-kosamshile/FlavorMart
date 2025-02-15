# FlavorMart (React + Vite)   

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Overview

This React project is built using Vite and includes the following features:

- **React Router** for navigation
- **Redux** for state management
- **Bootstrap** for styling
- **Authentication Handling**
- **Dynamic Navbar with User Authentication**
- **Product Categories and Shopping Cart**
- **Order Management**

## Dependencies

The project uses the following dependencies:

```json
"react": "^18.x",
"react-dom": "^18.x",
"react-router-dom": "^6.x",
"react-redux": "^8.x",
"redux": "^4.x",
"@reduxjs/toolkit": "^1.x",
"bootstrap": "^5.x",
"react-slick": "^x.x.x",
"slick-carousel": "^x.x.x",
"@fontawesome/fontawesome-free": "^x.x.x",
"@vitejs/plugin-react": "^x.x.x"
```

## Installed Commands

The following commands were used to set up the project:

```sh
npm install
npm install bootstrap
npm install @reduxjs/toolkit react-redux
npm install react-router-dom
npm install react-slick slick-carousel
npm install @fontawesome/fontawesome-free
```

## App Structure

The application consists of multiple components for different functionalities:

- `Home.jsx` - Home page
- `Veg.jsx` - Veg category
- `NonVeg.jsx` - Non-Veg category
- `Dairy.jsx` - Dairy products
- `Cakes.jsx` - Cakes category
- `Cart.jsx` - Shopping cart
- `Orders.jsx` - Order history
- `AboutUs.jsx` - About Us page
- `ContactUs.jsx` - Contact Us page
- `SignIn.jsx` - User authentication page
- `NotFound.jsx` - 404 error page
- `MyFooter.jsx` - Footer component

## Redux State Management

The application uses Redux for state management. The key features include:

- Managing the shopping cart state
- Handling user authentication
- Dispatching logout actions

## Authentication and Navbar Behavior

- If the user is authenticated, their username is displayed in the navbar with a dropdown for logout.
- If not authenticated, a **Sign In** button is displayed.
- The navbar toggles on mobile screens using Bootstrap's `navbar-toggler`.
- Shopping cart displays the total number of items dynamically.

## Running the Project

To run the project locally:

```sh
 npm install
 npm run dev
```

## Live Link

The project is deployed on Vercel: [FlavorMart](https://flavormart.vercel.app)

## Conclusion

This project is a complete React application with routing, authentication, and shopping cart functionality, all built using Vite for fast development.

