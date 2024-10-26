// screens/EditFamilyScreen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { FamilyContext } from '../context/FamilyContext';

const EditFamilyScreen = ({ route, navigation }) => {
  const { familyId } = route.params;
  const { families, updateFamily } = useContext(FamilyContext);
  const family = families.find(f => f.id === familyId);
  const [name, setName] = useState(family.name);

  const handleUpdateFamily = () => {
    updateFamily(familyId, { ...family, name });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Family Name" value={name} onChangeText={setName} />
      <Button title="Update Family" onPress={handleUpdateFamily} />
    </View>
  );
};

export default EditFamilyScreen;
