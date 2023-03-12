//Essa função vai pegar o id do usuário que está autenticado e atribuir à variável userId
const token = localStorage.getItem('powerup');
const base64Url = token.split('.')[1];
const base64 = base64Url.replace('-', '+').replace('_', '/');
const decodedToken = JSON.parse(atob(base64));
export const userId = decodedToken.id;