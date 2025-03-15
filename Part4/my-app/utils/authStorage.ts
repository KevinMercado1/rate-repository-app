import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  private namespace: string;

  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken(): Promise<string | null> {
    return await AsyncStorage.getItem(`${this.namespace}:token`);
  }

  async setAccessToken(accessToken: string): Promise<void> {
    await AsyncStorage.setItem(`${this.namespace}:token`, accessToken);
  }

  async removeAccessToken(): Promise<void> {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
