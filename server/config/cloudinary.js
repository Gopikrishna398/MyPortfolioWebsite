const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config({ override: true });

// Configure Cloudinary with secure environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

/**
 * Helper to generate optimized Cloudinary URLs
 * @param {string} publicId - The public ID or full URL of the asset
 * @param {Object} options - Transformation options (width, height, crop, etc.)
 */
const getOptimizedUrl = (publicId, options = {}) => {
  if (!publicId) return '';
  
  // If it's already a full URL, we extract the public ID or just return it
  // But usually, we want to store public IDs in the DB for maximum flexibility
  return cloudinary.url(publicId, {
    fetch_format: 'auto',
    quality: 'auto',
    ...options
  });
};

module.exports = {
  cloudinary,
  getOptimizedUrl
};
