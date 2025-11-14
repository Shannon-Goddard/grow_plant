# Cannabis Plant Size Planning Tool
An interactive web application designed to help cannabis growers plan and understand plant size requirements for their cultivation space. This tool provides detailed guidance on vegetative timing, flowering stretch expectations, and space management for plants ranging from 1 to 6 feet in height.

## 🌱 Live Demo

**[View Live Application](https://shannon-goddard.github.io/grow_plant/)**

*Part of the GrowApp Cannabis ecosystem - [growappcannabis.guide](https://growappcannabis.guide)*

## 📋 Table of Contents

- [Features](#features)
- [Plant Size Guide](#plant-size-guide)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Integration](#integration)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Interactive Size Selection**: Choose target plant heights from 1-6 feet
- **Visual Growth Animations**: Animated GIFs showing plant development stages
- **Detailed Growth Information**: Comprehensive guidance for each size category
- **Space Planning Advice**: Critical information about flowering stretch and space requirements
- **Vegetative Timing Guidance**: Recommendations for optimal veg periods
- **Responsive Design**: Mobile-friendly interface with Bootstrap framework
- **Professional Branding**: Loyal9 LLC branded cultivation tool

## 🌿 Plant Size Guide

### Size Categories & Recommendations

| **Height** | **Veg Time** | **Key Considerations** |
|------------|--------------|------------------------|
| **1 Foot** | 4+ weeks recommended | Minimum viable size for decent yields |
| **2 Feet** | 2-4 weeks | Good for stealth/small spaces |
| **3 Feet** | 4-6 weeks | Account for flowering stretch |
| **4 Feet** | 6-8 weeks | Popular indoor size |
| **5 Feet** | 8-10 weeks | Requires adequate ceiling height |
| **6 Feet** | 10+ weeks | Needs HST or large grow space |

### Critical Growth Factors

- **Flowering Stretch**: Plants typically double in size during early flowering
- **Container Size**: Root space directly impacts final plant size
- **Light Quality**: Proper lighting essential for bud development
- **Space Planning**: Account for lights, exhaust, and clearance requirements

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Framework**: Bootstrap 4.0.0
- **Libraries**: jQuery 2.1.1, D3.js 4.11.0
- **Icons**: Font Awesome 4.7.0
- **Animations**: Custom GIF animations for each size category
- **Styling**: Custom CSS with responsive design

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shannon-Goddard/grow_plant.git
   cd grow_plant
   ```

2. **Open in browser**:
   ```bash
   # Simply open index.html in your web browser
   open index.html
   ```

3. **Or serve locally**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 📖 Usage

### Planning Your Grow

1. **Select Target Size**: Use the dropdown to choose your desired final plant height
2. **Review Growth Info**: Read detailed information about timing and requirements
3. **View Visual Guide**: Watch the animated growth progression
4. **Plan Your Space**: Use the flowering stretch information for space calculations

### Growth Planning Tips

- **Start Small**: New growers should begin with 2-3 foot targets
- **Account for Stretch**: Plan for plants to double in size during flowering
- **Container Matching**: Use appropriate pot sizes for your target height
- **Light Planning**: Ensure adequate light coverage for your chosen size

### Integration with GrowApp

This planning tool works seamlessly with other GrowApp components:

- **Strain Selection**: Use with [grow_data](../grow_data) to match strains to size goals
- **Nutrient Planning**: Coordinate with [grow_nutrients](../grow_nutrients) for feeding schedules
- **Space Optimization**: Integrate with [grow_filter](../grow_filter) for complete planning

## 📁 Project Structure

```
grow_plant/
├── pics/                    # Header images and graphics
│   ├── gif.gif
│   └── header.png
├── static/
│   ├── CSS/
│   │   └── style.css       # Custom styling
│   ├── images/             # Plant size animations and branding
│   │   ├── 1foot.gif       # 1-foot plant animation
│   │   ├── 2foot.gif       # 2-foot plant animation
│   │   ├── 3-4foot.gif     # 3-4 foot plant animation
│   │   ├── 5foot.gif       # 5-foot plant animation
│   │   ├── 6foot.gif       # 6-foot plant animation
│   │   └── logo.jpg        # Loyal9 branding
│   └── js/
│       ├── app.js          # Application logic
│       └── data.js         # Plant size data structure
├── index.html              # Main application interface
├── LICENSE                 # MIT License
└── README.md              # Project documentation
```

## 🔗 Integration

### Data Structure

Plant size data is structured for easy integration:

```javascript
{
  index: "0",
  height: "1 foot",
  info: "Detailed growing information and recommendations...",
  gif: "static/images/1foot.gif"
}
```

### API Compatibility

- Compatible with GrowApp main application
- Integrates with strain and nutrient databases
- Supports mobile and desktop interfaces
- Provides growth planning data for cultivation apps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/size-category`)
3. Commit changes (`git commit -am 'Add new size guidance'`)
4. Push to branch (`git push origin feature/size-category`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Copyright (c) 2025 Shannon Goddard | Loyal9 LLC**

## ⚠️ Disclaimer

This application is for educational and informational purposes only. Always follow local laws and regulations regarding cannabis cultivation. Growth information is provided as general guidance - actual results may vary based on genetics, environment, and cultivation methods.

## 📚 Additional Resources

- **Growth Guide Reference**: [GrowWeedEasy.com](https://www.growweedeasy.com/how-long-does-it-take-to-grow-weed)
- **Main Application**: [GrowApp Cannabis Guide](https://growappcannabis.guide)
- **Complete Ecosystem**: Explore all GrowApp tools for comprehensive cultivation planning

---

*Built with 🌱 by Shannon Goddard | Part of the Loyal9 LLC Cannabis Technology Suite*
