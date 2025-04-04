#!/bin/bash

echo "Injesting the database..."
python3 injest.py

echo "Starting the server..."
exec hypercorn main:app --bind "[::]:${PORT:-8000}"