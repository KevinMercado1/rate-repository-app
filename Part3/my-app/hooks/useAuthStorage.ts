import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthStorage = () => {
  const getAccessToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem('auth:token');
  };

  const setAccessToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('auth:token', token);
  };

  const removeAccessToken = async (): Promise<void> => {
    await AsyncStorage.removeItem('auth:token');
  };

  return {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
  };
};

export default useAuthStorage;
