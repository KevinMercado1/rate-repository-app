import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import useAuthStorage from './useAuthStorage';

const useSignOut = () => {
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const signOut = async (): Promise<void> => {
    try {
      await authStorage.removeAccessToken();
      await apolloClient.resetStore();
      navigate('/signin');
      console.log('Logout successfully');
    } catch (error) {
      console.error('Error to close session:', error);
    }
  };

  return signOut;
};

export default useSignOut;
