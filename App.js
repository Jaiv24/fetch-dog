import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function App() {
  const [breed, setBreed] = useState('');
  const [dogData, setDogData] = useState([]);

  // Fetch a random dog image
  const fetchRandomDog = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogData([{ id: Date.now().toString(), image: response.data.message, title: 'Random Dog' }]);
  };

  // Fetch a dog image by breed
  const fetchBreedDog = async () => {
    if (!breed) {
      alert('Please enter a breed!');
      return;
    }
      const response = await axios.get(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`);
            setDogData([{ id: Date.now().toString(), image: response.data.message, title: `${breed} Dog` }]);
  };

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={styles.dogImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dog Breed Explorer</Text>
      </View>
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter a dog breed (e.g., husky)"
          value={breed}
          onChangeText={setBreed}
        />
      </View>
      <View style={styles.buttonSection}>
        <Button title="Get Random Dog" onPress={fetchRandomDog} color="#4CAF50" />
        <Button title="Get Breed Dog" onPress={fetchBreedDog} color="#2196F3" />
      </View>
      <View style={styles.listSection}>
        <FlatList
          data={dogData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text> No dogs yet! Try fetching.</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  header: {
    padding: 10,
    backgroundColor: '#FF9800',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputSection: {
    padding: 10,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  listSection: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    alignItems: 'center',
    marginVertical: 10,
  },
  listText: {
    fontSize: 18,
    marginBottom: 5,
  },
  dogImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});