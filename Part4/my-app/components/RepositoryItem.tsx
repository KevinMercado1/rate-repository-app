import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const formatNumber = (num: number): string => {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num.toString();
};

interface Repository {
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

interface RepositoryItemProps {
  repository: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repository }) => {
  return (
    <View testID="RepositoryItem">
      <View style={styles.container} testID="repositoryItem">
        <Image
          source={{
            uri: repository.ownerAvatarUrl || 'default-avatar-url.png',
          }}
          style={styles.avatar}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.fullName}>{repository.fullName}</Text>
          <Text style={styles.description}>{repository.description}</Text>

          <View style={styles.languageContainer}>
            <Text style={styles.language}>{repository.language}</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>
                {formatNumber(repository.stargazersCount)}
              </Text>
              <Text style={styles.statLabel}>Stars</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>
                {formatNumber(repository.forksCount)}
              </Text>
              <Text style={styles.statLabel}>Forks</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{repository.reviewCount}</Text>
              <Text style={styles.statLabel}>Reviews</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{repository.ratingAverage}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#555',
    marginVertical: 5,
  },
  languageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#0366d6',
    borderRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 4,
  },
  language: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default RepositoryItem;
