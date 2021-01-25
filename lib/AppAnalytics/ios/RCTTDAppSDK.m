//
//  RCTTDAppSDK.m
//  NVV
//
//  Created by bliss_ddo on 2018/8/24.
//  Copyright © 2018年 TalkingData. All rights reserved.
//

#import "RCTTDAppSDK.h"

#import "TalkingData.h"


@implementation TDProfileTypeRN

RCT_EXPORT_MODULE(TDProfileType);

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport
{
  return
  @{
    @"ANONYMOUS":@(TDProfileTypeAnonymous),
    @"REGISTERED":@(TDProfileTypeRegistered),
    @"SINA_WEIBO":@(TDProfileTypeSinaWeibo),
    @"QQ":@(TDProfileTypeQQ),
    @"QQ_WEIBO":@(TDProfileTypeTencentWeibo),
    @"ND91":@(TDProfileTypeND91),
    @"WEIXIN":@(TDProfileTypeWeiXin),
    @"TYPE1":@(TDProfileTypeType1),
    @"TYPE2":@(TDProfileTypeType2),
    @"TYPE3":@(TDProfileTypeType3),
    @"TYPE4":@(TDProfileTypeType4),
    @"TYPE5":@(TDProfileTypeType5),
    @"TYPE6":@(TDProfileTypeType6),
    @"TYPE7":@(TDProfileTypeType7),
    @"TYPE8":@(TDProfileTypeType8),
    @"TYPE9":@(TDProfileTypeType9),
    @"TYPE10":@(TDProfileTypeType10),
    };
}

@end


@implementation RCTConvert (TDProfileType)

RCT_ENUM_CONVERTER(TDProfileType,
                   (@{
                      @"ANONYMOUS":@(TDProfileTypeAnonymous),
                      @"REGISTERED":@(TDProfileTypeRegistered),
                      @"SINA_WEIBO":@(TDProfileTypeSinaWeibo),
                      @"QQ":@(TDProfileTypeQQ),
                      @"QQ_WEIBO":@(TDProfileTypeTencentWeibo),
                      @"ND91":@(TDProfileTypeND91),
                      @"WEIXIN":@(TDProfileTypeWeiXin),
                      @"TYPE1":@(TDProfileTypeType1),
                      @"TYPE2":@(TDProfileTypeType2),
                      @"TYPE3":@(TDProfileTypeType3),
                      @"TYPE4":@(TDProfileTypeType4),
                      @"TYPE5":@(TDProfileTypeType5),
                      @"TYPE6":@(TDProfileTypeType6),
                      @"TYPE7":@(TDProfileTypeType7),
                      @"TYPE8":@(TDProfileTypeType8),
                      @"TYPE9":@(TDProfileTypeType9),
                      @"TYPE10":@(TDProfileTypeType10),
                      }),
                   TDProfileTypeAnonymous,
                   integerValue)

@end



@implementation RCTTDAppSDK

RCT_EXPORT_MODULE(TalkingData);

RCT_REMAP_METHOD(getDeviceID, getDeviceID:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString * deviceId = [TalkingData getDeviceID];
  if (deviceId) {
    resolve(deviceId);
  } else {
    reject(@"",@"",nil);
  }
}

RCT_EXPORT_METHOD(setLogEnabled:(BOOL)enable)
{
  [TalkingData setLogEnabled:enable];
}
RCT_EXPORT_METHOD(setExceptionReportEnabled:(BOOL)enable)
{
  [TalkingData setExceptionReportEnabled:enable];
}
RCT_EXPORT_METHOD(setSignalReportEnabled:(BOOL)enable)
{
  [TalkingData setSignalReportEnabled:enable];
}
RCT_EXPORT_METHOD(setLatitude:(double)latitude longitude:(double)longitude)
{
  [TalkingData setLatitude:latitude longitude:longitude];
}
RCT_EXPORT_METHOD(setAntiCheatingEnabled:(BOOL)enabled)
{
  [TalkingData setAntiCheatingEnabled:enabled];
}
RCT_EXPORT_METHOD(onRegister:(NSString *)profileId type:(TDProfileType)type name:(NSString *)name)
{
  [TalkingData onRegister:profileId type:type name:name];
}
RCT_EXPORT_METHOD(onLogin:(NSString *)profileId type:(TDProfileType)type name:(NSString *)name)
{
  [TalkingData onLogin:profileId type:type name:name];
}

