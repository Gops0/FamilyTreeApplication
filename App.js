// App.js
import React from 'react';
import { FamilyProvider } from './context/FamilyContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <FamilyProvider>
      <AppNavigator />
    </FamilyProvider>
  );
}
