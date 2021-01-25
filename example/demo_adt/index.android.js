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
                    title={"getOAID"}
                    onPress={
                        () => {
                        this.timer = setTimeout(() => {
                           TalkingDataAdTracking.getOAID((oaid)=>{
                                 Alert.alert(oaid);
                           });
                         },3000);
                      }
                    }
                />
                <Button
                    title={"onRegister"}
                    onPress={
                        () => {
                            profileid = 'profileid'
                            TalkingDataAdTracking.onRegister(profileid);
                        }
                    }
                />
                <Button
                    title={"onRegisterWithinvitationCode"}
                    onPress={
                        () => {
                          profileid = 'profileid'
                          invitationCode = 'icode111'
                          TalkingDataAdTracking.onRegisterWithinvitationCode(profileid,invitationCode);
                        }
                    }
                />
                <Button
                    title={"onLogin"}
                    onPress={
                        () => {
                          profileid = 'profileid'
                          TalkingDataAdTracking.onLogin(profileid);
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
                          profile = 'profile';
                          orderId = 'order123';
                          amount = 12345;
                          currencyType = 'CNY';
                          payType = 'payType'
                          TalkingDataAdTracking.onPay(profile,orderId,amount,currencyType,payType);
                        }
                    }
                />
                <Button
                    title={"onPayWithOrder"}
                    onPress={
                        () => {
                          let order = new TalkingDataADTOrder('orderid', '100', 'CNY');
                          order.addItemWithItemId('itemid', 'category', 'name' , '1.0', '5');
                          TalkingDataAdTracking.onPayWithOrder('profileid_001','order_id001',100,'CNY','ApplePay', order.orderString);
                        }
                    }
                />
                <Button
                    title={"onPayWithItem"}
                    onPress={
                        () => {
                          profile = 'profile';
                          orderId = 'orderid';
                          amount = 10;
                          currencyType = 'CNY';
                          payType = 'payType';
                          itemId = 'item123';
                          itemcount = 1;
                          TalkingDataAdTracking.onPayWithItem(profile,orderId,amount,currencyType,payType,itemId,itemcount);
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
                          profileid = 'profileid';
                          order = new TalkingDataADTOrder('orderid', '123', 'CNY');
                          TalkingDataAdTracking.onPlaceOrder(profileid,order.orderString);
                        }
                    }
                />
                <Button
                    title={"onOrderPaySucc"}
                    onPress={
                        () => {
                          profile = 'profile';
                          orderId = 'orderID123';
                          amount = 5;
                          currencyType = 'CNY'
                          payType = 'ApplePay'
                          TalkingDataAdTracking.onOrderPaySucc(profile,orderId,amount,currencyType,payType);
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
                          profile = 'profile';
                          method = 'method';
                          content = 'content';
                          TalkingDataAdTracking.onCreateCard(profile,method,content);
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
                          profile = 'profile';
                          content = 'punchId';
                          TalkingDataAdTracking.onShare(profile,content);
                        }
                    }
                />
                <Button
                    title={"onPunch"}
                    onPress={
                        () => {
                          profile = 'profile';
                          punchId = 'punchId';
                          TalkingDataAdTracking.onPunch(profile,punchId);
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
                            profile = 'profile';
                            bookingid = 'bookingid';
                            category = 'category';
                            amount = 10;
                            content = 'content';
                            TalkingDataAdTracking.onBooking(profile,bookingid,category,amount,content);
                        }
                    }
                />
                <Button
                    title={"onContact"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataAdTracking.onContact(profile,content);
                        }
                    }
                />
                <Button
                    title={"onLearn"}
                    onPress={
                        () => {
                          profile = 'profile';
                          course = 'course';
                          begin = 123;
                          duration = 3600;
                          TalkingDataAdTracking.onLearn(profile,course,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onRead"}
                    onPress={
                        () => {
                          profile = 'profile';
                          book = 'book';
                          begin = 123;
                          duration = 3600;
                          TalkingDataAdTracking.onRead(profile,book,begin,duration);
                        }
                    }
                />
                <Button
                    title={"onBrowse"}
                    onPress={
                        () => {
                          profile = 'profile';
                          book = 'book';
                          begin = 123;
                          duration = 3600;
                          TalkingDataAdTracking.onBrowse(profile,book,begin,duration);
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
                          TalkingDataAdTracking.onTransaction('profile',t.transactionStr);
                        }
                    }
                />
                <Button
                    title={"onCredit"}
                    onPress={
                        () => {
                          profile = 'profile';
                          amount = 10;
                          content = 'content';
                          TalkingDataAdTracking.onCredit(profile,amount,content);
                        }
                    }
                />
                <Button
                    title={"onChargeBack"}
                    onPress={
                        () => {
                          profile = 'profile';
                          orderId = 'orderid';
                          reason = 'reason';
                          type = 'type';
                          TalkingDataAdTracking.onChargeBack(profile,orderId,reason,type);
                        }
                    }
                />
                <Button
                    title={"onTrialFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataAdTracking.onTrialFinished(profile,content);
                        }
                    }
                />
                <Button
                    title={"onGuideFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataAdTracking.onGuideFinished(profile,content);
                        }
                    }
                />
                <Button
                    title={"onPreviewFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataAdTracking.onPreviewFinished(profile,content);

                        }
                    }
                />
                <Button
                    title={"onFreeFinished"}
                    onPress={
                        () => {
                          profile = 'profile';
                          content = 'content';
                          TalkingDataAdTracking.onFreeFinished(profile,content);
                        }
                    }
                />
                <Button
                    title={"onLevelPass"}
                    onPress={
                        () => {
                          profile = 'profile';
                          levelId = 'levelId';
                          TalkingDataAdTracking.onLevelPass(profile,levelId);
                        }
                    }
                />
                <Button
                    title={"onAchievementUnlock"}
                    onPress={
                        () => {
                          profile = 'profile';
                          achievementId = 'achievementId';
                          TalkingDataAdTracking.onAchievementUnlock(profile,achievementId);
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
