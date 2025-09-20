import axios from 'axios';

// 1. Configure an axios instance with a base URL.
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

/**
 * Fetches all available class levels.
 * @returns {Promise<Array>} A list of classes.
 */
export const getClasses = async () => {
  try {
    const response = await API.get('/classes');
    return response.data;
  } catch (error) {
    console.error('Error fetching classes:', error);
    throw error;
  }
};

/**
 * Fetches the subjects for a specific class level.
 * @param {number | string} level - The class level.
 * @returns {Promise<Array>} A list of subjects.
 */
export const getSubjects = async (level) => {
  try {
    const response = await API.get(`/subjects/${level}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching subjects for level ${level}:`, error);
    throw error;
  }
};
/**
 * Fetches the syllabus for a specific subject in a class level.
 * @param {number | string} level - The class level.
 * @param {string} subject - The name of the subject.
 * @returns {Promise<Object>} The syllabus data.
 */
export const getSyllabus = async (level, subject) => {
  try {
    // URL-encode the subject to handle spaces or special characters
    const encodedSubject = encodeURIComponent(subject);
    const response = await API.get(`/syllabus/${level}/${encodedSubject}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching syllabus for level ${level}, subject ${subject}:`, error);
    throw error; // Re-throw the error to be handled by the calling component
  }
};

/**
 * Posts user progress data to the server.
 * @param {Object} data - The progress data to be saved.
 * @returns {Promise<Object>} The server's response.
 */
export const postProgress = async (data) => {
  try {
    const response = await API.post('/progress', data);
    return response.data;
  } catch (error) {
    console.error('Error posting progress:', error);
    throw error;
  }
};

export default API;