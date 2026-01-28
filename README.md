<div align="center">

<h1>🤝 SignBridge AI</h1>

<p><strong>Bi-Directional Sign Language Translation System</strong></p>
<p>Breaking barriers between hearing and deaf communities with AI-powered sign language translation.</p>

<p>
  <a href="https://bidirectional-sign-translator.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🔴_Live_Demo-Visit_Site-red?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <a href="https://github.com/Rking18062005/bidirectional-sign-translator" target="_blank">
    <img src="https://img.shields.io/badge/📂_GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repo" />
  </a>
</p>

[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)](https://vitejs.dev)
[![Gemini AI](https://img.shields.io/badge/AI-Google_Gemini-orange?logo=google)](https://deepmind.google/technologies/gemini/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [System Architecture](#-system-architecture)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Roadmap](#-roadmap)
- [Academic Context](#-academic-context)
- [License](#-license)

---

## 📖 About

**SignBridge AI** is an innovative web application that enables real-time, bi-directional translation between sign language and text/speech. Leveraging cutting-edge AI technologies, SignBridge bridges communication gaps between deaf and hearing individuals, making digital communication more inclusive and accessible.

The application uses:
- **Google Gemini AI** for intelligent translation and language understanding.
- **MediaPipe Vision** for real-time hand gesture recognition and sign language detection.
- **React 18** with TypeScript for a modern, responsive UI.
- **Vite** for blazing-fast development and production builds.

---

## 🧩 System Architecture

```mermaid
graph TD
    subgraph Input
    A[User Camera / Text Input]
    end

    subgraph Processing
    B[MediaPipe Vision] -->|Landmark Detection| C{Gesture Processing}
    C -->|Normalization| D[Context Analysis]
    end

    subgraph AI_Engine
    D -->|Prompt Engineering| E[Google Gemini AI]
    E -->|Translation| F[Response Parsing]
    end

    subgraph Output
    F -->|State Update| G[React UI]
    G --> H[Text / Sign Visuals]
    end

    A --> B
