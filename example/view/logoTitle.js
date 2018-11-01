import React from 'react';
import { Image,Button,View, Text } from 'react-native';

export class LogoTitle extends React.Component {



  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20}}>{this.props.txt}</Text>
       // <Image
       //  source={require('./../test.png')}
       //  style={{ width: 30, height: 30 }}
       //  />
      // </View>
    );
  }
}