//
//  RCTTDAppSDK.m
//  NVV
//
//  Created by bliss_ddo on 2018/8/24.
//  Copyright © 2018年 TalkingData. All rights reserved.
//

#import "RCTTDAppSDK.h"

#import "TalkingData.h"


@implementation TDAccountTypeRN

RCT_EXPORT_MODULE(TDAccountType);

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (NSDictionary *)constantsToExport
{
  return
  @{
    @"ANONYMOUS":@(TDAccountTypeAnonymous),
    @"REGISTERED":@(TDAccountTypeRegistered),
    @"SINA_WEIBO":@(TDAccountTypeSinaWeibo),
    @"QQ":@(TDAccountTypeQQ),
    @"QQ_WEIBO":@(TDAccountTypeTencentWeibo),
    @"ND91":@(TDAccountTypeND91),
    @"WEIXIN":@(TDAccountTypeWeiXin),
    @"TYPE1":@(TDAccountTypeType1),
    @"TYPE2":@(TDAccountTypeType2),
    @"TYPE3":@(TDAccountTypeType3),
    @"TYPE4":@(TDAccountTypeType4),
    @"TYPE5":@(TDAccountTypeType5),
    @"TYPE6":@(TDAccountTypeType6),
    @"TYPE7":@(TDAccountTypeType7),
    @"TYPE8":@(TDAccountTypeType8),
    @"TYPE9":@(TDAccountTypeType9),
    @"TYPE10":@(TDAccountTypeType10),
    };
}

@end


@implementation RCTConvert (TDAccountType)

RCT_ENUM_CONVERTER(TDAccountType,
                   (@{
                      @"ANONYMOUS":@(TDAccountTypeAnonymous),
                      @"REGISTERED":@(TDAccountTypeRegistered),
                      @"SINA_WEIBO":@(TDAccountTypeSinaWeibo),
                      @"QQ":@(TDAccountTypeQQ),
                      @"QQ_WEIBO":@(TDAccountTypeTencentWeibo),
                      @"ND91":@(TDAccountTypeND91),
                      @"WEIXIN":@(TDAccountTypeWeiXin),
                      @"TYPE1":@(TDAccountTypeType1),
                      @"TYPE2":@(TDAccountTypeType2),
                      @"TYPE3":@(TDAccountTypeType3),
                      @"TYPE4":@(TDAccountTypeType4),
                      @"TYPE5":@(TDAccountTypeType5),
                      @"TYPE6":@(TDAccountTypeType6),
                      @"TYPE7":@(TDAccountTypeType7),
                      @"TYPE8":@(TDAccountTypeType8),
                      @"TYPE9":@(TDAccountTypeType9),
                      @"TYPE10":@(TDAccountTypeType10),
                      }),
                   TDAccountTypeAnonymous,
                   integerValue)

@end



@implementation RCTTDAppSDK

RCT_EXPORT_MODULE(TalkingData);

RCT_REMAP_METHOD(getDeviceID, getDeviceID:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString * deviceId = [TalkingData getDeviceID];
  NSArray *events = @[deviceId];
  if (events) {
    resolve(events);
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
RCT_EXPORT_METHOD(onRegister:(NSString *)accountId type:(TDAccountType)type name:(NSString *)name)
{
  [TalkingData onRegister:accountId type:type name:name];
}
RCT_EXPORT_METHOD(onLogin:(NSString *)accountId type:(TDAccountType)type name:(NSString *)name)
{
  [TalkingData onLogin:accountId type:type name:name];
}

RCT_EXPORT_METHOD(onEvent:(NSString *)eventName
                  label:(NSString*)label
                  parameters:(NSDictionary*)parameters)
{
  [TalkingData trackEvent:eventName label:label parameters:parameters];
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
    [TalkingData onPlaceOrder:accountId order:order];
    
  }
}

RCT_EXPORT_METHOD(onOrderPaySucc:(NSString *)accountId payType:(NSString *)payType order:(NSString *)orderString)
{
  if (!accountId || !payType) {
    return;
  }
  
  NSError * error = nil;
  NSDictionary * orderDict = [NSJSONSerialization JSONObjectWithData:[orderString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  if (!error) {
    NSString * orderid = [orderDict objectForKey:@"orderId"];
    NSString * total = [orderDict objectForKey:@"total"];
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
    [TalkingData onOrderPaySucc:accountId payType:payType order:order];
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

// 金融借贷


@end



