
import React from 'react';
import {name as appName} from './app.json';
import { Image,Button,View, Text,AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { RootStack } from './view/homeStackNavi.js'
import { RootTab } from './view/homeStackNavi.js'

// 这两句可以调用sdk的代码
// import {NativeModules} from 'react-native';
// NativeModules.TalkingData.trackEvent3("tab1 select","a",{"a":"b"});


function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}


//创建MainTab类 返回RootStack对象


export default class MainTab extends React.Component {
  render() {
    // return <Text>asdf</Text>
    // return <RootStack />;
    return <RootTab 
      onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = getActiveRouteName(currentState);
      const prevScreen = getActiveRouteName(prevState);

      if (prevScreen !== currentScreen) {
        // the line below uses the Google Analytics tracker
        // change the tracker here to use other Mobile analytics SDK.
        // alert('页面变化\n'+ prevScreen +' end \n'+ currentScreen + ' start ');

      }
    }}

    />;
  }
}

//注册 App
AppRegistry.registerComponent(appName, () => MainTab);
