import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectScreen } from './src/screens/BoxObjectScreen';
import { Contador1Screen } from './src/screens/Contador1Screen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionAbsolutaScreen } from './src/screens/PositionAbsolutaScreen';
import { PositionRelativaScreen } from './src/screens/PositionRelativaScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    // SafeAreaView es lo mismo que el SafeArea de Flutter.
    // Normalmente no se suele colocar aquí.
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <Contador1Screen /> */}
      {/* <BoxObjectScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionRelativaScreen /> */}
      {/* <PositionAbsolutaScreen /> */}
      {/* <FlexScreen/> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;