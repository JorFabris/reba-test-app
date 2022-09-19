import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  constructor() {}

  GET = async (key: string) => {
    return new Promise<string>((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(data => {
          if (data !== null) {
            resolve(data!);
            return;
          }
          resolve('NODATA');
        })
        .catch(err => {
          console.log('ERROR GET LOCAL STORAGE', err);
          reject('ERROR');
        });
    });
  };
  SET = (key: string, value: any) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, JSON.stringify(value))
        .then(data => {
          if (data !== null) {
            resolve(data!);
            return;
          }
        })
        .catch(err => {
          console.log('ERROR SET LOCAL STORAGE', err);
          reject('ERROR');
        });
    });
  };
  REMOVE = (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(key)
        .then(() => {
          resolve('REMOVED');
        })
        .catch(err => {
          console.log('ERROR REMOVE LOCAL STORAGE', err);
          reject('ERROR');
        });
    });
  };

  CLEAR = () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.clear()
        .then(() => {
          resolve('CLEARED');
        })
        .catch(err => {
          console.log('ERROR CLEAR LOCAL STORAGE', err);
          reject('ERROR');
        });
    });
  };
}

export default LocalStorage;
