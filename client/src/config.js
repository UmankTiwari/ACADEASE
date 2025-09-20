// Configuration for different environments
const config = {
  development: {
    API_BASE_URL: 'http://localhost:3003'
  },
  production: {
    // Update this with your actual backend URL when deployed
    API_BASE_URL: 'https://your-backend-url.railway.app' // or your hosted backend URL
  }
};

const environment = process.env.NODE_ENV || 'development';
export default config[environment];

