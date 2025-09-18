# Full Auth E-commerce Fullstack (Django + DRF backend, React + Tailwind frontend)

Run backend:
cd backend
python -m venv venv
# activate venv then:
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver

Run frontend:
cd frontend
npm install
npm run dev

Seed data:
# in backend folder
python manage.py shell < seed_data.py

Frontend env var: edit VITE_API_BASE in .env if backend not at default http://127.0.0.1:8000/api/v1/
