# SiPhBioHome — Painless At-Home Blood Biomarker & Silicon Photonics Diagnostic Platform

**SiPhBioHome** is a full-stack health technology web application cloning `https://siphoxhealth.com/`. It combines painless upper-arm EasyDraw blood collection, 50+ biomarker tracking dashboard, wearable integration, and the **SiPhBio Home** silicon photonics benchtop analyzer.

---

## 🌟 Key Features

- **Exact Header & Footer Replica**:
  - Floating capsule header featuring the `SiPho` logo with colorful crossed-X icon and `HEALTH` text underlined in cyan (`#2BBDB9`).
  - Header Links: `How It Works`, `What We Test`, `Quiz`, `FAQ`, and `Start Testing` cyan gradient pill button.
  - Footer matching siphoxhealth.com with mission tagline, 3-column Quick Links, Company info, orange circular Back-To-Top button, legal medical disclaimer, and circular cyan social icons.
- **Interactive Biomarker Assessment Quiz (`QuizModal.jsx`)**: 3-step personalized biomarker assessment.
- **Consolidated Stripe Pricing Checkout (`CheckoutModal.jsx`)**: $100 / $150 / $200 USD tiers with real card data validation and active subscriber state.
- **Dual Persistence Backend (SQLite + MongoDB Atlas Cloud Sync)**:
  - SQLite relational ORM.
  - Asynchronous fail-soft MongoDB Cloud Atlas sync (`siphbiohome_db`).
  - Passcode-protected executive admin portal (`X-Admin-Passcode: aliabbas1234578!`).
- **Responsive Viewport Containment**: Touch gestures and mobile safe area inset handling.

---

## 🛠️ Technology Stack

- **Frontend**: React 18 (Vite 5), Lucide Icons, Canvas 2D, Vanilla CSS.
- **Backend**: Python 3.12, Django 5 REST Framework.
- **Databases**: SQLite (primary) + MongoDB Atlas (cloud document sync).

---

## 🚀 Quick Start

### 1. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 2. Backend Setup
```bash
cd backend
pip install django djangorestframework django-cors-headers pymongo
python manage.py migrate
python manage.py runserver 8003
```
