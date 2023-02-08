import React from 'react';
import { View } from 'react-native';
import UnityView from '@azesmway/react-native-unity';


function App(): JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <UnityView style={{ flex: 1 }} />
    </View>
  );
}

export default App;
