# Simple Blog Web App

This is a simple blog web application built using Ruby on Rails for the backend and React with TypeScript for the frontend. This project serves as a school winter assignment and demonstrates the integration of these technologies.

## Features

- User authentication
- Create, read, update, and delete blog posts
- Responsive UI built with React
- TypeScript for type safety and better development experience
- RESTful API for communication between frontend and backend

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Ruby (version 2.7 or above)
- Rails (version 6.0 or above)
- Node.js (for managing JavaScript dependencies)
- npm or Yarn (for managing packages)

### Installation

1. **Clone the repository:**

   git clone https://github.com/yourusername/simple-blog-app.git  
   cd simple-blog-app

2. **Backend Setup (Rails):**

   - Navigate to the backend directory:

     'cd backend'

   - Install the required gems:
  
     'bundle install'

   - Set up the database:

     'rails db:create'
     'rails db:migrate'

   - Start the Rails server:
  
     'rails server'

3. **Frontend Setup (React):**

   - Open another terminal and navigate to the frontend directory:

     'cd frontend'

   - Install the required packages:
   
     'npm install'

   - Start the React development server:

     'npm start'

5. **Access the application:**

   Open your web browser and go to `http://localhost:3000` for the React app. The backend will typically run on `http://localhost:3001`.

### Usage

- **Create a Post:** Use the "New Post" button in the React app to create a new blog entry.
- **View Posts:** Navigate to the homepage to see a list of all blog posts.
- **Edit a Post:** Click on the "Edit" link next to any post to update its content.
- **Delete a Post:** Click on the "Delete" button to remove a post.

### Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

This project was developed based on the [Ruby on Rails Getting Started Guide](https://guides.rubyonrails.org/getting_started.html) and incorporates React with TypeScript for the frontend.
