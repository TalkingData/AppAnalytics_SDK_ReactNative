//
//  RCTTDAdTrackingSDK.m
//  TalkingDataSDKDemo
//
//  Created by bliss_ddo on 2019/6/21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RCTTDAdTrackingSDK.h"
#import "TalkingDataAppCpa.h"

@implementation RCTTDAdTrackingSDK
RCT_EXPORT_MODULE(TalkingDataAppCpa);


RCT_REMAP_METHOD(getDeviceID, getDeviceID:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString * deviceId = [TalkingDataAppCpa getDeviceId];
  NSArray *events = @[deviceId];
  if (events) {
    resolve(events);
  } else {
    reject(@"",@"",nil);
  }
}

RCT_EXPORT_METHOD(onRegister:(NSString *)account)
{
  [TalkingDataAppCpa onRegister:account];
}

RCT_EXPORT_METHOD(onRegisterWithinvitationCode:(NSString *)account invitationCode:(NSString *)invitationCode){
  [TalkingDataAppCpa onRegister:account invitationCode:invitationCode];
}

RCT_EXPORT_METHOD(onLogin:(NSString *)account)
{
  [TalkingDataAppCpa onLogin:account];
}
RCT_EXPORT_METHOD(onCreateRole:(NSString *)name)
{
  [TalkingDataAppCpa onCreateRole:name];
}
RCT_EXPORT_METHOD(onPay:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType)
{
  [TalkingDataAppCpa onPay:account withOrderId:orderId withAmount:amount withCurrencyType:currencyType withPayType:payType];
}
RCT_EXPORT_METHOD(onPayWithOrder:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withOrder:(NSString *)orderString)
{
  NSError * error = nil;
  NSDictionary * orderDict = [NSJSONSerialization JSONObjectWithData:[orderString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  if (!error) {
    NSString * orderid = [orderDict objectForKey:@"orderId"];
    NSString * total = [orderDict objectForKey:@"total"];
    NSString * currencyType = [orderDict objectForKey:@"currencyType"];
    NSArray * items = [orderDict objectForKey:@"items"];
    TDOrder * order = [TDOrder orderWithOrderId:orderid total:[total intValue] currencyType:currencyType];
    
    if (!order) {
      return;
    }
    if (items && items.count!=0) {
      for (NSDictionary * eachItem in items) {
        NSString * itemid = [eachItem objectForKey:@"itemId"];
        NSString * category = [eachItem objectForKey:@"category"];
        NSString * name = [eachItem objectForKey:@"name"];
        NSString * unitPrice = [eachItem objectForKey:@"unitPrice"];
        NSString * amount = [eachItem objectForKey:@"amount"];
        [order addItemWithCategory:category itemId:itemid name:name unitPrice:[unitPrice intValue] amount:[amount intValue]];
      }
    }
    [TalkingDataAppCpa onPay:account withOrderId:orderId withAmount:amount withCurrencyType:currencyType withPayType:payType withOrder:order];
  }
  
}




RCT_EXPORT_METHOD(onPayWithItem:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withItemId:(NSString *)itemId withItemCount:(int)itemCount)
{
  [TalkingDataAppCpa onPay:account withOrderId:orderId withAmount:amount withCurrencyType:currencyType withPayType:payType withItemId:itemId withItemCount:itemCount];
}


RCT_EXPORT_METHOD(onViewItem:(NSString *)itemId category:(NSString *)category name:(NSString *)name unitPrice:(int)unitPrice)
{
  [TalkingDataAppCpa onViewItemWithCategory:category itemId:itemId name:name unitPrice:unitPrice];
}

RCT_EXPORT_METHOD(onAddItemToShoppingCart:(NSString *)itemId category:(NSString *)category name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount)
{
  [TalkingDataAppCpa onAddItemToShoppingCartWithCategory:category itemId:itemId name:name unitPrice:unitPrice amount:amount];
}

RCT_EXPORT_METHOD(onPlaceOrder:(NSString *)accountId order:(NSString *)orderString)
{
  if (!accountId) {
    return;
  }
  NSError * error = nil;
  NSDictionary * orderDict = [NSJSONSerialization JSONObjectWithData:[orderString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  if (!error) {
    NSString * orderid = [orderDict objectForKey:@"orderId"];
    NSString * total = [orderDict objectForKey:@"total"];
    NSString * currencyType = [orderDict objectForKey:@"currencyType"];
    NSArray * items = [orderDict objectForKey:@"items"];
    TDOrder * order = [TDOrder orderWithOrderId:orderid total:[total intValue] currencyType:currencyType];

    if (!order) {
      return;
    }
    if (items && items.count!=0) {
      for (NSDictionary * eachItem in items) {
        NSString * itemid = [eachItem objectForKey:@"itemId"];
        NSString * category = [eachItem objectForKey:@"category"];
        NSString * name = [eachItem objectForKey:@"name"];
        NSString * unitPrice = [eachItem objectForKey:@"unitPrice"];
        NSString * amount = [eachItem objectForKey:@"amount"];
        [order addItemWithCategory:category itemId:itemid name:name unitPrice:[unitPrice intValue] amount:[amount intValue]];
      }
    }
    [TalkingDataAppCpa onPlaceOrder:accountId withOrder:order];
    
  }
}

RCT_EXPORT_METHOD(onOrderPaySucc:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType){
  [TalkingDataAppCpa onOrderPaySucc:account withOrderId:orderId withAmount:amount withCurrencyType:currencyType withPayType:payType];
}


RCT_EXPORT_METHOD(onViewShoppingCart:(NSString *)shoppingCartString)
{
  if (!shoppingCartString) {
    return;
  }
  
  NSError * error = nil;
  NSDictionary * shoppingCartDict = [NSJSONSerialization JSONObjectWithData:[shoppingCartString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  if (!error) {
    NSArray * items = [shoppingCartDict objectForKey:@"items"];
    TDShoppingCart * shoppingCart = [TDShoppingCart createShoppingCart];
    if (!shoppingCart) {
      return;
    }
    if (items && items.count!=0) {
      for (NSDictionary * eachItem in items) {
        NSString * itemid = [eachItem objectForKey:@"itemId"];
        NSString * category = [eachItem objectForKey:@"category"];
        NSString * name = [eachItem objectForKey:@"name"];
        NSString * unitPrice = [eachItem objectForKey:@"unitPrice"];
        NSString * amount = [eachItem objectForKey:@"amount"];
        [shoppingCart addItemWithCategory:category itemId:itemid name:name unitPrice:unitPrice.intValue amount:amount.intValue];
      }
    }
    [TalkingDataAppCpa onViewShoppingCart:shoppingCart];
  }
}
RCT_EXPORT_METHOD(onCustEvent1){[TalkingDataAppCpa onCustEvent1];}
RCT_EXPORT_METHOD(onCustEvent2){[TalkingDataAppCpa onCustEvent2];}
RCT_EXPORT_METHOD(onCustEvent3){[TalkingDataAppCpa onCustEvent3];}
RCT_EXPORT_METHOD(onCustEvent4){[TalkingDataAppCpa onCustEvent4];}
RCT_EXPORT_METHOD(onCustEvent5){[TalkingDataAppCpa onCustEvent5];}
RCT_EXPORT_METHOD(onCustEvent6){[TalkingDataAppCpa onCustEvent6];}
RCT_EXPORT_METHOD(onCustEvent7){[TalkingDataAppCpa onCustEvent7];}
RCT_EXPORT_METHOD(onCustEvent8){[TalkingDataAppCpa onCustEvent8];}
RCT_EXPORT_METHOD(onCustEvent9){[TalkingDataAppCpa onCustEvent9];}
RCT_EXPORT_METHOD(onCustEvent10){[TalkingDataAppCpa onCustEvent10];}




RCT_EXPORT_METHOD(onCreateCard:(NSString *)account method:(NSString *)method content:(NSString *)content)
{
  [TalkingDataAppCpa onCreateCard:account method:method content:content];
}

RCT_EXPORT_METHOD(onFavorite:(NSString *)category content:(NSString *)content)
{
  [TalkingDataAppCpa onFavorite:category content:content];
}

RCT_EXPORT_METHOD(onShare:(NSString *)account content:(NSString *)content)
{
  [TalkingDataAppCpa onShare:account content:content];
}

RCT_EXPORT_METHOD(onPunch:(NSString *)account punchId:(NSString *)punchId)
{
  [TalkingDataAppCpa onPunch:account punchId:punchId];
}


RCT_EXPORT_METHOD(onSearch:(NSString *)tdAdSearch)
{
  TDSearch * s = [[TDSearch alloc]init];
  NSError * error = nil;
  NSDictionary * dictADS = [NSJSONSerialization JSONObjectWithData:[tdAdSearch dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  s.category = dictADS[@"category"];
  s.content = dictADS[@"content"];
  s.destination = dictADS[@"destination"];
  s.origin = dictADS[@"origin"];
  s.itemId = dictADS[@"itemId"];
  s.itemLocationId = dictADS[@"itemLocationId"];
  s.startDate = [dictADS[@"startDate"] longLongValue];
  s.endDate = [dictADS[@"endDate"] longLongValue];
  [TalkingDataAppCpa onSearch:s];
}


RCT_EXPORT_METHOD(onReservation:(NSString *)account reservationId:(NSString *)reservationId category:(NSString *)category amount:(int)amount term:(NSString *)term)
{
  [TalkingDataAppCpa onReservation:account reservationId:reservationId category:category amount:amount term:term];
}

RCT_EXPORT_METHOD(onBooking:(NSString *)account bookingId:(NSString *)bookingId category:(NSString *)category amount:(int)amount content:(NSString *)content)
{
  [TalkingDataAppCpa onBooking:account bookingId:bookingId category:category amount:amount content:content];
}

RCT_EXPORT_METHOD(onContact:(NSString *)account content:(NSString *)content)
{
  [TalkingDataAppCpa onContact:account content:content];
}

RCT_EXPORT_METHOD(onLearn:(NSString *)account course:(NSString *)course begin:(int64_t)begin duration:(int)duration)
{
  [TalkingDataAppCpa onLearn:account course:course begin:begin duration:duration];
}

RCT_EXPORT_METHOD(onRead:(NSString *)account book:(NSString *)book begin:(int64_t)begin duration:(int)duration)
{
  [TalkingDataAppCpa onRead:account book:book begin:begin duration:duration];
}

RCT_EXPORT_METHOD(onBrowse:(NSString *)account content:(NSString *)content begin:(int64_t)begin duration:(int)duration)
{
  [TalkingDataAppCpa onBrowse:account content:content begin:begin duration:duration];
}

RCT_EXPORT_METHOD(onTransaction:(NSString *)account transaction:(NSString *)transactionString)
{
  TDTransaction * t = [[TDTransaction alloc]init];
  NSError * error = nil;
  NSDictionary * dictADS = [NSJSONSerialization JSONObjectWithData:[transactionString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  t.transactionId = dictADS[@"transactionId"];
  t.category = dictADS[@"category"];
  t.amount = [dictADS[@"amount"] intValue];
  t.personA = dictADS[@"personA"];
  t.personB = dictADS[@"personB"];
  t.startDate = [dictADS[@"startDate"] longLongValue];
  t.endDate = [dictADS[@"endDate"] longLongValue];
  t.currencyType = dictADS[@"currencyType"];
  t.content = dictADS[@"content"];

  [TalkingDataAppCpa onTransaction:account transaction:t];
}

RCT_EXPORT_METHOD(onCredit:(NSString *)account amount:(int)amount content:(NSString *)content)
{
  [TalkingDataAppCpa onCredit:account amount:amount content:content];
}

RCT_EXPORT_METHOD(onChargeBack:(NSString *)account orderId:(NSString *)orderId reason:(NSString *)reason type:(NSString *)type)
{
  [TalkingDataAppCpa onChargeBack:account orderId:orderId reason:reason type:type];
}

RCT_EXPORT_METHOD(onTrialFinished:(NSString *)account content:(NSString *)content)
{
  [TalkingDataAppCpa onTrialFinished:account content:content];
}

RCT_EXPORT_METHOD(onGuideFinished:(NSString *)account content:(NSString *)content)
{
  [TalkingDataAppCpa onGuideFinished:account content:content];
}

RCT_EXPORT_METHOD(onPreviewFinished:(NSString *)account content:(NSString *)content)
{
  [TalkingDataAppCpa onPreviewFinished:account content:content];
}

RCT_EXPORT_METHOD(onFreeFinished:(NSString *)account content:(NSString *)content)
{
  [TalkingDataAppCpa onFreeFinished:account content:content];
}

RCT_EXPORT_METHOD(onLevelPass:(NSString *)account levelId:(NSString *)levelId)
{
  [TalkingDataAppCpa onLevelPass:account levelId:levelId];
}

RCT_EXPORT_METHOD(onAchievementUnlock:(NSString *)account achievementId:(NSString *)achievementId)
{
  [TalkingDataAppCpa onAchievementUnlock:account achievementId:achievementId];
}



@end
