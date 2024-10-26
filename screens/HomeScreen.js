// screens/HomeScreen.js
import React, { useContext, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { FamilyContext } from '../context/FamilyContext';

const HomeScreen = ({ navigation }) => {
  const { families, addFamily, setFamilies } = useContext(FamilyContext);
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleNavigate = (family) => {
    navigation.navigate('FamilyDetail', { familyId: family.id });
  };

  const handleLongPress = (family) => {
    Alert.alert(
      "Delete Family",
      `Are you sure you want to delete ${family.name}?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => deleteFamily(family.id) }
      ]
    );
  };

  const deleteFamily = (familyId) => {
    setFamilies(families.filter(f => f.id !== familyId));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => addFamily({ id: Date.now().toString(), name: `Family ${families.length + 1}`, members: [] })}
      >
        <Animated.View style={[styles.addButton, { transform: [{ scale: scaleValue }] }]}>
          <Text style={styles.addButtonText}>Add Family</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <FlatList
        data={families}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onLongPress={() => handleLongPress(item)}
            onPress={() => handleNavigate(item)}
          >
            <Animated.View style={[styles.familyContainer, { transform: [{ scale: scaleValue }] }]}>
              <Text style={styles.familyText}>{item.name}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  familyContainer: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f0f8ff',
    elevation: 3,
  },
  familyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
