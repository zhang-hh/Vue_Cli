import myaxios from './myAxios';

export const getUsers = (q) =>myaxios.get('/search/users',{params:{q}});
