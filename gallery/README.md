# 📸 Research Memories Gallery

Welcome to your **Research Memories Gallery**!

This folder is linked directly to your website's **Gallery** tab. Any photo you upload here will **automatically** be displayed on your portfolio website for visitors, professors, and collaborators to see!

---

## 🚀 How to Add Photos in 3 Easy Steps (No Coding Required!)

### Method 1: Directly via GitHub (Easiest & Fastest)
1. Open your repository on GitHub:
   👉 **[https://github.com/punitsharma16042003/Myportfolio/tree/main/gallery](https://github.com/punitsharma16042003/Myportfolio/tree/main/gallery)**
2. Click the **"Add file"** button in the top-right corner, then select **"Upload files"**.
3. **Drag and drop** your lab or fieldwork photos (from phone, camera, or PC).
4. Scroll down and click the green **"Commit changes"** button.

That's it! In less than a minute, your website will automatically discover and display the new photos in your **Gallery** tab.

---

## 💡 Naming Your Photos for Clean Automatic Titles

When you upload an image, the website automatically turns the file name into a clean title:

- `2024-Satluj-Water-Sampling.jpg` $\rightarrow$ **"Satluj Water Sampling"**
- `CQD-Fluorescence-Lab-IIT-Ropar.png` $\rightarrow$ **"CQD Fluorescence Lab IIT Ropar"**
- `AAS-Heavy-Metals-Run.jpeg` $\rightarrow$ **"AAS Heavy Metals Run"**

---

## 🎨 (Optional) Adding Custom Captions, Dates, and Categories

If you want a specific photo to have a custom description, location, or filter category (`Wet Lab`, `Fieldwork`, `Instrumentation`, `Conferences`), simply open:

👉 **`portfolio-data.js`**

Scroll down to the `gallery: [` list, and add your details:

```javascript
{
  id: "my-memory-1",
  image: "gallery/my-new-photo.jpg",
  title: "Hydrothermal Autoclave Synthesis Run",
  caption: "Synthesis of Carbon Quantum Dots at 180°C in Teflon autoclave.",
  category: "Wet Lab",
  date: "November 2024",
  location: "IIT Ropar Nanomaterials Lab"
},
```

---

## 📁 Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.svg`
- `.gif`