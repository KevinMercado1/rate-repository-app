import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from './Main';
import theme from './theme';

const App: React.FC = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Main />

        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    paddingTop: 50,
  },
});

export default App;
