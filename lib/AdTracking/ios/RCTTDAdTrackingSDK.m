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


RCT_EXPORT_METHOD(onAdSearch:(NSString *)tdAdSearch)
{
  TDAdSearch * s = [[TDAdSearch alloc]init];
  NSError * error = nil;
  NSDictionary * dictADS = [NSJSONSerialization JSONObjectWithData:[tdAdSearch dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  s.destination = dictADS[@"destination"];
  s.origin = dictADS[@"origin"];
  s.itemId = dictADS[@"item_id"];
  s.itemLocationId = dictADS[@"item_location_id"];
  s.startDate = dictADS[@"start_date"];
  s.endDate = dictADS[@"end_date"];
  s.searchTerm = dictADS[@"search_term"];
  s.googleBusinessVertical = dictADS[@"google_business_vertical"];
  s.custom = dictADS[@"custom"];
  [TalkingDataAppCpa onAdSearch:s];
}

@end
