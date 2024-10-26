// screens/AddMemberScreen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { FamilyContext } from '../context/FamilyContext';

const AddMemberScreen = ({ route, navigation }) => {
  const { familyId } = route.params;
  const { addMember } = useContext(FamilyContext);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleAddMember = () => {
    addMember(familyId, { id: Date.now().toString(), name, relationship });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Relationship" value={relationship} onChangeText={setRelationship} />
      <Button title="Add Member" onPress={handleAddMember} />
    </View>
  );
};

export default AddMemberScreen;
