export const _env = 'DEV';

export const BASE_URL = () => {
  switch (_env) {
    case 'DEV':
      return 'https://reba-prueba-tec.herokuapp.com/api';
    default:
      return 'https://reba-prueba-tec.herokuapp.com/api';
  }
};
