/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useMutation, useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthenticateResponse {
  authenticate: {
    accessToken: string;
  };
}

const useSignIn = () => {
  const [mutate, { data, loading, error }] = useMutation<
    AuthenticateResponse,
    { credentials: SignInCredentials }
  >(AUTHENTICATE);

  const authStorage = new AuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signIn = async ({ username, password }: SignInCredentials) => {
    try {
      const { data } = await mutate({
        variables: { credentials: { username, password } },
      });

      if (data?.authenticate?.accessToken) {
        await authStorage.setAccessToken(data.authenticate.accessToken);
        await apolloClient.resetStore();
        navigate('/');
      }

      return data?.authenticate;
    } catch (e) {
      console.error('Authentication error:', e);
      throw new Error('Login Error');
    }
  };

  return { signIn, data, loading, error };
};

export default useSignIn;
