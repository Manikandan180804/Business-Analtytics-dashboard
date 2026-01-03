# 📊 Business Analytics Dashboard

An interactive, responsive dashboard for visualizing business metrics and KPIs. Built with vanilla JavaScript, Chart.js, HTML, and CSS to practice data visualization and analytics concepts.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

## ✨ Features

### 📈 Interactive Charts
- **Line Chart** - Revenue trend analysis over 12 months
- **Bar Chart** - Product category performance comparison
- **Pie Chart** - Customer segment distribution
- **Doughnut Chart** - Regional sales breakdown

### 💼 Key Performance Indicators (KPIs)
- **Total Revenue** - Real-time revenue tracking with growth indicators
- **Active Users** - User engagement metrics
- **Sales Growth** - Month-over-month growth percentage
- **Conversion Rate** - Customer conversion analytics

### 🎨 Design Features
- **Premium UI/UX** - Modern, clean, and professional design
- **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile
- **Dark Theme** - Eye-friendly dark mode design
- **Smooth Animations** - Engaging micro-interactions and transitions
- **Glassmorphism Effects** - Modern frosted glass aesthetics
- **Interactive Hover Effects** - Dynamic user feedback

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manikandan180804/Business-Analtytics-dashboard.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Business-Analtytics-dashboard
   ```

3. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```
   - Then visit `http://localhost:8000`

## 📁 Project Structure

```
Business-Analtytics-dashboard/
│
├── index.html           # Main HTML structure
├── styles/
│   └── index.css       # Complete styling and animations
├── scripts/
│   └── main.js         # Chart logic and interactivity
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and data handling
- **Chart.js** - Professional chart rendering and visualization
- **Google Fonts** - Custom typography (Inter, Roboto)

## 📊 Data Visualization

The dashboard includes realistic mock data for demonstration purposes:

- **12 months** of revenue data
- **4 product categories** with sales metrics
- **3 customer segments** distribution
- **4 regional markets** performance

All data can be easily customized in `scripts/main.js`.

## 🎯 Use Cases

- **Business Analytics** - Track and visualize business metrics
- **Data Visualization Practice** - Learn Chart.js implementation
- **Portfolio Project** - Showcase web development skills
- **Dashboard Template** - Starting point for custom dashboards
- **Educational Purpose** - Learn responsive design and JavaScript

## 🌟 Customization

### Modify Data
Edit the data arrays in `scripts/main.js`:
```javascript
const revenueData = [30, 42, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85];
```

### Change Colors
Update the CSS color variables in `styles/index.css`:
```css
--primary-color: #667eea;
--secondary-color: #764ba2;
```

### Add More Charts
Use Chart.js documentation to add additional chart types:
```javascript
new Chart(ctx, {
    type: 'radar', // bar, line, pie, doughnut, radar, etc.
    data: yourData,
    options: yourOptions
});
```

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- 📱 **Mobile** - 320px and up
- 📱 **Tablet** - 768px and up
- 💻 **Desktop** - 1024px and up
- 🖥️ **Large screens** - 1440px and up

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Manikandan**
- GitHub: [@Manikandan180804](https://github.com/Manikandan180804)
- Repository: [Business-Analtytics-dashboard](https://github.com/Manikandan180804/Business-Analtytics-dashboard)

## 🙏 Acknowledgments

- **Chart.js** - Amazing charting library
- **Google Fonts** - Beautiful typography
- Inspired by modern analytics platforms like Google Analytics, Tableau, and Power BI

## 📈 Future Enhancements

- [ ] Add real-time data updates
- [ ] Integrate with backend API
- [ ] Export charts as images
- [ ] Add date range filtering
- [ ] Multi-theme support (light/dark toggle)
- [ ] User authentication
- [ ] Data export to CSV/Excel
- [ ] More chart types (funnel, gauge, heatmap)

---

<div align="center">
  <p>Made with ❤️ and JavaScript</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
