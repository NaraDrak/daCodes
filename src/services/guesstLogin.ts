import axios from 'axios';

interface Login {
    success: boolean,
    guest_session_id: string,
    expires_at: Date;
}

export const createGuestSession = async ():Promise<Login> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            'Content-Type': 'application/json;charset=utf-8'
        },
    });

    return response.data;

  } catch (error) {
    console.error('Error creating guest session:', error);
    throw error;
  }
};

