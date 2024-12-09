// In App.js in a new project

import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';


const SwitchNavigator = createSwitchNavigator({

  StackNavigator: {
    screen: StackNavigator,
    navigationOptions: {
      headerShown: false,
    }
  }
}
);

let AppContainer = createAppContainer(SwitchNavigator);
export const navigationRef = React.createRef();
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
function MainNavigator() {
  const navigator = React.useRef(null);


  return (
    <NavigationContainer ref={navigator}>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default MainNavigator;
