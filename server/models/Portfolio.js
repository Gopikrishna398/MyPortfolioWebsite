const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  profilePicture: {
    type: String,
    required: true
  },
  resume: {
    viewUrl: { type: String, required: true },
    downloadUrl: { type: String, required: true }
  },
  certifications: [{
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true }
  }],
  projects: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tech: [String],
    links: {
      github: String,
      live: String
    }
  }],
  achievements: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', PortfolioSchema);
