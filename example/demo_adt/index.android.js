/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {TalkingDataAdTracking,TalkingDataADTOrder,TalkingDataADTShoppingCart,TalkingDataAdSearch,TalkingDataTransaction} from './TalkingDataAdTracking'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Alert,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class demo_adt extends Component {
  render() {
    return (

      <ScrollView style={styles.contentContainer}>
                <Button
                    title={"getDeviceID"}
                    onPress={
                        () => {
                          TalkingDataAdTracking.getDeviceID((device_id)=>{
                                Alert.alert(device_id);
                          });
                      }
                    }
                />
                <Button
                    title={"onRegister"}
                    onPress={
                        () => {
                            accountid = 'accountid'
                            TalkingDataAdTracking.onRegister(accountid);
                        }
                    }
                />
                <Button
                    title={"onRegisterWithinvitationCode"}
                    onPress={
                        () => {
                          accountid = 'accountid'
                          invitationCode = 'icode111'
                          TalkingDataAdTracking.onRegisterWithinvitationCode(accountid,invitationCode);
                        }
                    }
                />
                <Button
                    title={"onLogin"}
                    onPress={
                        () => {
                          accountid = 'accountid'
                          TalkingDataAdTracking.onLogin(accountid);
                        }
                    }
                />
                <Button
                    title={"onCreateRole"}
                    onPress={
                        () => {
                            rolename = 'rolename';
                            TalkingDataAdTracking.onCreateRole(rolename);
                        }
                    }
                />
                <Button
                    title={"onPay"}
                    onPress={
                        () => {
                          account = 'account';
                          orderId = 'order123';
                          amount = 12345;
                          currencyType = 'CNY';
                          payType = 'payType'
                          TalkingDataAdTracking.onPay(account,orderId,amount,currencyType,payType);
                        }
                    }
                />
                <Button
                    title={"onPayWithOrder"}
                    onPress={
                        () => {
                          let order = new TalkingDataADTOrder('orderid', '100', 'CNY');
                          order.addItemWithItemId('itemid', 'category', 'name' , '1.0', '5');
                          TalkingDataAdTracking.onPayWithOrder('accountid_001','order_id001',100,'CNY','ApplePay', order.orderString);
                        }
                    }
                />
                <Button
                    title={"onPayWithItem"}
                    onPress={
                        () => {
                          account = 'account';
                          orderId = 'orderid';
                          amount = 10;
                          currencyType = 'CNY';
                          payType = 'payType';
                          itemId = 'item123';
                          itemcount = 1;
                          TalkingDataAdTracking.onPayWithItem(account,orderId,amount,currencyType,payType,itemId,itemcount);
                        }
                    }
                />
                <Button
                    title={"onViewItem"}
                    onPress={
                        () => {
                          category = 'category';
                          itemId = 'itemid';
                          name = 'name';
                          unitPrice = 10;
                          TalkingDataAdTracking.onViewItem(category,itemId,name,unitPrice);
                        }
                    }
                />
                <Button
                    title={"onAddItemToShoppingCart"}
                    onPress={
                        () => {
                          itemId = 'item123';
                          category = 'category';
                          name = 'name';
                          unitPrice = 123;
                          amount = 9;
                          TalkingDataAdTracking.onAddItemToShoppingCart(itemId,category,name,unitPrice,amount);
                        }
                    }
                />
                <Button
                    title={"onPlaceOrder"}
                    onPress={
                        () => {
                          accountid = 'accountid';
                          order = new TalkingDataADTOrder('orderid', '123', 'CNY');
                          TalkingDataAdTracking.onPlaceOrder(accountid,order.orderString);
                        }
                    }
                />
                <Button
                    title={"onOrderPaySucc"}
                    onPress={
                        () => {
                          account = 'account';
                          orderId = 'orderID123';
                          amount = 5;
                          currencyType = 'CNY'
                          payType = 'ApplePay'
                          TalkingDataAdTracking.onOrderPaySucc(account,orderId,amount,currencyType,payType);
                        }
                    }
                />
                <Button
                    title={"onViewShoppingCart"}
                    onPress={
                        () => {
                            let talkingdataShoppingCart = new TalkingDataADTShoppingCart();
                            itemid = 'itemid';
                            category = 'category';
                            name = 'name';
                            unitPrice = 10;
                            amount = 2;
                            talkingdataShoppingCart.addItem(itemid,category,name,unitPrice,amount);
                            TalkingDataAdTracking.onViewShoppingCart(talkingdataShoppingCart.shoppingCartString);
                        }
                    }
                />
                <Button
                    title={"onCustEvent1-10"}
                    onPress={
                        () => {
                          TalkingDataAdTracking.onCustEvent1();
                          TalkingDataAdTracking.onCustEvent2();
                          TalkingDataAdTracking.onCustEvent3();
                          TalkingDataAdTracking.onCustEvent4();
                          TalkingDataAdTracking.onCustEvent5();
                          TalkingDataAdTracking.onCustEvent6();
                          TalkingDataAdTracking.onCustEvent7();
                          TalkingDataAdTracking.onCustEvent8();
                          TalkingDataAdTracking.onCustEvent9();
                          TalkingDataAdTracking.onCustEvent10();

                        }
                    }
                />
                <Button
                    title={"onCreateCard"}
                    onPress={
                        () => {
                          account = 'account';
                          method = 'method';
                          content = 'content';
                          TalkingDataAdTracking.onCreateCard(account,method,content);
                        }
                    }
                />

                <Button
                    title={"onFavorite"}
                    onPress={
                        () => {
                          category = 'category';
                          content = 'content';
                          TalkingDataAdTracking.onFavorite(category,content);
                        }
                    }
                />
                <Button
                    title={"onShare"}
                    onPress={
                        () => {
                          account = 'account';
                          content = 'punchId';
                          TalkingDataAdTracking.onShare(account,content);
                        }
                    }
                />
                <Button
                    title={"onPunch"}
                    onPress={
                        () => {
                          account = 'account';
                          punchId = 'punchId';
                          TalkingDataAdTracking.onPunch(account,punchId);
                        }
                    }
                />
                <Button
                    title={"onSearch"}
                    onPress={
                        () => {
                          s = new TalkingDataAdSearch();
                          s.category = 'category';
                          s.content = 'content';
                          s.destination = 'destination';
                          s.origin = 'origin';
                          s.item_id = 'item_id';
                          s.item_location_id = 'item_location_id';
                          s.start_date = '1122334455';
                          s.end_date = '6677889900';
                          TalkingDataAdTracking.onSearch(s.adSearchString);
                        }
                    }
                />
                <Button
                    title={"onBooking"}
                    onPress={
                        () => {
                            account = 'account';
                            bookingid = 'bookingid';
                            category = 'category';
                            amount = 10;
                            content = 'content';
                            TalkingDataAdTracking.onBooking(account,bookingid,category,amount,content);
                        }
                    }
                />
                <Button
                    title={"onContact"}
                    onPress={
                        () => {
                          account = 'account';
                          content = 'content';
                          TalkingDataAdTracking.onContact(account,content);
                        }
                    }
                />
                <Button
                    title={"onLearn"}
                    onPress={
                        () => {
                          account = 'account';
                          course = 'course';
                          begin = 123;
                          duration = 3600;
                          TalkingDataAdTracking.onLearn(account,course,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onRead"}
                    onPress={
                        () => {
                          account = 'account';
                          book = 'book';
                          begin = 123;
                          duration = 3600;
                          TalkingDataAdTracking.onRead(account,book,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onBrowse"}
                    onPress={
                        () => {
                          account = 'account';
                          book = 'book';
                          begin = 123;
                          duration = 3600;
                          TalkingDataAdTracking.onBrowse(account,book,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onTransaction"}
                    onPress={
                        () => {
                          t = new TalkingDataTransaction();
                          t.transactionId = 'transactionId';
                          t.category = 'category';
                          t.amount = '996';
                          t.personA = 'personA';
                          t.personB = 'personB';
                          t.startDate = '11223344';
                          t.endDate = '5566778899';
                          t.currencyType = 'currencyType';
                          t.content = 'content';
                          TalkingDataAdTracking.onTransaction('account',t.transactionStr);
                        }
                    }
                />
                <Button
                    title={"onCredit"}
                    onPress={
                        () => {
                          account = 'account';
                          amount = 10;
                          content = 'content';
                          TalkingDataAdTracking.onCredit(account,amount,content);
                        }
                    }
                />
                <Button
                    title={"onChargeBack"}
                    onPress={
                        () => {
                          account = 'account';
                          orderId = 'orderid';
                          reason = 'reason';
                          type = 'type';
                          TalkingDataAdTracking.onChargeBack(account,orderId,reason,type);
                        }
                    }
                />
                <Button
                    title={"onTrialFinished"}
                    onPress={
                        () => {
                          account = 'account';
                          content = 'content';
                          TalkingDataAdTracking.onTrialFinished(account,content);
                        }
                    }
                />
                <Button
                    title={"onGuideFinished"}
                    onPress={
                        () => {
                          account = 'account';
                          content = 'content';
                          TalkingDataAdTracking.onGuideFinished(account,content);
                        }
                    }
                />
                <Button
                    title={"onPreviewFinished"}
                    onPress={
                        () => {
                          account = 'account';  
                          content = 'content';
                          TalkingDataAdTracking.onPreviewFinished(account,content);

                        }
                    }
                />
                <Button
                    title={"onFreeFinished"}
                    onPress={
                        () => {
                          account = 'account';
                          content = 'content';
                          TalkingDataAdTracking.onFreeFinished(account,content);
                        }
                    }
                />
                <Button
                    title={"onLevelPass"}
                    onPress={
                        () => {
                          account = 'account';
                          levelId = 'levelId';
                          TalkingDataAdTracking.onLevelPass(account,levelId);
                        }
                    }
                />
                <Button
                    title={"onAchievementUnlock"}
                    onPress={
                        () => {
                          account = 'account';
                          achievementId = 'achievementId';
                          TalkingDataAdTracking.onAchievementUnlock(account,achievementId);
                        }
                    }
                />
                <View style={ {width:40,height:40}}/>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  contentContainer: {
      paddingTop: 20
  },
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

AppRegistry.registerComponent('demo_adt', () => demo_adt);
