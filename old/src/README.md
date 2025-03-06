# My Node.js App

This is a basic Node.js application that sets up an HTTP server.

## Project Structure

```
my-node-app
├── src
│   └── index.js
├── Dockerfile
├── package.json
└── README.md
```

## Getting Started

To get a copy of this project up and running on your local machine, follow these simple steps.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)
- Docker (if you want to run the app in a container)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/my-node-app.git
   cd my-node-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To run the application locally, use the following command:
```
node src/index.js
```
The server will start and listen on the specified port.

### Running with Docker

To build and run the application using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t my-node-app .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 my-node-app
   ```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.