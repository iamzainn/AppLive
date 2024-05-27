import { Sports } from '@/utils/types';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SportItem = ({ item }: { item: Sports }) => {
  const { id, name, live_link, img, isAvaliable } = item;

  const handleWatchLivePress = () => {
    if (isAvaliable) { // Corrected typo for consistency
      router.push("/StreamScreen?url=" + live_link);
      console.log('Navigate to live stream for', name);
    } else {
      console.log('Live stream unavailable for', name);
     
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.watchLiveContainer}>
          {isAvaliable ? ( 
            <TouchableOpacity style={styles.watchLiveButton} onPress={handleWatchLivePress}>
              <Text style={styles.watchLiveText}>Watch Live</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.unavailableText}>Unavailable</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between', // Align content vertically
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  watchLiveContainer: { // New style for better organization
    alignItems: 'flex-end', // Align watch live button/text to the right
  },
  watchLiveButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  watchLiveText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  unavailableText: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default SportItem;
