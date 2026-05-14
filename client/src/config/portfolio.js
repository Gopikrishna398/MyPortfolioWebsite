/**
 * Portfolio Configuration
 * Paste your Cloudinary URLs here to update your portfolio.
 */

export const portfolioConfig = {
  // Your Profile Picture
  profilePicture: "https://res.cloudinary.com/dshfllkus/image/upload/v1778737414/immmm_bnw2bf.jpg",

  // Resume Links
  resume: {
    viewUrl: "PASTE_YOUR_CLOUDINARY_RESUME_URL_HERE", // URL to view PDF
    downloadUrl: "PASTE_YOUR_CLOUDINARY_RESUME_URL_HERE", // Same URL or with fl_attachment
  },

  // Certifications
  certifications: [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy / Meta",
      date: "Aug 2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", // Replace with Cloudinary Image URL
    },
    {
      id: 2,
      title: "Cloud Solutions Architect",
      issuer: "AWS",
      date: "Jan 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80", // Replace with Cloudinary Image URL
    },
    {
      id: 3,
      title: "Data Science & ML",
      issuer: "Coursera",
      date: "Dec 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // Replace with Cloudinary Image URL
    },
    {
      id: 4,
      title: "Advanced JavaScript Concepts",
      issuer: "Frontend Masters",
      date: "Oct 2023",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80", // Replace with Cloudinary Image URL
    }
  ]
};
