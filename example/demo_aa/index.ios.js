/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TalkingDataAppAnalytics,TDPROFILE,TalkingDataShoppingCart} from './TalkingDataAppAnalytics.js'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View
} from 'react-native';

export default class demo_aa extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title={"getDeviceID"} 
          onPress={() => {
            TalkingDataAppAnalytics.getDeviceID((device_id)=>{
                  Alert.alert(device_id);
            });
          }} 
        />
        
        <Button 
          title={"setLogEnabled"} 
          onPress={() => {
            logEnable = false;
            TalkingDataAppAnalytics.setLogEnabled(logEnable);
          }} 
        />

        <Button 
          title={"setExceptionReportEnabled"} 
          onPress={() => {
            excpEnable = false;
            TalkingDataAppAnalytics.setExceptionReportEnabled(excpEnable);
          }} 
        />


        <Button 
          title={"setSignalReportEnabled"} 
          onPress={() => {
              signalEnable = false;
              TalkingDataAppAnalytics.setSignalReportEnabled(signalEnable);
          }} 
        />

        <Button 
          title={"setLatitudeLongitude"} 
          onPress={() => {
            lat = 30; //纬度
            lnt = 50; //经度
            TalkingDataAppAnalytics.setLatitudeLongitude(lat,lnt);
          }} 
        />
        <Button 
          title={"setAntiCheatingEnabled"} 
          onPress={() => {
            acEnable = false;
            TalkingDataAppAnalytics.setAntiCheatingEnabled(acEnable)
          }} 
        />

        <Button 
          title={"onRegister"} 
          onPress={() => {
            profileId = '123'; //账户id
            profileType = TDPROFILE.ANONYMOUS; //账户类型 枚举
            profileName = 'NickName'; //账户昵称
            TalkingDataAppAnalytics.onRegister(profileId,profileType,profileName);
        }} 
        />

        <Button 
          title={"onLogin"} 
          onPress={() => {
            profileId = '123'; //账户id
            profileType = TDPROFILE.ANONYMOUS; //账户类型 枚举
            profileName = 'NickName'; //账户昵称
            TalkingDataAppAnalytics.onLogin(profileId,profileType,profileName);
        }} 
        />

        <Button 
          title={"onEvent"} 
          onPress={() => {
            eventName = 'click_btn'; //事件名称
            eventLabel = 'my_custom_label'; //事件标签
            parameter = {'btn_name':'xx_btn','btn_color':'xxcolor'} //事件参数
            TalkingDataAppAnalytics.onEvent(eventName, eventLabel,parameter);
        }} 
        />

        <Button
          title={"onEventWithValue"}
          onPress={() => {
            eventName = 'click_btn'; //事件名称
            eventLabel = 'my_custom_label'; //事件标签
            parameter = {'btn_name':'xx_btn','btn_color':'xxcolor'} //事件参数
            value = 5.21;//事件数值
           TalkingDataAppAnalytics.onEventWithValue(eventName,eventLabel,parameter,value);
        }}
        />

        <Button 
          title={"setGlobalKV"} 
          onPress={() => {
            globalKey = 'gkey'; //全局的key
            globalValue = 'gvalue'; //全局的value
            TalkingDataAppAnalytics.setGlobalKV(globalKey,globalValue);
        }} 
        />

        <Button 
          title={"removeGlobalKV"} 
          onPress={() => {
          globalKey = 'gkey'; //全局的key
          TalkingDataAppAnalytics.removeGlobalKV(globalKey);
        }} 
        />

        <Button 
          title={"onPageStart"} 
          onPress={() => {
          pageName = 'homePage'; //页面名称
          TalkingDataAppAnalytics.onPageStart(pageName);
        }} 
        />

        <Button 
          title={"onPageEnd"} 
          onPress={() => {
          pageName = 'homePage'; //页面名称
          TalkingDataAppAnalytics.onPageEnd(pageName);
        }} 
        />

        <Button 
          title={"onPlaceOrder"} 
          onPress={() => {
           orderId = 'oid_123';//订单id
           total = 59900; //总钱数 单位为分
           currencyType = 'CNY';//货币类型
           TalkingDataAppAnalytics.onPlaceOrder(orderId,total,currencyType);
        }} 
        />

        <Button 
          title={"onOrderPaySucc"} 
          onPress={() => {
            orderId = 'oid_123';//订单id
            total = 59900; //总钱数 单位为分
            currencyType = 'CNY';//货币类型
            paymentType = '银联支付' //支付类型
            TalkingDataAppAnalytics.onOrderPaySucc(orderId,total,currencyType,paymentType);
        }} 
        />

         <Button
           title={"onCancelOrder"}
           onPress={() => {
             orderId = 'oid_123';//订单id
             total = 59900; //总钱数 单位为分
             currencyType = 'CNY';//货币类型
             TalkingDataAppAnalytics.onCancelOrder(orderId,total,currencyType);
        }}
        />

        <Button 
          title={"onViewItem"} 
          onPress={() => {
            itemId = 'item_123';//订单id
            category = 'item_category'; //类别
            name = 'item_name';//道具名称
            unitPrice = 123
            TalkingDataAppAnalytics.onViewItem(itemId,category,name,unitPrice);

        }} 
        />

        <Button 
          title={"onAddItemToShoppingCart"} 
          onPress={() => {
            itemId = 'item_123';//订单id
            category = 'item_category'; //类别
            name = 'item_name';//道具名称
            unitPrice = 120; //单价 单位为分
            amount = 100; //数量

            TalkingDataAppAnalytics.onAddItemToShoppingCart(itemId,category,name,unitPrice,amount);

        }} 
        />


        <Button 
          title={"onViewShoppingCart"} 
          onPress={() => {
            let talkingdataShoppingCart = new TalkingDataShoppingCart();

            itemId = 'item_123';//订单id
            category = 'item_category'; //类别
            name = 'item_name';//道具名称
            unitPrice = 120; //单价 单位为分
            amount = 100; //数量                                       
            talkingdataShoppingCart.addItem(itemId,category,name,unitPrice,amount); //购物车添加item

            TalkingDataAppAnalytics.onViewShoppingCart(talkingdataShoppingCart.shoppingCartString);

        }} 
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo_aa', () => demo_aa);
