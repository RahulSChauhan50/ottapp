import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import OttContent from './assets/screens/OttContent';
const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        <OttContent />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
