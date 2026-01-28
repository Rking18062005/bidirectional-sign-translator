<div align="center">
<h1>🤝 SignBridge AI</h1>
<p><strong>Bi-Directional Sign Language Translation System</strong></p>
<p>Breaking barriers between hearing and deaf communities with AI-powered sign language translation</p>

[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2-purple?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

**SignBridge AI** is an innovative web application that enables real-time, bi-directional translation between sign language and text/speech. Leveraging cutting-edge AI technologies, SignBridge bridges communication gaps between deaf and hearing individuals, making digital communication more inclusive and accessible.

The application uses:
- **Google Gemini AI** for intelligent translation and language understanding
- **MediaPipe Vision** for real-time hand gesture recognition and sign language detection
- **React 18** with TypeScript for a modern, responsive UI
- **Vite** for blazing-fast development and production builds

---

## 🧩 System Architecture

```
┌──────────────────────────────────────────────────┐
│  User Camera Input                               │
│  (Hand gestures)                                 │
└──────────────────────────┬──────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────────┐
│  MediaPipe Vision                                                          │
│  Hand Gesture Recognition & Landmark Detection                            │
│  (Extract hand position, finger poses, movement)                          │
└──────────────────────────┬──────────────────────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────────┐
│  Real-time Gesture Processing                                             │
│  (Data normalization, sequence analysis, context)                         │
└──────────────────────────┬──────────────────────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────────┐
│  Google Gemini AI                                                         │
│  (Interpret gestures, generate translations)                             │
└──────────────────────────┬──────────────────────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────────────────────────┐
│  React State Management                                                    │
│  (Update UI in real-time with results)                                    │
└──────────────────────────┬──────────────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────┐
│  User Output                                     │
│  Text or Sign Language                          │
└──────────────────────────────────────────────────┘
```

**Data Flow Summary:**
1. Webcam captures hand gestures and movements
2. MediaPipe Vision extracts hand landmarks in real-time
3. Gesture sequence processed and contextually analyzed
4. Google Gemini AI interprets and translates the input
5. Output generated as readable text or visual sign instructions
6. React updates UI instantly via state management

---

## ✨ Features

### 🖐️ Sign to Text Translation
- Real-time hand gesture recognition using MediaPipe Vision
- Converts sign language movements into readable text
- Camera-based input with live feedback
- High accuracy gesture detection

### ✍️ Text to Sign Translation
- Convert written text into sign language instructions
- Instructional sign representations using reference visuals (A–Z)
- AI-powered translation for context-aware sign sequences
- Comprehensive reference library for individual sign letters and words

### 🎯 Key Capabilities
- **Bi-directional translation** - sign ↔ text
- **Real-time processing** - instant feedback and results
- **AI-powered** - Google Gemini API integration for context-aware translations
- **Accessible UI** - intuitive interface for all users
- **Responsive design** - works on desktop and mobile devices
- **Reference library** - comprehensive sign language reference (A-Z)

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.x | UI framework |
| TypeScript | 5.8.2 | Type-safe development |
| Vite | 5.x | Build tool & dev server |
| Google Gemini API | gemini-1.5-flash | AI translation engine |
| MediaPipe Vision | 0.10.x | Hand gesture recognition |
| Tailwind CSS | (via classes) | Styling |
| Lucide React | 0.562.0 | Icon library |

---

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org)
- **npm** (comes with Node.js) or **yarn**
- **Gemini API Key** - [Get one](https://makersuite.google.com/app/apikey)
- **Modern web browser** with camera access support

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/signbridge-ai.git
   cd signbridge-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```
   Or create `.env.local` manually with:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Verify installation**
   ```bash
   npm run build
   ```

---

## 🔐 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

**How to get your Gemini API Key:**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the generated key
4. Paste it in your `.env.local` file

### MediaPipe Setup

The application automatically downloads MediaPipe Vision models on first use. Ensure your browser allows camera access when prompted.

### 🔒 Security Best Practices

⚠️ **CRITICAL:** Never expose your Gemini API key in production builds.
- Always use environment variables (`.env.local`) for local development
- For production deployment, use server-side proxying to hide the API key
- Never commit `.env.local` to version control (add to `.gitignore`)
- Regenerate API keys if accidentally exposed
- Monitor API usage in Google Cloud Console

---

## 🚀 Usage

### Development Mode
```bash
npm run dev
```
The app will start at `http://localhost:5173` with hot module reloading.

### Build for Production
```bash
npm run build
```
Creates an optimized build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Using the Application

#### Sign to Text
1. Click the **"Sign to Text"** tab
2. Allow camera access when prompted
3. Make hand signs/gestures in front of your camera
4. The system recognizes gestures and converts them to text

#### Text to Sign
1. Click the **"Text to Sign"** tab
2. Type or paste the text you want to translate
3. The system generates sign language instructions
4. View the visual representation of the signs

---

## 📁 Project Structure

```
signbridge-ai/
├── components/
│   ├── App.tsx                 # Main application component
│   ├── SignToText.tsx          # Sign language to text translator
│   ├── TextToSign.tsx          # Text to sign language translator
│   └── HearingToDeaf.tsx       # Hearing mode interface
├── services/
│   └── geminiService.ts        # Google Gemini API integration
├── reference/
│   └── A-Z/                    # Sign language reference library
├── index.tsx                   # React entry point
├── index.html                  # HTML template
├── constants.ts                # Application constants
├── types.ts                    # TypeScript type definitions
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
├── metadata.json               # App metadata
└── README.md                   # This file
```

---

## 🎨 UI Components

### Header Navigation
- **SignBridge AI Logo** - Branding and title
- **Tab Navigation** - Switch between Sign to Text and Text to Sign modes
- **Responsive Design** - Mobile-friendly layout

### Sign to Text Component
- Live camera feed display
- Real-time gesture recognition
- Text output area
- Confidence indicators

### Text to Sign Component
- Text input field
- Sign sequence visualization
- Reference library integration
- Export options

---

## 🔧 Development

### Code Style
- TypeScript for type safety
- Functional components with React Hooks
- Tailwind CSS for styling
- ESLint-compatible formatting

### Building Components
```typescript
import React from 'react';

interface ComponentProps {
  // Define your props
}

const MyComponent: React.FC<ComponentProps> = (props) => {
  return <div>Component content</div>;
};

export default MyComponent;
```

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add TypeScript types for all new code
- Update documentation as needed
- Test thoroughly before submitting PR

---

## 🐛 Known Issues & Limitations

- Camera access required for Sign to Text feature
- Best performance on desktop browsers (Chrome, Firefox, Edge)
- Sign recognition accuracy varies by gesture clarity
- Internet connection required for Gemini API calls

---

## 🗺️ Roadmap

- [ ] Mobile app versions (iOS/Android)
- [ ] Offline gesture recognition
- [ ] Custom sign language dictionary
- [ ] Multi-language support
- [ ] Video recording and playback
- [ ] Real-time video call integration
- [ ] Community contributions for sign database
- [ ] Advanced gesture recognition with CNN models
- [ ] Support for multiple sign language standards (ASL, ISL, BSL)

---

## 🎓 Academic Context

This project was developed as an academic and research-oriented system to explore:
- Real-time human–computer interaction (HCI)
- Computer vision and gesture recognition
- Natural language processing with AI
- Accessibility solutions for inclusive communication
- Integration of machine learning models in web applications

**Suitable for:**
- Final-year B.Tech/BE projects
- Research papers and IEEE publications
- Accessibility and inclusive design initiatives
- AI/ML portfolio demonstrations

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support & Contact

For questions, issues, or suggestions:
- 📧 Email: your.email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/signbridge-ai/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/signbridge-ai/discussions)

---

## 🙏 Acknowledgments

- Google Gemini AI for powerful language model capabilities
- MediaPipe team for gesture recognition technology
- React and TypeScript communities for excellent tooling
- All contributors and supporters of accessible technology

---

<div align="center">

**Made with ❤️ for accessibility and inclusion**

[⬆ Back to top](#-signbridge-ai)

</div>
