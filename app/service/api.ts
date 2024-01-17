// services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-server.com/api', // 여기에 API 서버의 기본 URL을 설정하세요
  // 필요한 경우 추가 설정
});

export const fetchUserProfile = async (email) => {
  try {
    const response = await apiClient.get(`/profile/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
