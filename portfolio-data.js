/**
 * ==============================================================================
 * 🔬 CHEMISTRY RESEARCHER MASTER PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * 
 * WELCOME! This single file powers your ENTIRE website.
 * To update ANY section or add new achievements/papers/projects, simply edit below.
 * No HTML or CSS knowledge required!
 * 
 * SECTIONS IN THIS FILE:
 *  1. personalInfo       - Name, dynamic titles, bio summary, contact links, stats
 *  2. about              - Detailed academic biography, research pillars, and focus
 *  3. researchInterests  - Core scientific domains & focus areas
 *  4. projects           - Experimental & applied laboratory research projects
 *  5. githubProjects     - Computational tools, vibe-coding apps & software repositories
 *  6. publications       - Research papers, preprints, conference abstracts with BibTeX
 *  7. experience         - Chronological research timeline & academic appointments
 *  8. skills             - Scientific instruments, analytical testing, software, vibe-coding
 *  9. certificates       - IIT trainings, workshops, and accredited course certifications
 * 10. contact            - Direct academic inquiry details and profile links
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // ----------------------------------------------------------------------------
  // 1. PERSONAL INFORMATION & HERO
  // ----------------------------------------------------------------------------
  personalInfo: {
    name: "Pankaj Sharma",
    preferredName: "Pankaj",
    titles: [
      "Research Chemist",
      "Applied Nanochemist",
      "Environmental & Lab Analyst",
      "Chemistry Educator",
      "Vibe Coder & AI Tool Builder"
    ],
    statusPill: "Project Associate @ IIT Ropar • Open to Research Collaborations",
    tagline: "Bridging the gap between molecular chemistry, environmental monitoring, and AI-assisted scientific computing.",
    location: "Agra, Uttar Pradesh, India",
    email: "punitsharma16042003@gmail.com",
    phone: "+91 9927774931",
    githubUsername: "punitsharma16042003",
    githubUrl: "https://github.com/punitsharma16042003",
    linkedinUrl: "https://linkedin.com/in/punitsharma16042003",
    googleScholarUrl: "https://scholar.google.com", // Replace with your Google Scholar profile URL
    orcidId: "0000-0002-XXXX-XXXX",               // Replace with your ORCID iD
    orcidUrl: "https://orcid.org",                 // Replace with your ORCID URL
    resumePdfUrl: "resume.pdf",                   // Kept in root folder as resume.pdf
    profileImageUrl: "profile.jpg",               // Profile image in root folder

    // Floating badges beside profile photo
    heroBadges: {
      top: {
        icon: "⚗️",
        title: "IIT Ropar",
        sub: "Project Associate"
      },
      bottom: {
        icon: "💻",
        title: "AI & Vibe Coder",
        sub: "Scientific Software"
      }
    },

    summary: "With a strong foundation in chemistry and hands-on research experience, I specialize in interdisciplinary research spanning materials science, environmental monitoring, nanotechnology, and AI-driven computational workflows. My expertise encompasses advanced laboratory experimentation, analytical characterization (ICP-MS, AAS, SEM, XRD), nanomaterial synthesis, and rapid prototyping of scientific research software.",
    
    // Quick Academic & Research Metric Badges
    stats: [
      { label: "Software & AI Tools", value: "5+" },
      { label: "IIT Research Projects", value: "3+" },
      { label: "Advanced Instruments", value: "15+" },
      { label: "Years Lab & Teaching", value: "4+" }
    ]
  },

  // ----------------------------------------------------------------------------
  // 2. ABOUT SECTION
  // ----------------------------------------------------------------------------
  about: {
    leadParagraph: "I am a Chemistry Researcher and Applied Nanochemist dedicated to solving critical environmental and industrial challenges through sustainable nanomaterials, rigorous analytical chemistry, and modern computational automation.",
    bioParagraphs: [
      "My ongoing research at the Indian Institute of Technology (IIT), Ropar focuses on the green synthesis of Carbon Quantum Dots (CQDs) for toxic heavy metal fluorometric detection, alongside industrial structural and technical audits under the Punjab Excise project. Previously, I contributed to water quality monitoring of the Satluj River basin in collaboration with the Punjab Pollution Control Board (PPCB).",
      "I believe the future of chemistry lies at the intersection of wet-lab experimental rigor and modern AI-assisted computational workflows ('Vibe Coding'). Beyond operating sophisticated instruments such as ICP-MS, AAS, XRD, and SEM, I actively develop custom software tools like CHEMLAB-PRO and Spectrocali to streamline laboratory data pipelines and spectroscopic calibration."
    ],
    pillars: [
      {
        icon: "atom",
        title: "Nanotechnology & Materials",
        description: "Green synthesis of carbon quantum dots, surface functionalization, quantum yield tuning, and fluorescence sensing of trace contaminants."
      },
      {
        icon: "microscope",
        title: "Analytical Instrumentation",
        description: "Hands-on expertise across ICP-MS, AAS, SEM, XRD, FTIR, GC, ED-XRF, and multi-parameter environmental water/soil testing."
      },
      {
        icon: "terminal",
        title: "Vibe Coding & Scientific AI",
        description: "Rapid prototyping of scientific workflow software, LIMS platforms, spectroscopic calibration engines, and literature extraction tools using Python and modern web technologies."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 3. RESEARCH INTERESTS
  // ----------------------------------------------------------------------------
  researchInterests: [
    {
      title: "Carbon Quantum Dots (CQDs)",
      category: "Nanomaterials",
      description: "Microwave-assisted green synthesis utilizing renewable precursors, surface ligand tailoring, and fluorescence quenching mechanisms for ultra-trace heavy metal detection in complex matrices.",
      icon: "atom",
      tags: ["CQDs", "Fluorescence", "Nanomaterials", "Green Synthesis"]
    },
    {
      title: "Environmental Wastewater Remediation",
      category: "Environmental Chemistry",
      description: "Selective binding and removal of toxic heavy metals (Pb, Cd, Cr, As) from industrial effluent, organic dye degradation, and comprehensive river basin quality assessments.",
      icon: "droplet",
      tags: ["Water Remediation", "Heavy Metals", "Satluj River", "PPCB"]
    },
    {
      title: "Industrial Audits & Safety Compliance",
      category: "Industrial Chemistry",
      description: "Technical, process equipment, utilities, and structural audits across commercial distilleries, breweries, and ethanol plants for the Punjab Excise and Taxation Department.",
      icon: "clipboard-check",
      tags: ["Excise Audits", "Distilleries", "Ethanol Units", "Process Safety"]
    },
    {
      title: "Vibe Coding & Lab Automation",
      category: "Computational Chemistry",
      description: "AI-assisted programming, rapid prototyping, LIMS development, laboratory workflow automation, and DOI metadata extraction pipelines to eliminate laboratory manual overhead.",
      icon: "code",
      tags: ["AI Tools", "Python", "LIMS", "Automation", "Scientific Computing"]
    },
    {
      title: "Catalysis & Photocatalysis",
      category: "Green Chemistry",
      description: "Sustainable nanomaterial catalysts, reactive oxygen species (ROS) dynamics, nanobubbles, and solar-driven catalytic degradation of recalcitrant contaminants.",
      icon: "flame",
      tags: ["Photocatalysis", "ROS", "Nanobubbles", "Sustainable Materials"]
    },
    {
      title: "Analytical Spectroscopy",
      category: "Spectroscopy",
      description: "Precision trace elemental analysis, spectroscopic calibration algorithms, UV-Vis absorption, AAS, ICP-OES, and X-ray diffraction phase characterization.",
      icon: "activity",
      tags: ["UV-Vis", "AAS", "ICP-OES", "XRD", "Calibration"]
    }
  ],

  // ----------------------------------------------------------------------------
  // 4. EXPERIMENTAL & LABORATORY PROJECTS
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "lab-proj-1",
      title: "Green Synthesis of Carbon Quantum Dots (CQDs) for Heavy Metal Detection",
      institution: "Indian Institute of Technology (IIT), Ropar",
      period: "2026 – Present",
      category: "Nanotechnology",
      description: "Pioneering microwave-assisted hydrothermal synthesis protocols utilizing agricultural and low-cost precursors. Tuned surface functionalization to achieve high fluorescence quantum yields and selective fluorometric 'turn-off' sensing of toxic heavy metal ions in industrial wastewater.",
      highlights: [
        "Synthesized water-soluble CQDs under 10 nm size with tuned emission spectra.",
        "Demonstrated high selectivity and sensitivity for heavy metal ion quenching.",
        "Characterized particle morphology and structural properties using SEM, XRD, and FTIR."
      ],
      tags: ["Nanomaterials", "CQDs", "Green Chemistry", "Fluorescence Sensing", "IIT Ropar"],
      link: null
    },
    {
      id: "lab-proj-2",
      title: "Satluj River Basin Comprehensive Water Quality Monitoring",
      institution: "IIT Ropar & Punjab Pollution Control Board (PPCB)",
      period: "2025 – 2026",
      category: "Environmental Monitoring",
      description: "Executed extensive field sampling campaigns along critical stretches of the Satluj River. Conducted multi-parameter laboratory testing (DO, BOD, COD, nutrients, heavy metals) and formulated spatial pollution profile reports to identify municipal and industrial discharge hotspots.",
      highlights: [
        "Tested 25+ physicochemical and microbiological water quality parameters.",
        "Correlated heavy metal distributions with nearby industrial discharge points.",
        "Authored regulatory compliance dossiers submitted to PPCB."
      ],
      tags: ["Water Quality", "PPCB", "Environmental Monitoring", "ICP-OES", "Field Sampling"],
      link: null
    },
    {
      id: "lab-proj-3",
      title: "Punjab Excise Distillery, Brewery & Ethanol Plant Audits",
      institution: "IIT Ropar & Punjab Excise and Taxation Department",
      period: "2026 – Present",
      category: "Industrial Auditing",
      description: "Carried out technical and structural compliance audits of distilleries, breweries, bottling plants, and grain-based ethanol manufacturing facilities across Punjab to evaluate plant safety, environmental emissions, and equipment integrity.",
      highlights: [
        "Evaluated plant layouts, storage tanks, distillation columns, and effluent treatment systems.",
        "Assessed fire protection, safety mitigation protocols, and statutory compliance.",
        "Formulated technical audit reports detailing hazard hotspots and operational recommendations."
      ],
      tags: ["Industrial Chemistry", "Excise Project", "Technical Audits", "Safety Systems"],
      link: null
    }
  ],

  // ----------------------------------------------------------------------------
  // 5. GITHUB & COMPUTATIONAL PROJECTS (VIBE CODING)
  // ----------------------------------------------------------------------------
  githubProjects: [
    {
      id: "gh-proj-1",
      title: "CHEMLAB-PRO",
      tagline: "Laboratory Management & Research Workflow Suite",
      description: "A comprehensive digital laboratory management tool engineered to streamline chemical inventories, reagent safety sheets (MSDS), standard operating procedures (SOPs), and experimental run logs for research chemistry labs.",
      tags: ["Python", "JavaScript", "SQL", "Lab Management", "Workflow Automation"],
      githubUrl: "https://github.com/punitsharma16042003",
      stars: "Featured",
      status: "Active"
    },
    {
      id: "gh-proj-2",
      title: "Spectrocali",
      tagline: "Spectroscopic Calibration & Analytical Data Tool",
      description: "An analytical application built for rapid calibration curve fitting, Beer-Lambert law validation, baseline subtraction, and error estimation across UV-Vis and atomic absorption spectra datasets.",
      tags: ["Python", "Data Analysis", "Spectroscopy", "Mathematics", "GUI"],
      githubUrl: "https://github.com/punitsharma16042003",
      stars: "Featured",
      status: "Active"
    },
    {
      id: "gh-proj-3",
      title: "SmartLIMS",
      tagline: "Laboratory Information Management System",
      description: "Modern, lightweight LIMS solution specifically customized for environmental testing labs to manage water sample batches, regulatory parameter limits (BOD, COD, Heavy Metals), and chain-of-custody documentation.",
      tags: ["JavaScript", "HTML/CSS", "Database", "QA/QC", "LIMS"],
      githubUrl: "https://github.com/punitsharma16042003",
      stars: "Featured",
      status: "Active"
    },
    {
      id: "gh-proj-4",
      title: "AGRITECH",
      tagline: "Agricultural & Experimental Chemical Data Platform",
      description: "Specialized data suite for logging and analyzing agronomic variables, soil micronutrient parameters, fertilizer application kinetics, and environmental conditions across experimental field plots.",
      tags: ["Python", "Agritech", "Data Modeling", "AI Tools"],
      githubUrl: "https://github.com/punitsharma16042003",
      stars: "Open Source",
      status: "Active"
    },
    {
      id: "gh-proj-5",
      title: "DOI-EXTRACTER",
      tagline: "Research Literature & Citation Extraction Utility",
      description: "Automated research pipeline to extract bibliographic metadata, abstracts, citation graphs, and DOIs from PDF libraries and web databases to accelerate scientific literature review workflows.",
      tags: ["Python", "Web Scraping", "Research Tools", "Automation"],
      githubUrl: "https://github.com/punitsharma16042003",
      stars: "Utility",
      status: "Active"
    }
  ],

  // ----------------------------------------------------------------------------
  // 6. PUBLICATIONS & PREPRINTS (EASY TO REPLACE PLACEHOLDERS)
  // ----------------------------------------------------------------------------
  publications: [
    {
      id: "pub-1",
      title: "Microwave-Assisted Green Synthesis of Carbon Quantum Dots for Fluorometric Detection of Heavy Metals in Industrial Wastewater",
      authors: ["Pankaj Sharma", "Research Collaborators", "Principal Investigator"],
      journal: "Under Review / Manuscript in Preparation",
      year: "2026",
      doi: null,
      type: "Journal Article",
      badge: "In Preparation",
      abstract: "This work demonstrates an eco-friendly, rapid microwave-assisted synthesis of high-fluorescence carbon quantum dots (CQDs) derived from low-cost renewable biomass. The surface-functionalized CQDs exhibit selective fluorescence quenching upon interaction with target heavy metal ions, achieving parts-per-billion detection limits suitable for industrial effluent monitoring.",
      bibtex: `@article{sharma2026cqd,
  title={Microwave-Assisted Green Synthesis of Carbon Quantum Dots for Fluorometric Detection of Heavy Metals in Industrial Wastewater},
  author={Sharma, Pankaj and Collaborators},
  journal={Manuscript in Preparation},
  year={2026}
}`
    },
    {
      id: "pub-2",
      title: "Spatial Water Quality Assessment and Pollution Hotspot Profiling of the Satluj River Basin",
      authors: ["Pankaj Sharma", "Environmental Research Group"],
      journal: "Technical Research Report / Punjab Pollution Control Board (PPCB)",
      year: "2026",
      doi: null,
      type: "Technical Report",
      badge: "Technical Report",
      abstract: "A comprehensive empirical investigation of 25+ physicochemical parameters across multiple monitoring stations along the Satluj River. Statistical correlation and GIS spatial mapping elucidate municipal drainage and industrial discharge points, informing regulatory compliance and remediation strategies.",
      bibtex: `@techreport{sharma2026satluj,
  title={Spatial Water Quality Assessment and Pollution Hotspot Profiling of the Satluj River Basin},
  author={Sharma, Pankaj},
  institution={IIT Ropar & Punjab Pollution Control Board},
  year={2026}
}`
    },
    {
      id: "pub-3",
      title: "Automated Spectroscopic Calibration and Real-Time Analytical Curve Validation in High-Throughput Laboratories",
      authors: ["Pankaj Sharma"],
      journal: "Conference Abstract / Computational Chemistry Showcase",
      year: "2025",
      doi: null,
      type: "Conference Proceeding",
      badge: "Conference",
      abstract: "Presents the architectural design and validation of Spectrocali, an open-source analytical tool designed to automate baseline corrections, Beer-Lambert regression modeling, and standard addition calculations for UV-Vis and atomic absorption datasets.",
      bibtex: `@inproceedings{sharma2025spectrocali,
  title={Automated Spectroscopic Calibration and Real-Time Analytical Curve Validation in High-Throughput Laboratories},
  author={Sharma, Pankaj},
  booktitle={Computational Chemistry Showcase},
  year={2025}
}`
    }
  ],

  // ----------------------------------------------------------------------------
  // 7. RESEARCH & PROFESSIONAL EXPERIENCE TIMELINE
  // ----------------------------------------------------------------------------
  experience: [
    {
      id: "exp-1",
      role: "Project Associate (PAT-1) – Industrial Auditing",
      organization: "Indian Institute of Technology (IIT), Ropar",
      location: "Punjab, India",
      period: "06/2026 – Present",
      type: "Industrial Research & Auditing",
      bullets: [
        "Collaborate with Punjab Excise and Taxation Department to conduct structural and technical audits of distilleries, breweries, bottling plants, and ethanol manufacturing units under the Punjab Excise project.",
        "Assess plant layout, production and storage infrastructure, process equipment, utilities, safety systems, fire protection, and environmental management practices for compliance with statutory requirements.",
        "Prepared technical audit observations and recommendations, identifying infrastructure gaps, operational risks, maintenance requirements, and opportunities for improved safety and regulatory compliance."
      ]
    },
    {
      id: "exp-2",
      role: "Project Associate (PAT-1) – Nanotechnology",
      organization: "Indian Institute of Technology (IIT), Ropar",
      location: "Punjab, India",
      period: "06/2026 – Present",
      type: "Nanomaterials Research",
      bullets: [
        "Worked on the green synthesis of carbon quantum dots using low-cost precursors and microwave-assisted methods.",
        "Focused on controlling particle size, yield, and surface functionalization to enhance fluorescence and selective binding of heavy metals in wastewater.",
        "Explored applications of CQDs in environmental sensing, pollutant detection, and catalytic degradation of industrial contaminants."
      ]
    },
    {
      id: "exp-3",
      role: "Research Project Assistant",
      organization: "Indian Institute of Technology (IIT), Ropar",
      location: "Punjab, India",
      period: "10/2025 – 06/2026",
      type: "Environmental Monitoring",
      bullets: [
        "Worked with the Punjab Pollution Control Board (PPCB) on water quality monitoring and assessment of the Satluj River.",
        "Conducted field sampling and laboratory analysis to evaluate overall water quality and pollution levels across seasonal sampling cycles.",
        "Gained experience in pollution source identification, environmental data interpretation, and preparation of technical reports in accordance with regulatory standards."
      ]
    },
    {
      id: "exp-4",
      role: "PGT Chemistry Educator and Assessment Coordinator",
      organization: "Kunal Public School",
      location: "Agra, India",
      period: "04/2025 – 10/2025",
      type: "Secondary Education & Coordination",
      bullets: [
        "Instructed senior secondary curricula in organic, inorganic, and physical chemistry with laboratory demonstrations.",
        "Coordinated academic evaluation procedures, lab safety guidelines, and examination benchmarking."
      ]
    },
    {
      id: "exp-5",
      role: "Chemistry Educator and Lab Incharge",
      organization: "S. A. S Educational Institute (Part-time)",
      location: "Agra, India",
      period: "02/2022 – 04/2025",
      type: "Laboratory Management & Teaching",
      bullets: [
        "Supervised chemical reagent inventories, apparatus maintenance, and experimental protocols.",
        "Mentored students in foundational analytical experiments, titrations, and qualitative salt analyses."
      ]
    },
    {
      id: "exp-6",
      role: "Science Teacher and Lab Incharge",
      organization: "R R Inter College (Part-time)",
      location: "Agra, India",
      period: "02/2022 – 04/2024",
      type: "Instruction & Lab Setup",
      bullets: [
        "Supervised laboratory setups, safety protocols, and student practical work across physical sciences."
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // 8. TECHNICAL & RESEARCH SKILLS MATRIX
  // ----------------------------------------------------------------------------
  skills: {
    instrumentation: [
      "UV-Vis Spectrophotometer",
      "AAS (Atomic Absorption)",
      "ICP-OES",
      "ICP-MS",
      "FTIR Spectroscopy",
      "Gas Chromatography (GC)",
      "SEM (Scanning Electron Microscopy)",
      "XRD (X-Ray Diffraction)",
      "ED-XRF & WD-XRF",
      "BET Surface Area Analyzer",
      "HPLC",
      "IR-MS (Liquid & Solid)",
      "DO & Conductivity Meters",
      "COD Digester & BOD Incubator",
      "Turbidimeter & TDS Meters",
      "4-Channel Air Sampler",
      "Muffle Furnace & Centrifuge",
      "Filtration & Digestion Units"
    ],

    analyticalParameters: [
      "pH, Temperature & Colour",
      "TDS & TSS",
      "DO, BOD & COD",
      "Total & Fecal Coliform",
      "Heavy Metals Analysis",
      "SAR & RSC",
      "MLSS & MLVSS",
      "SV30 & SVI",
      "Nitrogen & Phosphorus Species",
      "Oil & Grease",
      "Sulphide, Sulphate & Chloride",
      "Fluoride & Phenolic Compounds",
      "Alkalinity & Bioassay"
    ],

    computationalAndVibeCoding: [
      "Vibe Coding & Rapid AI Prototyping",
      "Python (Data Analysis & Scripting)",
      "JavaScript (ES6+) & Modern Web",
      "HTML5 & CSS3 Design",
      "SQL & Relational Databases",
      "LaTeX & Overleaf Scientific Typesetting",
      "Git & GitHub Workflows",
      "VS Code & AI Developer Extensions",
      "Workflow Automation",
      "LLM Prompt Engineering for Science"
    ],

    scientificSoftware: [
      "ChemDraw & ChemSketch",
      "Avogadro & GaussView",
      "BioRender",
      "Origin & SciDAVis",
      "QGIS & Google Earth Pro",
      "Power BI & Microsoft Excel",
      "PubChem & Protein Data Bank (PDB)",
      "Zotero, Mendeley & Obsidian",
      "Adobe InDesign, Photoshop & Canva",
      "SpectroGryph & Fiji",
      "FreeCAD & Fusion 360",
      "R Studio & EPA PMF"
    ]
  },

  // ----------------------------------------------------------------------------
  // 9. CERTIFICATIONS & SPECIALIZED TRAINING
  // ----------------------------------------------------------------------------
  certificates: [
    {
      id: "cert-1",
      title: "Sophisticated Instrument Operator Training Program",
      organization: "Indian Institute of Technology (IIT), Jodhpur",
      date: "2024",
      category: "Instrumentation Training",
      badge: "Advanced Training",
      description: "Rigorous operational training on advanced analytical instrumentation: ED-XRF, XRD, BET, HPLC, SEM, ICP-MS, AAS, FTIR, and GC.",
      link: null,
      highlight: true
    },
    {
      id: "cert-2",
      title: "Trace Elements Analysis in Water and Solid Samples",
      organization: "Indian Institute of Technology (IIT), Kanpur",
      date: "2024",
      category: "Research Training",
      badge: "Specialized Training",
      description: "Hands-on analytical training covering IR-MS liquid and solid analyzer, ICP-MS, GC, and WD-XRF for trace elemental profiling.",
      link: null,
      highlight: true
    },
    {
      id: "cert-3",
      title: "Satellite Data Analysis for Weather and Climate",
      organization: "Indian Institute of Tropical Meteorology (IITM), Pune",
      date: "2024",
      category: "Atmospheric Science",
      badge: "Certification",
      description: "Specialized coursework on satellite remote sensing data interpretation, atmospheric physics, and climate modeling techniques.",
      link: null,
      highlight: false
    },
    {
      id: "cert-4",
      title: "Principles of Chemical Science",
      organization: "MIT OpenCourseWare (MIT OCW)",
      date: "2023",
      category: "Academic",
      badge: "Course Completion",
      description: "Foundational mastery of chemical principles, quantum mechanics in atomic systems, thermodynamics, and molecular bonding.",
      link: null,
      highlight: false
    },
    {
      id: "cert-5",
      title: "Advance Organic Chemistry",
      organization: "UCI Open (University of California, Irvine)",
      date: "2023",
      category: "Organic Synthesis",
      badge: "Course Completion",
      description: "In-depth study of stereoelectronic effects, synthetic reaction mechanisms, functional group interconversions, and retrosynthesis.",
      link: null,
      highlight: false
    }
  ],

  // ----------------------------------------------------------------------------
  // 10. EDUCATION
  // ----------------------------------------------------------------------------
  education: [
    {
      degree: "Master of Science (M.Sc.) in Zoology",
      institution: "Dr. Bhimrao Ambedkar University",
      location: "Agra, India",
      period: "2026 – Present",
      description: "Interdisciplinary scientific focus bridging biological systems, environmental ecotoxicology, and nanomaterial bio-compatibility."
    },
    {
      degree: "Master of Science (M.Sc.) in Chemistry",
      institution: "Dr. Bhimrao Ambedkar University",
      location: "Agra, India",
      period: "2024 – 2026",
      description: "Advanced chemical synthesis, analytical spectroscopy, physical chemistry, environmental nanotechnology, and research methodologies."
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "Dr. Bhimrao Ambedkar University",
      location: "Agra, India",
      period: "2021 – 2024",
      description: "Core physical, organic, and inorganic chemistry, laboratory experimentation, and qualitative/quantitative chemical analysis."
    }
  ],

  // ----------------------------------------------------------------------------
  // 11. LANGUAGES & ADDITIONAL COMPETENCIES
  // ----------------------------------------------------------------------------
  languages: [
    { language: "English", level: "Proficient" },
    { language: "Hindi", level: "Native" },
    { language: "German", level: "Beginner" }
  ],

  competencies: [
    "Scientific Documentation & Report Writing",
    "Data Interpretation & Quality Assurance (QA/QC)",
    "Laboratory Safety & Regulatory Auditing",
    "Photography & Videography for Scientific Documentation",
    "Graphic Designing for Scientific Figures & Publications",
    "Educational Technology & Curriculum Integration",
    "AI Tools & Workflow Automation"
  ]
};

// Expose globally for zero-dependency browser consumption
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
