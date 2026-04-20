# Student Daily Commute Analysis - EDA Mini Project Website

A premium-quality, fully responsive website showcasing the Exploratory Data Analysis of student daily commute patterns in Pune.

## 🎯 Project Overview

This project presents a comprehensive EDA of 724 student commute records collected via Google Forms. The website features:

- **Interactive Visualizations**: 16+ charts created with Plotly.js
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Framer Motion-style animations using CSS
- **Premium UI**: Glassmorphism effects, gradient backgrounds, modern typography

## 📊 Features

### Visualizations Included

**Basic Charts:**
- Primary Mode of Transport (Bar Chart)
- Time of Day Distribution (Pie Chart)
- Travel Time Histogram
- One-Way Cost Distribution (Histogram)
- Major Delay Points (Bar Chart)
- Satisfaction Rating Distribution
- Average Travel Time by Mode
- Average Cost by Mode

**Advanced Charts:**
- Correlation Heatmap
- Transport Mode Usage by Time (Crosstab Heatmap)
- Travel Time Distribution by Mode (Box Plot)
- Cost Distribution Shape by Mode (Violin Plot)
- Student Distribution by Starting Point (Treemap)
- Transport Mode Breakdown by Area (Sunburst)
- 3D Scatter: Travel Time × Cost × Satisfaction
- Transport Mode Efficiency Map (Bubble Chart)
- Mode Composition by Time Slot (Stacked Bar)
- Advanced Analytics Dashboard

### Key Insights Highlighted

- Metro is the most efficient mode (lowest cost, fastest travel)
- Hinjewadi Traffic is the major bottleneck
- Morning Peak has highest commute volume
- Cost-Time trade-off analysis
- Satisfaction paradox explained

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (via CDN)
- **Charts**: Plotly.js
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Icons**: SVG (inline)

## 🚀 Getting Started

### Option 1: Direct Open
Simply open `index.html` in any modern web browser.

```bash
# Navigate to project directory
cd student-commute-eda

# Open in browser (macOS)
open index.html

# Or use a simple server
python -m http.server 8000
# Then visit http://localhost:8000
```

### Option 2: Live Server (Recommended)
If you have VS Code with Live Server extension:
1. Right-click `index.html`
2. Select "Open with Live Server"

## 📁 Project Structure

```
student-commute-eda/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom styles
├── js/
│   ├── data.js         # Dataset and statistics
│   ├── charts.js       # Plotly chart definitions
│   └── main.js         # Interactivity and animations
└── README.md           # This file
```

## 🎨 Design Features

- **Dark Theme**: Primary design with dark navy background
- **Glassmorphism**: Frosted glass card effects
- **Gradients**: Subtle color transitions throughout
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Animations**: Smooth scroll, fade-in, slide-up effects
- **Accessibility**: Keyboard navigation, ARIA labels

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
--primary: #6366f1;
--dark-bg: #0a0a1a;
--dark-card: #111127;
```

### Adding New Charts
1. Add data to `js/data.js`
2. Create chart function in `js/charts.js`
3. Add container `<div>` in `index.html`
4. Call function in `initCharts()`

## 📊 Data Source

The dataset contains 724 records with the following features:
- Starting Point (7 locations)
- Destination (6 destinations)
- Primary Transport Mode (6 types)
- Secondary Transport Mode
- Time of Day (4 periods)
- Average Travel Time (20-119 minutes)
- One-Way Cost (₹10-₹445)
- Major Delay Points (6 types + None)
- Overall Satisfaction (1-5 rating)

## 👥 Team Members

- **Tanmay Agarwal** (PRN: 25070123158) - Lead Developer
- **Tannishtha Gupta** (PRN: 25070123049) - Co-Developer

## 📄 License

This project is created for educational purposes as part of B.Tech Semester 2 EDA Mini Project at Symbiosis Institute of Technology, Pune.

---

Built with ❤️ for EnTC A3 Group 1 | B.Tech Sem 2