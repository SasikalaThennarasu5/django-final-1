#!/usr/bin/env bash
# Simple helper to create venv and install requirements (Linux/Mac).
python -m venv env
source env/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
echo "Virtualenv created. Activate env and run: python manage.py migrate"
