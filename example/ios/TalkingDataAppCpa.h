//
//  TalkingDataAppCpa.h
//  TalkingDataAppCpa
//
//  Created by liweiqiang on 13-12-25.
//  Copyright (c) 2012年 __TendCloud__. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface TDOrder : NSObject

/**
 *  @method orderWithOrderId 
 *  @param  orderId          订单id         类型:NSString
 *  @param  total            订单总价        类型:int
 *  @param  currencyType     币种           类型:NSString
 */
+ (TDOrder *)orderWithOrderId:(NSString *)orderId total:(int)total currencyType:(NSString *)currencyType;

/**
 *  @method addItemWithCategory
 *  @param  category         商品类别        类型:NSString
 *  @param  name             商品名称        类型:NSString
 *  @param  unitPrice        商品单价        类型:int
 *  @param  amount           商品数量        类型:int
 */
- (TDOrder *)addItemWithCategory:(NSString *)category name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

/**
 *  @method addItemWithCategory
 *  @param  category         商品类别        类型:NSString
 *  @param  itemId           商品Id         类型:NSString
 *  @param  name             商品名称        类型:NSString
 *  @param  unitPrice        商品单价        类型:int
 *  @param  amount           商品数量        类型:int
 */
- (TDOrder *)addItemWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

@end


@interface TDShoppingCart : NSObject

/**
 *  @method createShoppingCart
 */
+ (TDShoppingCart *)createShoppingCart;

/**
 *  @method addItemWithCategory
 *  @param  category         商品类别        类型:NSString
 *  @param  itemId           商品Id         类型:NSString
 *  @param  name             商品名称        类型:NSString
 *  @param  unitPrice        商品单价        类型:int
 *  @param  amount           商品数量        类型:int
 */
- (TDShoppingCart *)addItemWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

@end

@interface TDAdSearch : NSObject

// 目的地城市 ID；至多64字符，支持数字+字母
@property (nonatomic,strong) NSString *destination;
// 出发地城市 ID；至多64字符，支持数字+字母
@property (nonatomic,strong) NSString *origin;
// 商品 ID（eg.酒店/汽车）；至多64字符，支持数字+字母
@property (nonatomic,strong) NSString *itemId;
// 商品位置 ID（eg.求职招聘/教育行业）；至多64字符，支持数字+字母
@property (nonatomic,strong) NSString *itemLocationId;
// 业务事件起始日期（eg.航班出发日期）；yyyy-mm-dd，"2016-09-23"；
@property (nonatomic,strong) NSString *startDate;
// 业务事件截止日期（eg.航班返程日期）；yyyy-mm-dd，"2016-09-23"；
@property (nonatomic,strong) NSString *endDate;
// 搜索字符串，至多128字符
@property (nonatomic,strong) NSString *searchTerm;
// 用于区分各种业务类型的字符串，至多128字符
@property (nonatomic,strong) NSString *googleBusinessVertical;
// 可自定义扩展参数
@property (nonatomic,strong) NSDictionary *custom;

@end

@interface TalkingDataAppCpa : NSObject

/**
 *  @method setVerboseLogDisabled 设置不显示日志  如发布时不需显示日志，应当最先调用该方法
 */
+ (void)setVerboseLogDisabled;

/**
 *  @method backgroundSessionEnabled
 *  开启后台使用时长统计，需在SDK初始化之前调用。
 */
+ (void)backgroundSessionEnabled;

/**
 *  @method enableSFSafariViewControllerTracking 用于精准的追踪以Safari作为资源载体的广告来源  如果需要使用应当在init方法之前调用
 */
+ (void)enableSFSafariViewControllerTracking NS_DEPRECATED_IOS(10_0, NA, "此方法会影响到用户交互，使用前请确保和产品、业务沟通清楚!");

/**
 *  @method init            初始化统计实例    请在application:didFinishLaunchingWithOptions:方法里调用
 *  @param  appID           应用标识         类型:NSString     应用的唯一标识，统计后台注册得到
 *  @param  channelId       渠道名（可选）    类型:NSString     如“app store”
 */
+ (void)init:(NSString *)appID withChannelId:(NSString *)channelId;

/**
 *  @method onReceiveDeepLink
 *  @param  link            链接            类型:NSURL
 */
+ (void)onReceiveDeepLink:(NSURL *)link;

/**
 *  @method onAdSearch     广告搜索事件追踪
 *  @param  as     参见 TDAdSearch 定义
 */
