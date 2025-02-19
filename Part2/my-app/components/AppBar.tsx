/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    backgroundColor: '#24292e',
    paddingHorizontal: 15,
  },

  scrollView: {
    flexDirection: 'row',
  },
  tab: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

const AppBar: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#24292e' }}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          <Link to="/">
            <Text style={styles.tab}>Repositories</Text>
          </Link>
          <Link to="/signin">
            <Text style={styles.tab}>Sign in</Text>
          </Link>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AppBar;
