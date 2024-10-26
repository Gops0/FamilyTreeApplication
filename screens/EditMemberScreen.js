// screens/EditMemberScreen.js
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { FamilyContext } from '../context/FamilyContext';

const EditMemberScreen = ({ route, navigation }) => {
    const { familyId, memberId } = route.params;
    const { families, updateFamily } = useContext(FamilyContext);
    const family = families.find(f => f.id === familyId);
    const member = family.members.find(m => m.id === memberId);

    const [name, setName] = useState(member.name);
    const [relationship, setRelationship] = useState(member.relationship);

    const handleUpdateMember = () => {
        const updatedMembers = family.members.map(m =>
            m.id === memberId ? { ...m, name, relationship } : m
        );
        updateFamily(familyId, { ...family, members: updatedMembers });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Relationship"
                value={relationship}
                onChangeText={setRelationship}
            />
            <Button title="Update Member" onPress={handleUpdateMember} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default EditMemberScreen;
