// components/FamilyMemberBox.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FamilyMemberBox = ({ member, onPress, isParent }) => (
  <TouchableOpacity onPress={() => onPress(member)} style={[styles.box, isParent && styles.parentBox]}>
    <Text style={styles.name}>{member.name}</Text>
    <Text style={styles.relationship}>{member.relationship}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  box: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#cce7ff',
    alignItems: 'center',
  },
  parentBox: {
    backgroundColor: '#8fc6f2',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  relationship: {
    fontSize: 12,
  },
});

export default FamilyMemberBox;
