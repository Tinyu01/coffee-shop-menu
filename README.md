Test Branch
# Coffee Shop Menu Application

A modern Spring Boot application for managing a coffee shop menu with a React frontend.

![Coffee Shop](https://img.shields.io/badge/Coffee%20Shop-Menu-brown) ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-green) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.1-blue)

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Frontend Routes](#frontend-routes)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Management**: Full CRUD operations for coffee shop menu items
- **RESTful API**: Clean, well-documented API endpoints
- **Database Integration**: PostgreSQL backend with JPA
- **Modern UI**: Responsive React frontend with Material UI
- **Authentication**: JWT-based user authentication for admin operations
- **API Documentation**: Swagger/OpenAPI integration

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.2
- Spring Data JPA
- PostgreSQL
- Swagger/OpenAPI
- JUnit 5

### Frontend
- React 18
- React Router 6
- Material UI
- Axios
- React Query
- Vite

## Project Structure

```
coffee-shop-menu/
├── backend/                      # Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/coffeeshop/menu/
│   │   │   │   ├── controller/
│   │   │   │   │   └── ProductController.java
│   │   │   │   ├── model/
│   │   │   │   │   └── Product.java
│   │   │   │   ├── repository/
│   │   │   │   │   └── ProductRepository.java
│   │   │   │   ├── service/
│   │   │   │   │   └── ProductService.java
│   │   │   │   ├── exception/
│   │   │   │   │   └── ResourceNotFoundException.java
│   │   │   │   └── CoffeeShopMenuApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── java/com/coffeeshop/menu/
│   │           └── CoffeeShopMenuApplicationTests.java
│   ├── pom.xml
│   ├── mvnw
│   ├── mvnw.cmd
│   └── .mvn/wrapper/
│       └── maven-wrapper.properties
├── frontend/                     # React application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── ProductsPage.jsx
│   │   │   ├── ProductDetailsPage.jsx
│   │   │   ├── admin/
│   │   │   │   ├── AdminPage.jsx
│   │   │   │   ├── AdminProductsPage.jsx
│   │   │   │   ├── AddProductPage.jsx
│   │   │   │   └── EditProductPage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── services/
│   │   │   └── ProductService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── docker-compose.yml
├── LICENSE
└── README.mdThere is no code to improve in the selected portion. The selected portion is empty.
```


## Setup Instructions

### Prerequisites
- Java 17 or higher
- Node.js 18 or higher
- PostgreSQL 16
- Docker (optional)

### Backend Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/coffee-shop-menu.git
cd coffee-shop-menu/backend
```

2. Configure database settings in `src/main/resources/application.properties`

3. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend will be available at http://localhost:8080

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd coffee-shop-menu/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:5173

### Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE coffeeshop;
```

2. The tables will be automatically created by Hibernate when the application starts.

## API Documentation

API documentation is available through Swagger UI at http://localhost:8080/swagger-ui.html when the backend is running.

### Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/{id}` | Retrieve a specific product |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/{id}` | Update an existing product |
| DELETE | `/api/products/{id}` | Delete a product |

## Frontend Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with product listing |
| `/products/{id}` | Product details page |
| `/admin` | Admin dashboard (requires authentication) |
| `/admin/products` | Product management page |
| `/admin/products/new` | Add new product page |
| `/admin/products/edit/{id}` | Edit product page |

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.