import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import { Route, Routes } from 'react-router-native';
import SignIn from './components/SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </View>
  );
};

export default Main;
