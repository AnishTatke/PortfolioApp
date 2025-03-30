# Use the Python 3 alpine official image
FROM python:3-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy local code to the container image.
COPY . .

# Install project dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Run Injestion Script
RUN python3 injest.py

# Run the web service on container startup.
CMD ["hypercorn", "main:app", "--bind", "::"]