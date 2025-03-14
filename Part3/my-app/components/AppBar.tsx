/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useSignOut from '../hooks/useSignOut';

const AppBar: React.FC = () => {
  const { data } = useQuery(ME);
  const signOut = useSignOut();
  const navigate = useNavigate();

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

          {data?.me ? (
            <TouchableOpacity onPress={() => signOut()}>
              <Text style={styles.tab}>Sign Out</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigate('/signin')}>
              <Text style={styles.tab}>Sign In</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

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

export default AppBar;
