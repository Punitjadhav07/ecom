# 🛍️ E-Commerce Store

A modern, responsive e-commerce web application built with React, Redux Toolkit, and React Router. Features include product browsing, search functionality, shopping cart, wishlist, and a beautiful UI.

![E-Commerce Store](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9.7-purple?style=for-the-badge&logo=redux)
![React Router](https://img.shields.io/badge/React_Router-6.8.0-orange?style=for-the-badge&logo=react-router)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🛒 Core Shopping Features
- **Product Catalog** - Browse products with category filtering
- **Smart Search** - Real-time search across product titles and descriptions
- **Shopping Cart** - Add/remove items with quantity management
- **Wishlist** - Save favorite products for later
- **Product Details** - Detailed product pages with images and descriptions

### 🎨 User Experience
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Clean, intuitive interface with smooth animations
- **Fixed Layout** - Persistent navbar and sidebar for easy navigation
- **Data Persistence** - Cart and wishlist saved in browser storage

### ⚡ Technical Features
- **Redux State Management** - Centralized state with Redux Toolkit
- **Client-Side Routing** - Seamless navigation with React Router
- **API Integration** - Fetches products from FakeStore API
- **Local Storage** - Persistent data across browser sessions
- **Error Handling** - Graceful handling of edge cases

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Now-green?style=for-the-badge&logo=vercel)](https://your-demo-link.com)

## 📸 Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400/2c3e50/ffffff?text=Home+Page+with+Products)

### Product Detail
![Product Detail](https://via.placeholder.com/800x400/3498db/ffffff?text=Product+Detail+Page)

### Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x400/e74c3c/ffffff?text=Shopping+Cart)

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Redux Toolkit** - State management
- **React Router v6** - Client-side routing
- **Font Awesome** - Icons
- **CSS3** - Styling with Grid and Flexbox

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Git** - Version control

### APIs
- **FakeStore API** - Product data source

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Punitjadhav07/ecom.git
   cd ecom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
ecom/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── Cart.jsx           # Shopping cart component
│   │   ├── Categories.jsx     # Category filter sidebar
│   │   ├── Navbar.jsx         # Navigation header
│   │   ├── ProductDetail.jsx  # Individual product page
│   │   └── Products.jsx       # Product grid
│   ├── Features/
│   │   ├── cartSlice.js       # Cart state management
│   │   ├── productSlice.js    # Product & search state
│   │   └── wishlistSlice.js   # Wishlist state management
│   ├── Storage/
│   │   └── store.js           # Redux store configuration
│   ├── css/
│   │   ├── cart.css           # Cart page styles
│   │   ├── category.css       # Category sidebar styles
│   │   ├── navbar.css         # Navigation styles
│   │   ├── productDetail.css  # Product detail styles
│   │   └── products.css       # Product grid styles
│   ├── App.jsx                # Main app component
│   ├── App.css                # Global app styles
│   ├── index.css              # Base styles
│   └── main.jsx               # App entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎯 Key Features Explained

### 🔍 Smart Search
- Real-time search as you type
- Searches both product titles and descriptions
- Case-insensitive matching
- Works with category filtering

### 🛒 Shopping Cart
- Add/remove items with quantity controls
- Persistent storage in localStorage
- Real-time total calculation
- Responsive cart interface

### ❤️ Wishlist
- Save favorite products
- Quick add/remove functionality
- Persistent storage
- Visual feedback

### 📱 Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔄 State Management

The application uses Redux Toolkit for state management with three main slices:

### Products Slice
- Manages product data and API calls
- Handles search and category filtering
- Caches data in localStorage

### Cart Slice
- Manages shopping cart items
- Calculates totals and quantities
- Persists cart data

### Wishlist Slice
- Manages wishlist items
- Tracks wishlist count
- Persists wishlist data

## 🌐 API Integration

The app integrates with the [FakeStore API](https://fakestoreapi.com/) to fetch product data:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Data**: Product information including images, prices, descriptions
- **Caching**: Products are cached in localStorage for better performance

## 🎨 Styling Approach

- **CSS Modules**: Component-specific stylesheets
- **CSS Grid**: For responsive product layouts
- **Flexbox**: For component alignment
- **Custom Properties**: For consistent theming
- **Mobile-First**: Responsive design approach

## 🚀 Deployment

The app is ready for deployment on any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

### Recommended Platforms
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Punit Jadhav**
- GitHub: [@Punitjadhav07](https://github.com/Punitjadhav07)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for providing product data
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [React](https://reactjs.org/) and [Redux](https://redux.js.org/) communities
- All contributors and testers

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Punitjadhav07/ecom?style=social)
![GitHub forks](https://img.shields.io/github/forks/Punitjadhav07/ecom?style=social)
![GitHub issues](https://img.shields.io/github/issues/Punitjadhav07/ecom)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Punitjadhav07/ecom)

---

⭐ **Star this repository if you found it helpful!**

🔗 **Check out my other projects**: [GitHub Profile](https://github.com/Punitjadhav07)