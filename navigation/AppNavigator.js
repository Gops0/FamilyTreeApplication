// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FamilyDetailScreen from '../screens/FamilyDetailScreen';
import AddMemberScreen from '../screens/AddMemberScreen';
import EditFamilyScreen from '../screens/EditFamilyScreen';
import EditMemberScreen from '../screens/EditMemberScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FamilyDetail" component={FamilyDetailScreen} />
        <Stack.Screen name="AddMember" component={AddMemberScreen} />
        <Stack.Screen name="EditFamily" component={EditFamilyScreen} />
        <Stack.Screen name="EditMember" component={EditMemberScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
