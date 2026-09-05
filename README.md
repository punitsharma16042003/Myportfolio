# 🔬 Pankaj Sharma - Chemistry Researcher Portfolio Website
### Modern Scientific & Academic Portfolio (HTML5, CSS3, Vanilla JS)

A clean, responsive, and academic-themed portfolio tailored for a **Chemistry Researcher, Applied Nanochemist, and Research Chemist**, hosted on **GitHub Pages**.

🔗 **Live GitHub Repository**: [https://github.com/punitsharma16042003/Myportfolio](https://github.com/punitsharma16042003/Myportfolio)  
🌐 **Live Website**: [https://punitsharma16042003.github.io/Myportfolio/](https://punitsharma16042003.github.io/Myportfolio/)

---

## 📋 MASTER PROTOCOL: How to Add, Edit & Remove Entries by Yourself

Your entire website is **data-driven** by a single file:
👉 **[`portfolio-data.js`](portfolio-data.js)**

You do **NOT** need to write or edit any HTML or CSS tags. Whenever you want to add or remove anything, simply edit `portfolio-data.js`.

---

### 🟢 1. HOW TO ADD A NEW ENTRY

Open `portfolio-data.js` in any text editor (VS Code, Notepad, etc.). Locate the section where you want to add an entry, and paste the corresponding template below at the **top** of that list.

#### A. To Add a New Publication / Preprint
Locate `publications: [` (around line 185) and paste:
```javascript
    {
      id: "pub-new",
      title: "Your New Paper Title Here",
      authors: ["Pankaj Sharma", "Co-Author Name", "PI Name"],
      journal: "Journal Name / Preprint Server (e.g. ACS Applied Nano Materials)",
      year: "2026",
      doi: "https://doi.org/10.xxxx/xxxx", // or null if in preparation
      type: "Journal Article", // or "Conference", "Review", "Preprint"
      badge: "Published", // or "Under Review", "In Preparation"
      abstract: "Brief 2-3 sentence abstract describing the novel findings, synthetic methods, or analytical limits of detection.",
      bibtex: `@article{sharma2026newpaper,
  title={Your New Paper Title Here},
  author={Sharma, Pankaj and Others},
  journal={Journal Name},
  year={2026}
}`
    },
```

#### B. To Add a New Certificate or Specialized Training
Locate `certificates: [` (around line 350) and paste:
```javascript
    {
      id: "cert-new",
      title: "Name of the Training Program / Certification",
      organization: "Issuing Body (e.g. IIT Delhi / Royal Society of Chemistry)",
      date: "2026",
      category: "Instrumentation Training", // Used for filter buttons
      badge: "Specialized Training", // Pill label
      description: "Brief summary of the instrumentation operated, analytical techniques learned, or coursework completed.",
      link: "https://verification-link.com", // or null if none
      highlight: true // true gives a prominent border, false for standard
    },
```

#### C. To Add a New GitHub / Coding Tool
Locate `githubProjects: [` (around line 135) and paste:
```javascript
    {
      id: "gh-new",
      title: "TOOL-NAME",
      tagline: "Short 5-Word Description of Application",
      description: "Detailed description of what the software does, what chemical/lab problem it solves, and how it automates workflow.",
      tags: ["Python", "JavaScript", "SQL", "Streamlit"],
      githubUrl: "https://github.com/punitsharma16042003/your-repo-name",
      stars: "Featured",
      status: "Active"
    },
```

#### D. To Add a New Experimental Research Project
Locate `projects: [` (around line 90) and paste:
```javascript
    {
      id: "lab-proj-new",
      title: "Project Title Describing Experimental Focus",
      institution: "Indian Institute of Technology (IIT), Ropar",
      period: "2026 – Present",
      category: "Nanotechnology", // or "Environmental Chemistry", "Catalysis"
      description: "Comprehensive summary of research scope, precursors utilized, and analytical parameters measured.",
      highlights: [
        "First key experimental finding or synthesis milestone.",
        "Second key finding regarding characterization (e.g. SEM, XRD, UV-Vis).",
        "Third key finding regarding real-world application or efficiency."
      ],
      tags: ["CQDs", "Nanomaterials", "Analytical Chemistry", "IIT Ropar"],
      link: null
    },
```

#### E. To Add a New Work / Research Experience Position
Locate `experience: [` (around line 240) and paste:
```javascript
    {
      id: "exp-new",
      role: "Your New Designation / Role",
      organization: "Organization / University / Institute Name",
      location: "City, State, Country",
      period: "MM/YYYY – Present",
      type: "Research & Development",
      bullets: [
        "First major responsibility, laboratory technique, or audit scope.",
        "Second major technical contribution, instrument calibrated, or parameter analyzed.",
        "Third major accomplishment, safety compliance outcome, or report authored."
      ]
    },
```

#### F. To Add a New Skill or Instrument
Locate `skills: {` (around line 300) and simply add a new string to the matching category:
```javascript
    instrumentation: [
      "Your New Instrument (e.g. NMR Spectroscopy)",
      "UV-Vis Spectrophotometer",
      // ...
    ],
```

---

### 🔴 2. HOW TO REMOVE AN ENTRY

1. Open `portfolio-data.js`.
2. Use **Ctrl + F** to search for the title of the entry you wish to remove (e.g., `AGRITECH` or `Advance Organic Chemistry`).
3. Delete the `{ ... }` block corresponding to that entry, including the trailing comma.
4. Save the file. That's it! The website will automatically adjust and remove that card.

**Example of Removing an Entry**:
```javascript
// BEFORE:
achievements: [
  {
    id: "cert-1",
    title: "Certificate A",
    ...
  },
  {
    id: "cert-2",
    title: "Certificate to Delete", // <-- DELETE THIS WHOLE BLOCK
    ...
  }
]

// AFTER:
achievements: [
  {
    id: "cert-1",
    title: "Certificate A",
    ...
  }
]
```

---

### ✏️ 3. HOW TO EDIT EXISTING INFORMATION
- **To update your bio or summary**: Edit `personalInfo.summary` in `portfolio-data.js`.
- **To update your ORCID link**: Edit `personalInfo.orcidUrl`.
- **To update your profile photo**: Replace `profile.jpg` in the root folder with your new photo (keep the name `profile.jpg`).
- **To update your resume / CV**: Replace `resume.pdf` in the root folder with your new PDF (keep the name `resume.pdf`).

---

### 🚀 4. HOW TO PUSH YOUR UPDATES TO GITHUB PAGES

Whenever you save changes in `portfolio-data.js`, run these 3 simple commands in your terminal to publish them live:

```bash
git add .
git commit -m "update: added new publication"
git push origin main
```

Within ~60 seconds, GitHub Pages will automatically update your live site!

---

## 📁 Project Architecture

```text
Myportfolio/
├── index.html            # Semantic HTML5 single-page structure
├── portfolio-data.js     # MASTER DATA FILE (Edit this to update content)
├── profile.jpg           # Clean framed profile picture
├── resume.pdf            # Downloadable CV PDF
├── gallery/              # Storage folder for research & lab photos
├── css/
│   ├── style.css         # Academic styling, typography, responsive layouts
│   └── theme.css         # Academic light theme design tokens
├── js/
│   ├── app.js            # Dynamic DOM renderer populating all 10 sections
│   └── interactions.js   # Molecular particle canvas, typewriter effect, scroll spy
├── Portfolio_Instruction_Manual.docx # Formatted Word Manual for offline use
└── README.md             # Master Protocol & Documentation
```