RCT_EXPORT_METHOD(onEvent:(NSString *)eventName
                  label:(NSString*)label
                  parameters:(NSDictionary*)parameters)
{
  [TalkingData trackEvent:eventName label:label parameters:parameters];
}

RCT_EXPORT_METHOD(onEventWithValue:(NSString *)eventName
                  label:(NSString*)label
                  parameters:(NSDictionary*)parameters
                  value:(double)value)
{
  [TalkingData trackEvent:eventName label:label parameters:parameters value:value];
}

RCT_EXPORT_METHOD(setGlobalKV:(NSString *)key value:(id)value)
{
  [TalkingData setGlobalKV:key value:value];
}
RCT_EXPORT_METHOD(removeGlobalKV:(NSString *)key)
{
  [TalkingData removeGlobalKV:key];
}

RCT_EXPORT_METHOD(onPageStart:(NSString *)pageName)
{
  [TalkingData trackPageBegin:pageName];
}
RCT_EXPORT_METHOD(onPageEnd:(NSString *)pageName)
{
  [TalkingData trackPageEnd:pageName];
}

RCT_EXPORT_METHOD(onPlaceOrder:(NSString *)profileId order:(NSString *)orderString)
{
  if (!profileId) {
    return;
  }
  NSError * error = nil;
  NSDictionary * orderDict = [NSJSONSerialization JSONObjectWithData:[orderString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  if (!error) {
    NSString * orderid = [orderDict objectForKey:@"orderId"];
    NSNumber * total = [orderDict objectForKey:@"total"];
    NSString * currencyType = [orderDict objectForKey:@"currencyType"];
    NSArray * items = [orderDict objectForKey:@"items"];
    TalkingDataOrder * order = [TalkingDataOrder createOrder:orderid total:[total intValue] currencyType:currencyType];
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
        [order addItem:itemid category:category name:name unitPrice:[unitPrice intValue] amount:[amount intValue] ];
      }
    }
    [TalkingData onPlaceOrder:profileId order:order];
    
  }
}

RCT_EXPORT_METHOD(onOrderPaySucc:(NSString *)profileId payType:(NSString *)payType order:(NSString *)orderString)
{
  if (!profileId || !payType) {
    return;
  }
  
  NSError * error = nil;
  NSDictionary * orderDict = [NSJSONSerialization JSONObjectWithData:[orderString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  if (!error) {
    NSString * orderid = [orderDict objectForKey:@"orderId"];
    NSNumber * total = [orderDict objectForKey:@"total"];
    NSString * currencyType = [orderDict objectForKey:@"currencyType"];
    NSArray * items = [orderDict objectForKey:@"items"];
    TalkingDataOrder * order = [TalkingDataOrder createOrder:orderid total:[total intValue] currencyType:currencyType];
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
        [order addItem:itemid category:category name:name unitPrice:[unitPrice intValue] amount:[amount intValue] ];
      }
    }
    [TalkingData onOrderPaySucc:profileId payType:payType order:order];
  }
}

RCT_EXPORT_METHOD(onViewItem:(NSString *)itemId category:(NSString *)category name:(NSString *)name unitPrice:(int)unitPrice)
{
  [TalkingData onViewItem:itemId category:category name:name unitPrice:unitPrice];
}
RCT_EXPORT_METHOD(onAddItemToShoppingCart:(NSString *)itemId category:(NSString *)category name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount)
{
  [TalkingData onAddItemToShoppingCart:itemId category:category name:name unitPrice:unitPrice amount:amount];
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
    TalkingDataShoppingCart * shoppingCart = [TalkingDataShoppingCart createShoppingCart];
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
        [shoppingCart addItem:itemid category:category name:name unitPrice:[unitPrice intValue] amount:[amount intValue] ];
      }
    }
    [TalkingData onViewShoppingCart:shoppingCart];
  }
}

@end



