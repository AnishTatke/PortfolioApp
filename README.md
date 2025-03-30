# Portfolio Backend

This is a backend application built using **FastAPI** to support a portfolio website. It provides APIs for managing portfolio data such as projects, skills, and contact information. Primarily being used for generating retrieval augmented generation(RAG) on resume content.

## Features

- RESTful API endpoints for portfolio management.
- Fast and efficient performance with FastAPI.
- Easy integration with frontend applications.
- Built-in support for OpenAPI documentation(not yet integrated).

## Requirements

- Python 3.8+
- FastAPI
- Uvicorn (for development server)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AnishTatke/backend.git
    cd backend
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

## Running the Application Locally

Start the development server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://127.0.0.1:8000`.

## API Documentation

FastAPI automatically generates interactive API documentation:

- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

## Project Structure

```
portfolio-backend/
├── pipelines/
│   ├── rag.py           # Retreives and generated answers
├── tests/               # Unit and integration tests
├── requirements.txt     # Python dependencies
├── inject.py            # This script run the injestion and indexing into vector DB(FAISS)
├── main.py              # This is the main app entry point where all routes are defined
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).