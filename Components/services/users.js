import {client} from './serviceConfig';

export const createUsers = params =>
  client.post ('retailer/createretailer', params);
export const loginUsers = params => client.post ('auth/login', params);
export const EditUser = (params, token) =>
  client.post ('auth/edit-profile', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const ChangePassword = (params, token) =>
  client.put ('auth/change-password', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
