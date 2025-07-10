
# Saarthi - Emotion Reflection Tool 🧠💬

Saarthi is a simple, full-stack web application that allows users to submit short emotional reflections and receive a mock emotion analysis in return.

Built with:

- 🔥 **Frontend**: Next.js + TypeScript + Tailwind CSS
- 🐍 **Backend**: Flask (Python) with CORS support
- 🎨 **UI**: Minimal, mobile-first design with clean black-and-white styling

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [Python](https://python.org/) (v3.10+)
- Git

---

### 📦 Clone the Repository

```bash
git clone https://github.com/gerryjindal/saarthi.git
cd saarthi
```

---

### 🔧 Backend Setup (Flask API)

```bash
cd backend
python -m venv venv
venv\Scripts\activate         # (use 'source venv/bin/activate' on Mac/Linux)
username
pip install -r requirements.txt
python app.py
```

📍 Flask will run at: [http://localhost:5000](http://localhost:5000)

---

### 💻 Frontend Setup (Next.js)

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

📍 Next.js will run at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Example API Request

**POST** `http://localhost:5000/analyze`

```json
Request Body:
{
  "text": "I feel anxious about my future."
}
```

**Response:**
```json
{
  "emotion": "Anxious",
  "confidence": 0.88
}
```

---

## 📱 Using the App

1. Visit `http://localhost:3000`
2. Enter a short reflection like: _“I’m feeling overwhelmed with work.”_
3. Click **Submit**
4. View the detected emotion and confidence score

---

## 🧰 Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | Next.js, React, TypeScript    |
| Styling   | Tailwind CSS, React Icons     |
| Backend   | Python, Flask, flask-cors     |
| Utilities | React Hot Toast               |

---

## 🙌 Acknowledgements

Built for learning, emotional awareness, and UI/UX practice.
