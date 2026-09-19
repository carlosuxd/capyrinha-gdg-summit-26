# 🦫 CapyCool - Vector Character Customizer Studio

[![Firebase Hosting](https://img.shields.io/badge/Hosted_on-Firebase-orange?logo=firebase)](https://capyrinha-3bb4a.web.app)
[![Design by](https://img.shields.io/badge/Designed_by-@ux.carlos-E4405F?logo=instagram)](https://www.instagram.com/ux.carlos)
[![GDG Summit Latam 2026](https://img.shields.io/badge/GDG_Summit_Latam-2026-4285F4?logo=google)](https://capyrinha-3bb4a.web.app)

A modern, responsive, high-performance web application for customizing clothes, footwear, sunglasses, and fur tones for **CapyCool** using vector graphics ([`capyrinha.svg`](capyrinha.svg)), 20 Latin American (LATAM) national flag backgrounds, and official Google Sans GDG Summit styling.

🌐 **Live Web App**: [https://capyrinha-3bb4a.web.app](https://capyrinha-3bb4a.web.app)  
👤 **Created by**: [@ux.carlos](https://www.instagram.com/ux.carlos)

---

## 🚀 Quick Start

### Run Locally

```bash
# Start local development server
python3 server.py
```

Then open your browser to:  
👉 **[http://localhost:8000](http://localhost:8000)**

*(Alternatively, serve with any local HTTP server or open `index.html` directly in any modern browser).*

---

## ✨ Key Features

### 1. Vector SVG Customizer ⚡
- **Real-Time 3D Shading Engine**: Automatic calculation of highlight lifts (+12%) and crease shadows (-18% to -32%) ensures depth across any chosen hue (pastels, neons, or dark tones).
- **Granular Garment Control**:
  - 🧥 **Hoodie / Outerwear**: Base color picker, quick street swatches, dynamic fabric folds and highlights.
  - 🧶 **Drawstrings**: Cord color picker and subtle drop shadows.
  - 🩳 **Pants & Cargo Shorts**: Base color picker with pocket creases and shadows.
  - 👟 **Footwear & Sneakers**: Main color, side stripes styles (**Rainbow Pride / Retro**, **Monochrome Accent**, **Clean White**, **Gold Street**), rubber soles, and laces.
  - 🕶️ **Sunglasses**: **Rainbow Multi-Color**, **Solid Frame & Dark Lens**, or **Hidden / Off** (to reveal friendly eyes).
  - 🦫 **Fur & Face**: Body fur tone (Classic Orange, Caramel, Chocolate, Albino Cream, Midnight), snout muzzle shade, and cheek blush.

### 2. LATAM Flags Background System 🌎
- **20 Latin American Nations (Alphabetically Ordered)**:
  - 🇦🇷 Argentina, 🇧🇴 Bolivia, 🇧🇷 Brazil, 🇨🇱 Chile, 🇨🇴 Colombia, 🇨🇷 Costa Rica, 🇨🇺 Cuba, 🇩🇴 Dominican Republic, 🇪🇨 Ecuador, 🇸🇻 El Salvador, 🇬🇹 Guatemala, 🇭🇳 Honduras, 🇲🇽 Mexico, 🇳🇮 Nicaragua, 🇵🇦 Panama, 🇵🇾 Paraguay, 🇵🇪 Peru, 🇵🇷 Puerto Rico, 🇺🇾 Uruguay, 🇻🇪 Venezuela.
- **Match Outfit to Flag**: Instant 1-click styling button that intelligently harmonizes CapyCool's hoodie, pants, shoes, and cords with the selected country's national palette.

### 3. GDG Summit Latam 2026 Branded Stage 🎨
- **Google Sans Typography**: Clean, modern typography powered by Google Sans.
- **Multi-Color GDG Banner**: Character stands on a dark stage footer (`#191923`) featuring the letter-by-letter Google color cycle: `"GDG Summit Latam 2026"` in official Google Yellow, Green, Red, and Blue.

### 4. Optimized Mobile Experience 📱
- **Unified Document Flow**: Natural, single-document scrolling on mobile devices without nested scroll traps.
- **Interactive Floating Character Preview**:
  - Automatically floats in the bottom corner on mobile screens when scrolling through customization controls.
  - Live real-time color and flag synchronization.
  - Tap-to-scroll functionality smoothly returns the view to the main canvas stage.

### 5. High-Resolution Multi-Format Exports 📥
- **High-Res PNG (1536 × 2048)**: Direct, single-click high-resolution raster export compositing character art, active LATAM flag background, and the GDG Summit banner.
- **Scalable Vector SVG**: Raw, infinitely scalable SVG export preserving all custom colors and semantic layers.
- **Streetwear Collector Card**: Stylized 1000 × 1400 trading card complete with character specs, flag origin, and custom color swatches.
- **Copy SVG to Clipboard**: Instant copy of sanitized SVG markup for vector editors (Figma, Illustrator) and sharing.

### 6. Presets & Quick Actions 🎛️
- **Embedded Quick Actions**: **🎲 Randomize** and **🔄 Reset** buttons conveniently located in the *Clothes & Colors* tab.
- **Curated Looks**: Classic Streetwear, Fiery Street Skater, Stealth Techwear, Tactical Camo Explorer, Vintage Denim Casual, Lavender Chill, Cyberpunk Neon.
- **Custom Looks**: Save and manage your favorite custom styles in browser `localStorage`.

---

## 🛠️ Project Structure

```text
├── index.html          # Main application layout, sidebar tabs, and canvas stage
├── styles.css          # Modern dark-mode UI, responsive layouts, and floating preview styles
├── app.js              # Vector SVG engine, LATAM flag system, and high-res export pipeline
├── capyrinha.svg       # Master semantic vector SVG asset (463 × 815 viewBox)
├── server.py           # Lightweight Python local development server
└── README.md           # Project documentation
```

---

## 🚀 Deployment

The project is configured for continuous deployment with **Firebase Hosting**:

```bash
# Deploy latest changes to Firebase Hosting
npx firebase-tools deploy --only hosting
```

- **Live URL**: [https://capyrinha-3bb4a.web.app](https://capyrinha-3bb4a.web.app)
- **GitHub Repository**: [https://github.com/carlosuxd/capyrinha-gdg-summit-26](https://github.com/carlosuxd/capyrinha-gdg-summit-26)

---

## 📄 License & Credits

- **Character Artwork & UI Design**: Carlos Collazos ([@ux.carlos](https://www.instagram.com/ux.carlos))
- Built with standard web technologies (Vanilla HTML5, CSS3, JavaScript, SVG, and Canvas API) with zero heavy runtime framework overhead.
