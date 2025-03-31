# Use the Python 3 slim official image
FROM python:3-slim

# Install necessary build dependencies
RUN apt-get update && apt-get install -y \
    gcc g++ libffi-dev libssl-dev python3-dev build-essential && \
    rm -rf /var/lib/apt/lists/*

# Create and change to the app directory.
WORKDIR /app

# Copy local code to the container image.
COPY . .

# Install project dependencies
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Run Injestion Script
RUN python3 injest.py

# Run the web service on container startup.
CMD ["hypercorn", "main:app", "--bind", "::"]