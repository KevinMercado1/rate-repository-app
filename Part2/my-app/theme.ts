import { Platform } from 'react-native';

interface Theme {
  fontFamily: string;
  colors: {
    primary: string;
    background: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#6200ee',
    background: '#f4f4f4',
  },
  fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
};

export default theme;
