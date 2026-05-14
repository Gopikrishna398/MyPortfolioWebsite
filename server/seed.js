const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Portfolio = require('./models/Portfolio');

dotenv.config({ override: true });

const initialData = {
  // Folder: portfolio/profile
  profilePicture: "https://res.cloudinary.com/dshfllkus/image/upload/v1778737414/immmm_bnw2bf.jpg",
  
  // Folder: portfolio/resume
  resume: {
    viewUrl: "https://res.cloudinary.com/dshfllkus/image/upload/v1778733774/resume_gopi_3_sziejk.pdf",
    downloadUrl: "https://res.cloudinary.com/dshfllkus/image/upload/v1778733774/resume_gopi_3_sziejk.pdf",
  },
  
  // Folder: portfolio/certificates
  certifications: [
    {
      title: "GFG Java DSA Certificate",
      issuer: "GeeksforGeeks",
      date: "Feb 2026",
      image: "https://res.cloudinary.com/dshfllkus/image/upload/v1778731880/GFGcertificate_ssbkzv.pdf",
    },
    {
      title: "Deloitte Technology Simulation Internship Certificate",
      issuer: "Deloitte",
      date: "Sep 2025",
      image: "https://res.cloudinary.com/dshfllkus/image/upload/v1778732107/Deloite_Technology_simulation_completion_certificate_uwpgwn.pdf",
    }
  ],
  
  // Folder: portfolio/projects
  projects: [
    {
      title: "DeployEase",
      description: "A comprehensive deployment automation platform. Streamlines the CI/CD pipeline, allowing developers to push code and automate server deployments with a single click.",
      tech: ["React", "Node.js", "Docker", "AWS"],
      image: "https://res.cloudinary.com/dshfllkus/image/upload/v1778731995/Landing_page_rolbhb.png",
      links: { github: "https://github.com/Gopikrishna398/DeployEase", live: "#" }
    },
    {
      title: "Smart Medical Assistance",
      description: "An AI-powered healthcare platform that connects patients with medical professionals. Features symptom checking and automated appointment scheduling.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://res.cloudinary.com/dshfllkus/image/upload/v1778738847/ChatGPT_Image_May_14_2026_11_36_35_AM_hhk9xw.png",
      links: { github: "https://github.com/Gopikrishna398/SmartMedicalAssistance", live: "#" }
    },
    {
      title: "Professional Portfolio Website",
      description: "My Professional Portfolio Website using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      image: "https://res.cloudinary.com/dshfllkus/image/upload/v1778739183/ChatGPT_Image_May_14_2026_11_42_27_AM_tqdx9f.png",
      links: { github: "https://github.com/Gopikrishna398/MyPortfolioWebsite", live: "#" }
    }
  ],
  
  // Folder: portfolio/achievements
  achievements: [
    {
      title: "Hackathon Winner",
      description: "First place in the Regional Innovation Challenge for building a sustainable tech solution.",
      date: "Oct 2023",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
    }
  ]
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    await Portfolio.findOneAndUpdate({}, initialData, { upsert: true, returnDocument: 'after' });

    console.log('Database updated successfully!');
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();
