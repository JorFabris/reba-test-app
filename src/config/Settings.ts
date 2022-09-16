export const _env = 'DEV';

export const BASE_URL = () => {
  switch (_env) {
    case 'DEV':
      return 'http://192.168.1.9:5010/api';
    default:
      return 'http://192.168.1.9:5010/api';
  }
};
