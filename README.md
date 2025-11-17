# 📚 Virtual Library Management System

A modern, full-stack library management application built with Node.js, Express, and MongoDB. This system provides an intuitive interface for managing books, readers, and loans with a beautiful, responsive design!

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## ✨ Features

- **📖 Book Management**: Create, read, update, and delete books with title, author, and genre information
- **👥 Reader Management**: Manage library members with name and email tracking
- **🔄 Loan System**: Track book loans with automatic date management and status indicators
- **🎨 Modern UI**: Beautiful gradient-based design with smooth animations and transitions
- **📱 Responsive Design**: Fully responsive interface that works on desktop, tablet, and mobile devices
- **🔍 Real-time Updates**: Dynamic content updates without page reloads
- **⚡ Fast Performance**: Optimized MongoDB queries and efficient data handling

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leonardojpires/proj-biblioteca.git
   cd proj-biblioteca
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MongoDB**
   
   Update the MongoDB connection string in `db.js`:
   ```javascript
   const uri = 'mongodb://localhost:27017/biblioteca';
   ```

4. **Start MongoDB**
   ```bash
   # On Windows (if using MongoDB as a service)
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

5. **Run the application**
   ```bash
   npm start
   ```

6. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
projeto-final/
├── controllers/          # Business logic controllers
│   ├── emprestimosController.js
│   ├── leitoresController.js
│   └── livrosController.js
├── models/              # MongoDB/Mongoose models
│   ├── emprestimo.js
│   ├── leitor.js
│   └── livro.js
├── routes/              # API and page routes
│   ├── emprestimosRoutes.js
│   ├── leitoresRoutes.js
│   ├── livrosRoutes.js
│   └── pagesRoutes.js
├── views/               # Pug templates
│   ├── layout/
│   │   └── fe_master.pug
│   ├── emprestimos.pug
│   ├── index.pug
│   └── leitores.pug
├── public/              # Static assets
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── app.js               # Application entry point
├── db.js                # Database configuration
└── package.json         # Project dependencies
```

## 🎨 Design System

### Color Palette

The application uses a modern gradient-based color scheme:

- **Primary Gradient**: Purple to Blue (#667eea → #764ba2)
- **Background**: Light gradient (#f5f7fa → #c3cfe2)
- **Success**: Blue to Cyan (#56ccf2 → #2f80ed)
- **Warning**: Orange gradient (#ffa62b → #ff8c00)
- **Danger**: Red gradient (#ff4757 → #dc3545)

### Typography

- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Base Size**: 16px
- **Line Height**: 1.6

### Components

- **Cards**: Rounded corners (12px) with layered shadows
- **Buttons**: Gradient backgrounds with ripple effects
- **Modals**: Centered dialogs with gradient headers
- **Tables**: Hover effects and smooth transitions
- **Forms**: Floating labels with focus animations

## 🛠️ Technologies Used

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling

### Frontend
- **Pug**: Template engine for dynamic HTML
- **Bootstrap 5**: CSS framework for responsive design
- **Bootstrap Icons**: Icon library
- **Custom CSS**: Modern gradient-based styling
- **Vanilla JavaScript**: Client-side interactivity

## 📚 API Endpoints

### Books
- `GET /api/livros` - Get all books
- `POST /api/livros` - Create a new book
- `PUT /api/livros/:id` - Update a book
- `DELETE /api/livros/:id` - Delete a book

### Readers
- `GET /api/leitores` - Get all readers
- `POST /api/leitores` - Create a new reader
- `PUT /api/leitores/:id` - Update a reader
- `DELETE /api/leitores/:id` - Delete a reader

### Loans
- `GET /api/emprestimos` - Get all loans
- `POST /api/emprestimos` - Create a new loan
- `PUT /api/emprestimos/:id` - Update a loan
- `DELETE /api/emprestimos/:id` - Delete a loan

## 🔒 Database Schema

### Book Model
```javascript
{
  id: Number,
  titulo: String,
  autor: String,
  genero: String
}
```

### Reader Model
```javascript
{
  id: Number,
  nome: String,
  email: String
}
```

### Loan Model
```javascript
{
  leitor: ObjectId (ref: 'Leitor'),
  livro: ObjectId (ref: 'Livro'),
  dataEmprestimo: Date,
  dataDevolucao: Date
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Gonçalo Ferreira**
- GitHub: [@GoncaloF16](https://github.com/GoncaloF16)

## 📧 Contact

For questions or support, please open an issue on GitHub or contact the maintainer.

