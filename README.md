# Family Tree Application

This is a React Native application for creating and visualizing family trees across multiple generations. Users can add, edit, and visualize family members and their relationships, using AsyncStorage for data persistence. Built with Expo, this app provides an intuitive interface for managing family structures with CRUD operations on profiles.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Application](#running-the-application)
- [App Structure](#app-structure)
- [Usage](#usage)


Video Link(Google Drive)
https://drive.google.com/file/d/12tE-jFh7w2FBsnqyf-foNLpz3spCQ0c6/view?usp=sharing


## Features

- **Family Tree Visualization**: View family connections and relationships graphically.
- **CRUD Operations**: Add, edit, and delete family member profiles.
- **Parent-Child Relationships**: Define and manage parent-child associations.
- **State Management**: Shared state across components with hooks and the Context API.
- **Data Persistence**: Store family member details using AsyncStorage.
- **User-Friendly Navigation**: Navigate through family lists and family details screens easily.

## Technologies Used

- **React Native**: Core framework.
- **Expo**: Development environment and platform for deployment.
- **React Navigation**: For seamless navigation between screens.
- **AsyncStorage**: Data storage solution for storing family member details.
- **Context API and Hooks**: State management.

## Setup and Installation

### Prerequisites

- **Node.js** (v14 or later recommended)
- **Expo CLI** (version 5.0 or later)
- **Git** (for cloning the repository)

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/family-tree-app.git
   cd family-tree-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Install Expo CLI** (if not already installed):
   ```bash
   npm install -g expo-cli
   ```

## Running the Application

1. **Start the Expo Server**:
   ```bash
   npm start
   ```

2. **Run on Physical Device or Emulator**:
   - To run on an iOS or Android emulator, select the platform from the Expo developer tools.
   - To run on a physical device, download the Expo Go app and scan the QR code generated in the terminal or browser.

3. **Building the Application (Optional)**:
   To create standalone builds for iOS or Android, refer to Expo’s build documentation:
   - [Build for Android](https://docs.expo.dev/build/setup/)
   - [Build for iOS](https://docs.expo.dev/build/setup/)

## App Structure

```
├── App.js                 # Entry point of the application
├── components/            # Reusable components (e.g., profile forms, family member list items)
├── screens/               # Main screens (e.g., FamilyListScreen, FamilyDetailScreen, AddEditMemberScreen)
├── context/               # Context for global state management
└── assets/                # Assets such as images, icons
```

## Usage

- **Adding Family Members**: Go to the Add/Edit screen and enter member details, including names, relationships, etc.
- **Viewing Family Details**: Click on a family from the list to view detailed relationships and profiles.
- **Editing and Deleting Members**: Use the edit option on a profile to make changes, or delete to remove a member from the tree.

