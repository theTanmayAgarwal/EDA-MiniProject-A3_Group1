<div align="center">

# 🚌 Student Daily Commute Analysis

### **Exploratory Data Analysis | Mini Project**

[![Python](https://img.shields.io/badge/Python-3.8%2B-blue?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Pandas](https://img.shields.io/badge/Pandas-2.0%2B-150458?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/)
[![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](https://jupyter.org/)
[![Plotly](https://img.shields.io/badge/Plotly-5.0%2B-3F4F75?style=for-the-badge&logo=plotly&logoColor=white)](https://plotly.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**Uncovering patterns, bottlenecks, and insights from 724 student commute records in Pune**

[📥 Dataset](#-dataset) • [📊 Visualizations](#-visualizations) • [🔍 Key Insights](#-key-findings) • [🚀 Quick Start](#-how-to-run)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Objectives](#-objectives)
- [Dataset](#-dataset)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [EDA Techniques Applied](#-eda-techniques-applied)
- [Visualizations](#-visualizations)
- [Key Findings](#-key-findings)
- [Results & Conclusion](#-results--conclusion)
- [Future Scope](#-future-scope)
- [Interactive Website](#-interactive-website)
- [How to Run](#-how-to-run)
- [Contributors](#-contributors)
- [Acknowledgements](#-acknowledgements)

---
## Website Link (Live Deployment): https://student-daily-commute-analysis.netlify.app
---

## 🎯 Overview

This project presents a comprehensive **Exploratory Data Analysis (EDA)** of daily commute patterns among students in Pune, India. Through rigorous analysis of survey data collected via Google Forms, we uncover actionable insights about transport preferences, cost-time trade-offs, major bottlenecks, and satisfaction levels across different commute routes.

> **Real-world Impact:** The findings from this analysis can help city planners, educational institutions, and transport authorities optimize infrastructure and improve student commuting experiences.

---

## ❓ Problem Statement

Students in Pune navigate complex commute routes daily, facing challenges like:
- **Unpredictable travel times** due to traffic congestion
- **Rising transportation costs** affecting student budgets
- **Multiple bottlenecks** causing delays across routes
- **Mode selection dilemmas** balancing cost vs. time vs. comfort

**This project answers:** What are the patterns in student commuting behavior, and how can we optimize the daily commute experience?

---

## 🎯 Objectives

| # | Objective |
|---|-----------|
| 1️⃣ | Analyze transport mode preferences and their distribution |
| 2️⃣ | Identify peak commute times and their impact on travel duration |
| 3️⃣ | Quantify the cost-time trade-off across different transport modes |
| 4️⃣ | Pinpoint major delay points and bottleneck locations |
| 5️⃣ | Correlate satisfaction scores with commute variables |
| 6️⃣ | Provide data-driven recommendations for improvement |

---

## 📊 Dataset

### Source
- **Collection Method:** Google Forms Survey
- **Sample Size:** 724 student responses
- **Location:** Pune Metropolitan Region, India
- **Time Period:** March 2026

### Features

| Column | Description | Type |
|--------|-------------|------|
| `Timestamp` | Survey response date & time | DateTime |
| `Starting_Point` | Origin location (7 areas) | Categorical |
| `Destination` | Target location (6 destinations) | Categorical |
| `Primary_Mode` | Main transport mode (6 types) | Categorical |
| `Secondary_Mode` | Secondary transport (if multi-leg) | Categorical |
| `Time_of_Day` | Travel time slot (4 periods) | Categorical |
| `Travel_Time_min` | One-way travel duration | Numerical |
| `One_Way_Cost_INR` | One-way cost in ₹ | Numerical |
| `Delay_Points` | Major bottlenecks faced | Categorical |
| `Satisfaction` | Overall experience rating (1-5) | Ordinal |

### Coverage Areas

```
📍 Starting Points (7)          🏁 Destinations (6)
├── Kothrud                    ├── Hinjewadi (IT Hub)
├── Wakad                      ├── Kharadi (Tech Park)
├── Baner                      ├── Viman Nagar
├── Pashan                     ├── Swargate
├── Shivajinagar               ├── Pune Station
├── SIT Lavale Campus          └── Other
└── Other
```

### Transport Modes

```
🚇 Metro              🚌 PMPML City Bus
🚗 Cab (Ola/Uber)     🛵 Personal Two-Wheeler
🚕 Auto Rickshaw      🚗 Carpool
```

---

## 🛠️ Tech Stack

<div align="center">

| Category | Tools |
|----------|-------|
| **Language** | ![Python](https://img.shields.io/badge/Python-3.8%2B-3776AB?style=flat-square&logo=python&logoColor=white) |
| **Data Manipulation** | ![Pandas](https://img.shields.io/badge/Pandas-2.0%2B-150458?style=flat-square&logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/NumPy-1.24%2B-013243?style=flat-square&logo=numpy&logoColor=white) |
| **Visualization** | ![Matplotlib](https://img.shields.io/badge/Matplotlib-3.7%2B-11557C?style=flat-square) ![Seaborn](https://img.shields.io/badge/Seaborn-0.12%2B-4C8CB5?style=flat-square) ![Plotly](https://img.shields.io/badge/Plotly-5.0%2B-3F4F75?style=flat-square&logo=plotly) |
| **Environment** | ![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-F37626?style=flat-square&logo=jupyter) |
| **Web Technologies** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |

</div>

---

## 📁 Project Structure

```
📦 EDA-MiniProject-A3_Group1
│
├── 📓 Student Commute EDA Mini-Project.ipynb    # Main analysis notebook
├── 📄 student_commute_data_google_form.csv      # Raw dataset (724 records)
│
├── 📁 Basic Visualizations (Plots)/             # 8 fundamental charts
│   ├── 01_primary_mode_bar.png                  # Transport mode distribution
│   ├── 02_time_of_day_pie.png                   # Time slot distribution
│   ├── 03_travel_time_histogram.png              # Travel time distribution
│   ├── 04_cost_histogram.png                    # Cost distribution
│   ├── 05_delay_points_bar.png                  # Bottleneck frequency
│   ├── 06_avg_time_by_mode.png                  # Average time per mode
│   ├── 07_avg_cost_by_mode.png                  # Average cost per mode
│   └── 08_satisfaction_bar.png                  # Satisfaction distribution
│
├── 📁 Advanced Specialized Visualizations (Plots)/  # 15 advanced charts
│   ├── 01_Correlation Heatmap.png                # Variable correlations
│   ├── 02_Crosstab HeatMap.png                   # Mode × Time crosstab
│   ├── 03_Box Plot.png                           # Time distribution by mode
│   ├── 04_Violin Plot.png                        # Cost distribution shape
│   ├── 05_KDE Plot.png                           # Density estimation
│   ├── 06_Bubble Chart.png                       # Efficiency mapping
│   ├── 07_Pair Plot.png                          # Pairwise relationships
│   ├── 08_Stacked Bar Chart.png                  # Mode composition
│   ├── 09_Treemap.png                            # Student distribution
│   ├── 10_Sunburst Chart.png                     # Hierarchical breakdown
│   ├── 11_3D Scatter.png                         # Multi-dimensional view
│   ├── 12_Strip Plot.png                         # Individual data points
│   ├── 13_Joint Plot.png                         # Bivariate + marginals
│   ├── 14_Area Plot.png                          # Cumulative comparison
│   └── Advanced Analytics Dashboard.png          # Comprehensive dashboard
│
├── 📁 Website for Mini-Project Analysis/        # Interactive web dashboard
│   ├── index.html                                # Main page
│   ├── css/styles.css                            # Styling
│   ├── js/data.js                                # Dataset & statistics
│   ├── js/charts.js                              # Plotly visualizations
│   └── js/main.js                                # Animations & interactivity
│
├── 📄 EDA Project Report.docx.pdf               # Detailed report
├── 📄 EDA MiniProject PPT.pptx                   # Presentation slides
├── 📄 EDA_Questions_Student-Daily-Commute-Dataset.pdf  # Research questions
├── 📄 LICENSE                                    # MIT License
└── 📄 README.md                                  # Documentation
```

---

## 🔬 EDA Techniques Applied

A comprehensive suite of EDA techniques was applied to extract meaningful insights:

| # | Technique | Implementation |
|---|-----------|----------------|
| 1 | **Data Loading & Inspection** | `pd.read_csv()`, `df.head()`, `df.tail()`, `df.info()`, `df.shape`, `df.dtypes` |
| 2 | **Descriptive Statistics** | `df.describe()`, `mean()`, `median()`, `std()`, `min()`, `max()` |
| 3 | **Missing Value Analysis** | `df.isnull().sum()`, `fillna()` (132 missing values handled) |
| 4 | **Frequency Distribution** | `value_counts()` on all categorical columns |
| 5 | **Unique Value Analysis** | `unique()`, `nunique()` for cardinality assessment |
| 6 | **Percentage Distribution** | `value_counts(normalize=True) * 100` |
| 7 | **Data Filtering** | Boolean indexing for subset extraction |
| 8 | **Cross Tabulation** | `pd.crosstab()` for 5 multi-dimensional analyses |
| 9 | **GroupBy Aggregation** | Mean, count, and max aggregations by groups |
| 10 | **Sorting** | Multi-column sorting for ranking analysis |
| 11 | **Derived Columns** | Created `Commute_Category` (Short/Medium/Long) |
| 12 | **Advanced Visualizations** | 23 charts using Matplotlib, Seaborn, Plotly |

---

## 📈 Visualizations

### Basic Visualizations (8 Charts)

<table>
<tr>
<td width="50%"><h4>Transport Mode Distribution</h4>
<img src="Basic Visualizations (Plots)/01_primary_mode_bar.png" alt="Primary Mode Bar Chart">
<p>Bar chart showing preference distribution across 6 transport modes</p>
</td>
<td width="50%"><h4>Time of Day Distribution</h4>
<img src="Basic Visualizations (Plots)/02_time_of_day_pie.png" alt="Time of Day Pie Chart">
<p>Pie chart revealing peak commute hours</p>
</td>
</tr>
<tr>
<td width="50%"><h4>Travel Time Distribution</h4>
<img src="Basic Visualizations (Plots)/03_travel_time_histogram.png" alt="Travel Time Histogram">
<p>Histogram showing spread of commute durations (20-119 min)</p>
</td>
<td width="50%"><h4>Cost Distribution</h4>
<img src="Basic Visualizations (Plots)/04_cost_histogram.png" alt="Cost Histogram">
<p>Histogram of one-way costs (₹10-₹445)</p>
</td>
</tr>
<tr>
<td width="50%"><h4>Delay Points Analysis</h4>
<img src="Basic Visualizations (Plots)/05_delay_points_bar.png" alt="Delay Points Bar Chart">
<p>Bar chart of major bottleneck frequencies</p>
</td>
<td width="50%"><h4>Satisfaction Distribution</h4>
<img src="Basic Visualizations (Plots)/08_satisfaction_bar.png" alt="Satisfaction Bar Chart">
<p>Rating distribution (1-5 scale)</p>
</td>
</tr>
</table>

### Advanced Visualizations (15 Charts)

| Visualization | Purpose |
|--------------|---------|
| 🔥 **Correlation Heatmap** | Travel time, cost & satisfaction relationships |
| 📊 **Crosstab Heatmap** | Transport mode usage patterns by time |
| 📦 **Box Plot** | Spread, median & outliers by transport mode |
| 🎻 **Violin Plot** | Distribution shape beyond the box plot |
| 📈 **KDE Plot** | Smooth density estimation comparison |
| 🫧 **Bubble Chart** | Transport mode efficiency mapping |
| 🔗 **Pair Plot** | Pairwise numerical relationships |
| 📊 **Stacked Bar Chart** | Mode composition across time slots |
| 🗺️ **Treemap** | Student count by starting point |
| ☀️ **Sunburst Chart** | Transport mode breakdown by area |
| 🎲 **3D Scatter** | Multi-dimensional: Time × Cost × Satisfaction |
| 📍 **Strip Plot** | Individual data point visualization |
| 📈 **Joint Plot** | Bivariate analysis with marginal KDEs |
| 📊 **Area Plot** | Cumulative cost distribution by mode |
| 🖥️ **Analytics Dashboard** | Comprehensive multi-chart overview |

---

## 🔍 Key Findings

### 📊 Summary Statistics

| Metric | Value |
|--------|-------|
| 📝 **Total Responses** | 724 students |
| ⏱️ **Average Travel Time** | ~57 minutes |
| 💵 **Average One-Way Cost** | ~₹127 |
| 📊 **Median Travel Time** | ~55 minutes |
| 📈 **Travel Time Range** | 20 - 119 minutes |
| 💰 **Cost Range** | ₹10 - ₹445 |

### 🏆 Transport Mode Analysis

| Mode | Share | Avg Time | Avg Cost | Efficiency |
|------|-------|----------|----------|------------|
| 🚇 **Metro** | 18.09% | ~39 min | ~₹23 | ⭐⭐⭐⭐⭐ **Best Value** |
| 🚌 PMPML Bus | ~20% | ~60 min | ~₹35 | ⭐⭐⭐ Budget-friendly |
| 🛵 Two-Wheeler | ~22% | ~50 min | ~₹65 | ⭐⭐⭐⭐ Fast & economical |
| 🚕 Auto | ~12% | ~55 min | ~₹180 | ⭐⭐ Expensive |
| 🚗 Cab | ~15% | ~52 min | ~₹298 | ⭐ **Most Expensive** |
| 🚗 Carpool | ~13% | ~58 min | ~₹85 | ⭐⭐⭐ Shared economy |

### 🚦 Bottleneck Analysis

| Delay Point | Frequency | Impact |
|-------------|-----------|--------|
| 🔴 Waiting for Bus/Metro | 133 cases | Highest frequency |
| 🔴 Hinjewadi Traffic | 83 cases | Major IT hub bottleneck |
| 🟠 Chandni Chowk | 68 cases | Key junction |
| 🟠 University Circle | 52 cases | Educational zone |
| 🟡 Yerawada Junction | 45 cases | City connector |
| 🟢 None | ~18% | Smooth commute |

### ⏰ Peak Hour Patterns

| Time Slot | Share | Characteristics |
|-----------|-------|-----------------|
| 🌅 **Morning Peak** (8-11 AM) | 35% | Highest volume |
| 🌞 **Midday** (11 AM-4 PM) | 25% | Moderate traffic |
| 🌆 **Evening Peak** (4-8 PM) | 28% | Return commute |
| 🌙 **Night** (After 8 PM) | 12% | Lowest volume |

### 💡 Key Insights

1. **Metro Dominance**: Most efficient mode with lowest cost (₹23 avg) and fastest travel (~39 min)
2. **Cost-Time Paradox**: Cabs cost 10x more than Metro but save only ~5 minutes average
3. **Morning Rush**: 35% of all commutes occur during morning peak hours
4. **Satisfaction Mystery**: No strong correlation between cost/time and satisfaction - comfort matters
5. **Kothrud Hub**: Highest student representation (15.7%) as origin point

---

## 📋 Results & Conclusion

### 🎯 Primary Findings

> **Metro emerges as the optimal transport mode** for student commuting in Pune, offering the best cost-time efficiency ratio. Students traveling from Kothrud and Wakad areas face the longest commutes due to distance and traffic bottlenecks.

### ✅ Objectives Achieved

- ✅ Identified Metro as the preferred efficient transport mode
- ✅ Quantified morning peak (8-11 AM) as highest commute volume
- ✅ Mapped major bottlenecks: Hinjewadi Traffic, Waiting Times
- ✅ Established cost-time trade-off baseline for decision-making
- ✅ Created actionable recommendations for city planners

### 📌 Recommendations

| For Students | For Authorities |
|--------------|-----------------|
| Prefer Metro for cost efficiency | Expand Metro coverage to underserved areas |
| Avoid peak hours when possible | Implement traffic management at identified bottlenecks |
| Consider two-wheelers for medium distances | Introduce dedicated bus lanes during peak hours |
| Carpool for shared economy benefits | Launch student discount programs |

---

## 🚀 Future Scope

| # | Enhancement | Description |
|---|-------------|-------------|
| 1 | **Machine Learning Models** | Predict travel time based on route, mode, and time |
| 2 | **Real-time Dashboard** | Live tracking using APIs (Google Maps, Uber) |
| 3 | **Route Optimization** | Algorithmic suggestions for best routes |
| 4 | **Mobile App** | Student commute assistant application |
| 5 | **Expanded Dataset** | Multi-city comparison study |
| 6 | **Sentiment Analysis** | Analyze open-ended feedback comments |
| 7 | **Time Series Analysis** | Temporal pattern analysis |

---

## 🌐 Interactive Website

This project includes a fully functional **interactive web dashboard** for exploring the data visually.

### Features

- 🎨 **Dark/Light Mode** toggle
- 📊 **16+ Interactive Charts** using Plotly.js
- 📱 **Fully Responsive** design
- ⚡ **Smooth Animations** with GSAP
- 🔍 **Real-time Filters** for chart categories
- 📋 **Data Preview Table** with sample records

### Live Demo

```bash
# Navigate to website folder
cd "Website for Mini-Project Analysis"

# Open in browser
open index.html

# Or serve locally
python -m http.server 8000
# Visit http://localhost:8000
```

---

## 🏃 How to Run

### Prerequisites

```bash
# Python 3.8+ required
python --version

# Install dependencies
pip install pandas numpy matplotlib seaborn plotly jupyter
```

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/theTanmayAgarwal/EDA-MiniProject-A3_Group1.git
cd EDA-MiniProject-A3_Group1

# 2. Launch Jupyter Notebook
jupyter notebook "Student Commute EDA Mini-Project.ipynb"

# 3. Run all cells sequentially
# Kernel → Restart & Run All
```

### Google Colab (Alternative)

[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/)

1. Upload `student_commute_data_google_form.csv` to Colab
2. Open the notebook file
3. Run all cells

---

## 👥 Contributors

<table align="center">
<tr>
<td align="center" width="50%">

**Tanmay Agarwal**
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat-square&logo=github)](https://github.com/)
- 🎓 PRN: 25070123158
- 🔧 Lead Developer
- 📊 Data Analysis & Visualization
- 🌐 Web Development

</td>
<td align="center" width="50%">

**Tannishtha Gupta**
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?style=flat-square&logo=github)](https://github.com/)
- 🎓 PRN: 25070123049
- 📝 Co-Developer
- 📋 Data Collection
- 📑 Documentation

</td>
</tr>
</table>

**EnTC A3 — Group 1 | B.Tech Semester 2**
**Symbiosis Institute of Technology, Pune**

---

## 🙏 Acknowledgements

- **Prof. Snehal Bhosale** — EDA Faculty, for guidance and support
- **724 Students** — For participating in the survey
- **Symbiosis Institute of Technology** — Academic support
- **Open Source Community** — Pandas, Matplotlib, Seaborn, Plotly

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 EnTC A3 Group 1

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

<div align="center">

**Made by Tanmay Agarwal & Tannishtha Gupta | B.Tech Sem 2**

**© 2026 Student Daily Commute Analysis. All rights reserved.**

</div>
