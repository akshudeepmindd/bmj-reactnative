import {client} from './serviceConfig';

export const CategoryList = () =>
  client.get ('categorylist', {
    headers: {
      Authorization: `${token}`,
    },
  });
