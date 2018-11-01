import React from 'react';
import { View, Text,Button } from 'react-native';
import { LogoTitle } from '../logoTitle.js'
import {TalkingDataAppAnalytics, TDACCOUNT} from '../../TalkingDataAppAnalytics.js'


export class Tab2Screen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle txt='AdTracking' />,
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>coming soon</Text>
        <Button
                    title={"参数测试"}
                    onPress={
                        () => {
                          TalkingDataAppAnalytics.setLogEnabled('错误类型');
                          TalkingDataAppAnalytics.setExceptionReportEnabled('错误类型');
                          TalkingDataAppAnalytics.setSignalReportEnabled('错误类型');
                          TalkingDataAppAnalytics.setSignalReportEnabled('错误类型');
                          TalkingDataAppAnalytics.setAntiCheatingEnabled('错误类型',null);
                          TalkingDataAppAnalytics.onRegister('1',null,undefined);
                          TalkingDataAppAnalytics.onLogin('1',null,undefined);
                          TalkingDataAppAnalytics.onEvent('1',null,undefined);
                          TalkingDataAppAnalytics.setGlobalKV(0.5,null);
                          TalkingDataAppAnalytics.removeGlobalKV(0.5);
                          TalkingDataAppAnalytics.onPageStart(0.5);
                          TalkingDataAppAnalytics.onPageEnd(0.5);
                          TalkingDataAppAnalytics.onPlaceOrder(0.5,null);
                          TalkingDataAppAnalytics.onOrderPaySucc(0.5,null,undefined);
                          TalkingDataAppAnalytics.onViewItem(0.5,null,undefined,null);
                          TalkingDataAppAnalytics.onAddItemToShoppingCart(0.5,null,undefined,null,null);
                          TalkingDataAppAnalytics.onViewShoppingCart(111);



                        }
                    }
                />

      </View>
    );
  }
}

