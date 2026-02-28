# 🧑‍💻 Personal Portfolio

A sleek, Apple-inspired personal portfolio with smooth animations, parallax effects, and a premium dark aesthetic.

---

## 📁 Project Structure

```
portfolio/
├── index.html       → Markup & content
├── styles.css       → All styling & animations
├── script.js        → Interactive behaviour
├── images/
│   └── profile.jpg  ← PUT YOUR PHOTO HERE
└── resume.pdf       ← PUT YOUR RESUME HERE
```

---

## 🚀 Getting Started

1. **Clone or download** this folder to your computer.
2. Open `index.html` in any browser — no build step needed.

---

## ✏️ How to Personalise

### Your Photo
- Add your photo to the `images/` folder named `profile.jpg`
  (or update the `src` in the About section of `index.html`)
- Recommended: square or portrait crop, at least 600×700px
- A clean background works best with this dark theme

### Your Info (index.html)
Search for these placeholders and replace them:

| Placeholder          | Replace with                        |
|----------------------|-------------------------------------|
| `Your Name`          | Your actual name                    |
| `YN.`                | Your initials                       |
| `Your City`          | Your location                       |
| `you@email.com`      | Your email address                  |
| `yourusername`       | Your GitHub username                |
| `yourprofile`        | Your LinkedIn profile slug          |
| `yourhandle`         | Your Twitter/X handle               |
| Project titles/desc  | Your actual projects                |
| Experience items     | Your actual work history            |

### Accent Colour (styles.css)
Change the green to any colour you like — edit line 10:
```css
--accent: #a3ff70;   /* ← change this hex */
```

### Stats (index.html)
Update the `data-target` attributes on `.stat-number` elements:
```html
<div class="stat-number" data-target="12">0</div>
```

---

## 🌐 Deploying for Free

### GitHub Pages (recommended)
1. Create a repo named `yourusername.github.io`
2. Push this folder's contents to the `main` branch
3. Your portfolio is live at `https://yourusername.github.io`

### Netlify
1. Drag & drop this folder at [netlify.com/drop](https://app.netlify.com/drop)
2. Done — you get a free URL instantly

### Vercel
```bash
npx vercel
```

---

## ✨ Features

- 🖱️  Custom animated cursor with lag ring
- 📜  Scroll-reveal animations on all sections
- 🌊  Parallax hero section
- 📊  Animated skill progress bars
- 🔢  Counting number animations
- 📱  Fully responsive with mobile menu
- 🌙  Premium dark theme with noise overlay
- ⚡  Zero dependencies — pure HTML, CSS & JS

---

## 📸 Photo Tips

| ✅ Do                          | ❌ Don't                        |
|-------------------------------|--------------------------------|
| Clean, neutral background     | Busy or cluttered backgrounds  |
| Good natural or studio light  | Dark, shadowy, or grainy shots |
| Professional or smart-casual  | Party / very casual photos     |
| Looking at the camera         | Sunglasses or hats             |
| High resolution (600px+)      | Small or blurry images         |
