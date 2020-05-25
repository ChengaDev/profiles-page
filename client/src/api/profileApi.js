import axios from 'axios';

const BaseApi = () => {
    return axios.create({
        baseURL: 'http://localhost:3100',
        timeout: 3000
    });
};

export const getAllProfiles = async () => {
    const response = await BaseApi().get('/profiles');
    return response.data;
};

export const getProfile = async (id) => {
    const response = await BaseApi().get(`/profiles/${id}`);
    return response.data;
};

export const editProfile = async (profile) => {
    const response = await BaseApi().patch(`/profiles/${profile._id}`, {
        ...profile
    });
    return response.data;
};

export const createProfile = async (profile) => {
    const response = await BaseApi().post(`/profiles`, { ...profile });
    return response.data;
};

export const deleteProfile = async (id) => {
    await BaseApi().delete(`/profiles/${id}`);
};

export default {
    getAllProfiles,
    getProfile,
    editProfile,
    createProfile,
    deleteProfile
};
