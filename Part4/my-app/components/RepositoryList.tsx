import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const ItemSeparator: React.FC = () => <View style={styles.separator} />;

const RepositoryList: React.FC = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) return <Text style={styles.message}>Loading...</Text>;
  if (error)
    return <Text style={styles.message}>Error to reload the Repositories</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={repositories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  separator: {
    height: 10,
  },
  message: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RepositoryList;
