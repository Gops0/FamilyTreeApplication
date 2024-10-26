// screens/FamilyDetailScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { FamilyContext } from '../context/FamilyContext';
import FamilyMemberBox from '../components/FamilyMemberBox';

const FamilyDetailScreen = ({ route, navigation }) => {
    const { familyId } = route.params;
    const { families, addMember, updateFamily } = useContext(FamilyContext);
    const family = families.find(f => f.id === familyId);

    const [isEditingName, setIsEditingName] = useState(false);
    const [newFamilyName, setNewFamilyName] = useState(family.name);

    const handleSaveFamilyName = () => {
        updateFamily(familyId, { ...family, name: newFamilyName });
        setIsEditingName(false);
    };

    const handleMemberPress = (member) => {
        navigation.navigate('EditMember', { familyId, memberId: member.id });
    };

    return (
        <View style={styles.container}>
            {isEditingName ? (
                <View style={styles.editNameContainer}>
                    <TextInput
                        style={styles.input}
                        value={newFamilyName}
                        onChangeText={setNewFamilyName}
                    />
                    <Button title="Save" onPress={handleSaveFamilyName} />
                </View>
            ) : (
                <Text style={styles.familyName} onPress={() => setIsEditingName(true)}>
                    {family.name}
                </Text>
            )}

            <View style={styles.parentsContainer}>
                <View style={styles.parentBox}>
                    <Text style={styles.label}>Father</Text>
                    {family.members.find(member => member.relationship === 'Father') ? (
                        <FamilyMemberBox
                            member={family.members.find(member => member.relationship === 'Father')}
                            onPress={handleMemberPress}
                            isParent
                        />
                    ) : null}
                </View>

                <View style={styles.parentBox}>
                    <Text style={styles.label}>Mother</Text>
                    {family.members.find(member => member.relationship === 'Mother') ? (
                        <FamilyMemberBox
                            member={family.members.find(member => member.relationship === 'Mother')}
                            onPress={handleMemberPress}
                            isParent
                        />
                    ) : null}
                </View>
            </View>

            <View style={styles.childrenContainer}>
                <Text style={styles.label}>Children</Text>
                {family.members
                    .filter(member => !['Father', 'Mother'].includes(member.relationship))
                    .map((child) => (
                        <FamilyMemberBox key={child.id} member={child} onPress={handleMemberPress} />
                    ))}
            </View>

            <View style={styles.addMemberButtonContainer}>
                <Button title="Add Member" onPress={() => navigation.navigate('AddMember', { familyId })} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    familyName: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#333',
    },
    editNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        flex: 1,
        marginRight: 10,
    },
    parentsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    parentBox: {
        alignItems: 'center',
    },
    childrenContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    addMemberButtonContainer: {
        marginTop: 20,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default FamilyDetailScreen;