+ (void)onAdSearch:(TDAdSearch*)as;

/**
 *  @method onRegister      登录
 *  @param  account         账户名称         类型:NSString
 */
+ (void)onRegister:(NSString *)account;

/**
 *  @method onLogin         登录
 *  @param  account         账户名称         类型:NSString
 */
+ (void)onLogin:(NSString *)account;

/**
 *  @method onCreateRole    创建角色
 *  @param  name            角色名称         类型:NSString
 */
+ (void)onCreateRole:(NSString *)name;

/**
 *  @method onPay           支付
 *  @param  account         账户名称         类型:NSString
 *  @param  orderId         订单id          类型:NSString
 *  @param  amount          金额            类型:int
 *  @param  currencyType    币种            类型:NSString
 *  @param  payType         支付类型         类型:NSString
 */
+ (void)onPay:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType;

/**
 *  @method onPay           支付
 *  @param  account         账户名称         类型:NSString
 *  @param  orderId         订单id          类型:NSString
 *  @param  amount          金额            类型:int
 *  @param  currencyType    币种            类型:NSString
 *  @param  payType         支付类型         类型:NSString
 *  @param  order           订单详情         类型:TDOrder
 */
+ (void)onPay:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withOrder:(TDOrder *)order;

/**
 *  @method onPay           支付
 *  @param  account         账户名称         类型:NSString
 *  @param  orderId         订单id          类型:NSString
 *  @param  amount          金额            类型:int
 *  @param  currencyType    币种            类型:NSString
 *  @param  payType         支付类型         类型:NSString
 *  @param  itemId          商品id          类型:NSString
 *  @param  itemCount       商品个数         类型:int
 */
+ (void)onPay:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withItemId:(NSString *)itemId withItemCount:(int)itemCount;

/**
 *  @method onPlaceOrder    下单
 *  @param  account         账户名称         类型:NSString
 *  @param  order           订单            类型:TDOrder
 */
+ (void)onPlaceOrder:(NSString *)account withOrder:(TDOrder *)order;

/**
 *  @method onOrderPaySucc  支付
 *  @param  account         账户名称         类型:NSString
 *  @param  orderId         订单id          类型:NSString
 *  @param  amount          金额            类型:int
 *  @param  currencyType    币种            类型:NSString
 *  @param  payType         支付类型         类型:NSString
 */
+ (void)onOrderPaySucc:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType;

/**
 *  @method onViewItemWithCategory
 *  @param  category         商品类别        类型:NSString
 *  @param  itemId           商品Id         类型:NSString
 *  @param  name             商品名称        类型:NSString
 *  @param  unitPrice        商品单价        类型:int
 */
+ (void)onViewItemWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice;

/**
 *  @method onAddItemToShoppingCartWithCategory
 *  @param  category         商品类别        类型:NSString
 *  @param  itemId           商品Id         类型:NSString
 *  @param  name             商品名称        类型:NSString
 *  @param  unitPrice        商品单价        类型:int
 *  @param  amount           商品数量        类型:int
 */
+ (void)onAddItemToShoppingCartWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

/**
 *  @method onViewShoppingCart
 *  @param  shoppingCart    购物车信息       类型:TDShoppingCart
 */
+ (void)onViewShoppingCart:(TDShoppingCart *)shoppingCart;

/**
 *  @method onCustEvent1    自定义事件1
 */
+ (void)onCustEvent1;

/**
 *  @method onCustEvent2    自定义事件2
 */
+ (void)onCustEvent2;

/**
 *  @method onCustEvent3    自定义事件3
 */
+ (void)onCustEvent3;

/**
 *  @method onCustEvent4    自定义事件4
 */
+ (void)onCustEvent4;

/**
 *  @method onCustEvent5    自定义事件5
 */
+ (void)onCustEvent5;

/**
 *  @method onCustEvent6    自定义事件6
 */
+ (void)onCustEvent6;

/**
 *  @method onCustEvent7    自定义事件7
 */
+ (void)onCustEvent7;

/**
 *  @method onCustEvent8    自定义事件8
 */
+ (void)onCustEvent8;

/**
 *  @method onCustEvent9    自定义事件9
 */
+ (void)onCustEvent9;

/**
 *  @method onCustEvent10   自定义事件10
 */
+ (void)onCustEvent10;

/**
 *  @method getDeviceId     获取设备Id
 */
+ (NSString *)getDeviceId;

@end
