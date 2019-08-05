import React from 'react';
import { View, Text } from 'react-native';
import { LogoTitle } from '../logoTitle.js'


export class Tab3Screen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle txt='EAuth' />,
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>coming soon</Text>
      </View>
    );
  }
}

