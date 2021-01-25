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

@interface TDSearch : NSObject
// 搜索分类
@property (nonatomic,strong) NSString *category;
// 搜索内容
@property (nonatomic,strong) NSString *content;

// 商品id
@property (nonatomic,strong) NSString *itemId;
// 商品位置
@property (nonatomic,strong) NSString *itemLocationId;

// 目的地城市
@property (nonatomic,strong) NSString *destination;
// 出发地城市
@property (nonatomic,strong) NSString *origin;
// 起始Unix时间戳。单位：毫秒
@property (nonatomic,assign) int64_t startDate;
// 截止Unix时间戳。单位：毫秒
@property (nonatomic,assign) int64_t endDate;
@end

@interface TDTransaction : NSObject
// 交易ID
@property (nonatomic, strong) NSString *transactionId;
// 交易分类
@property (nonatomic, strong) NSString *category;
// 交易额
@property (nonatomic, assign) int amount;
// 交易甲方
@property (nonatomic, strong) NSString *personA;
// 交易乙方
@property (nonatomic, strong) NSString *personB;
// 交易起始Unix时间戳。单位：毫秒
@property (nonatomic,assign) int64_t startDate;
// 交易终止Unix时间戳。单位：毫秒
@property (nonatomic,assign) int64_t endDate;
// 货币类型
@property (nonatomic, strong) NSString *currencyType;
// 交易详情
@property (nonatomic, strong) NSString *content;
@end


@interface TalkingDataAppCpa : NSObject

/**
 设置不显示日志。如发布时不需显示日志，应当最先调用该方法
 */
+ (void)setVerboseLogDisabled;

/**
 开启后台使用时长统计，需在SDK初始化之前调用。
 */
+ (void)backgroundSessionEnabled;

/**
 用于精准的追踪以Safari作为资源载体的广告来源  如果需要使用应当在init方法之前调用
 */
+ (void)enableSFSafariViewControllerTracking NS_DEPRECATED_IOS(10_0, NA, "此方法会影响到用户交互，使用前请确保和产品、业务沟通清楚!");

/**
 AdTracking SDK初始化方法。请在application:didFinishLaunchingWithOptions:方法里调用

 @param appID 应用的唯一标识，统计后台注册得到         类型:NSString
 @param channelId 渠道名（可选）。如“AppStore”      类型:NSString
 */
+ (void)init:(NSString *)appID withChannelId:(NSString *)channelId;

/**
 通过账户的方式登录事件

 @param profile 账户名称         类型:NSString
 */
+ (void)onRegister:(NSString *)profile;

/**
 通过携带邀请码的方式登录事件

 @param profile 账户名称         类型:NSString
 @param invitationCode 邀请码    类型:NSString
 */
+ (void)onRegister:(NSString *)profile invitationCode:(NSString *)invitationCode;

/**
 通过账户登录事件

 @param profile 账户名称         类型:NSString
 */
+ (void)onLogin:(NSString *)profile;

/**
 添加支付相关信息事件

 @param profile 账户名称        类型:NSString
 @param method 支付方式         类型:NSString
 @param content 支付信息        类型:NSString
 */
+ (void)onCreateCard:(NSString *)profile method:(NSString *)method content:(NSString *)content;

/**
 DeepLink

 @param link link            链接            类型:NSURL
 */
+ (void)onReceiveDeepLink:(NSURL *)link;

/**
 收藏事件

 @param category 收藏分类            类型:NSString
 @param content  收藏内容            类型:NSString
 */
+ (void)onFavorite:(NSString *)category content:(NSString *)content;

/**
 分享事件

 @param profile 账户名称            类型:NSString
 @param content 分享内容            类型:NSString
 */
+ (void)onShare:(NSString *)profile content:(NSString *)content;

/**
 签到打卡事件

 @param profile 账户名称            类型:NSString
 @param punchId 签到打卡ID          类型:NSString
 */
+ (void)onPunch:(NSString *)profile punchId:(NSString *)punchId;


/**
 *  @method onSearch     广告搜索事件
 *  @param  as     参见 TDSearch 定义
 */
+ (void)onSearch:(TDSearch*)as;

/**
 用户预约事件

 @param profile   账户名称          类型:NSString
 @param reservationId 预约ID       类型:NSString
 @param category 预约分类           类型:NSString
 @param amount 预约金               类型:int
 @param term 预约信息               类型:NSString
 */
+ (void)onReservation:(NSString *)profile reservationId:(NSString *)reservationId category:(NSString *)category amount:(int)amount term:(NSString *)term;

/**
 用户预订事件

 @param profile   账户名称          类型:NSString
 @param bookingId 预订ID           类型:NSString
 @param category 预订分类           类型:NSString
 @param amount 预订金               类型:int
 @param content 预订内容            类型:NSString
 */
+ (void)onBooking:(NSString *)profile bookingId:(NSString *)bookingId category:(NSString *)category amount:(int)amount content:(NSString *)content;

/**
 客户联系事件

 @param profile 账户名称          类型:NSString
 @param content 联系内容          类型:NSString
 */
+ (void)onContact:(NSString *)profile content:(NSString *)content;

/**
 查看商品

 @param category 商品类别        类型:NSString
 @param itemId 商品Id         类型:NSString
 @param name 商品名称        类型:NSString
 @param unitPrice 商品单价        类型:int
 */
+ (void)onViewItemWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice;

/**
 查看购物车

 @param shoppingCart 购物车对象，详见 TDShoppingCart
 */
+ (void)onViewShoppingCart:(TDShoppingCart *)shoppingCart;

/**
 添加购物车

 @param category 商品类别        类型:NSString
 @param itemId 商品Id         类型:NSString
 @param name 商品名称        类型:NSString
 @param unitPrice 商品单价        类型:int
 @param amount 商品数量        类型:int
 */
+ (void)onAddItemToShoppingCartWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

/**
 下订单

 @param profile 账户名称         类型:NSString
 @param order 订单对象            类型:TDOrder
 */
+ (void)onPlaceOrder:(NSString *)profile withOrder:(TDOrder *)order;

/**
 *  @method onPay           支付
 *  @param  profile         账户名称         类型:NSString
 *  @param  orderId         订单id          类型:NSString
 *  @param  amount          金额            类型:int
 *  @param  currencyType    币种            类型:NSString
 *  @param  payType         支付类型         类型:NSString
 */
+ (void)onPay:(NSString *)profile withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType;

/**
 带订单详情支付

 @param profile 账户名称         类型:NSString
 @param orderId 订单id          类型:NSString
 @param amount 金额            类型:int
 @param currencyType 币种            类型:NSString
 @param payType 支付类型         类型:NSString
 @param order 订单详情         类型:TDOrder
 */
+ (void)onPay:(NSString *)profile withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withOrder:(TDOrder *)order;

/**
 *  @method onPay           支付
 *  @param  profile         账户名称         类型:NSString
 *  @param  orderId         订单id          类型:NSString
 *  @param  amount          金额            类型:int
 *  @param  currencyType    币种            类型:NSString
 *  @param  payType         支付类型         类型:NSString
 *  @param  itemId          商品id          类型:NSString
 *  @param  itemCount       商品个数         类型:int
 */
+ (void)onPay:(NSString *)profile withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withItemId:(NSString *)itemId withItemCount:(int)itemCount;


/**
 课程学习

 @param profile 账户名称         类型:NSString
 @param course 课程信息         类型:NSString
 @param begin 开始学习Unix时间戳。单位：毫秒         类型:int64_t
 @param duration 学习时长。单位：秒         类型:int
 */
+ (void)onLearn:(NSString *)profile course:(NSString *)course begin:(int64_t)begin duration:(int)duration;

/**
 文章阅读

 @param profile 账户名称         类型:NSString
 @param book 文章信息        类型:NSString
 @param begin 开始阅读Unix时间戳。单位：毫秒         类型:int64_t
 @param duration 阅读时长。单位：秒         类型:int
 */
+ (void)onRead:(NSString *)profile book:(NSString *)book begin:(int64_t)begin duration:(int)duration;

/**
 详情浏览

 @param profile 账户名称         类型:NSString
 @param content 详情信息        类型:NSString
 @param begin 开始浏览Unix时间戳。单位：毫秒         类型:int64_t
 @param duration 浏览时长。单位：秒         类型:int
 */
+ (void)onBrowse:(NSString *)profile content:(NSString *)content begin:(int64_t)begin duration:(int)duration;

/**
 交易

 @param transaction 交易信息对象，详见TDTransaction
 */
+ (void)onTransaction:(NSString *)profile transaction:(TDTransaction *)transaction;

/**
 授信

 @param profile 账户名称         类型:NSString
 @param amount 授信额度        类型:int
 @param content 授信信息        类型:NSString
 */
+ (void)onCredit:(NSString *)profile amount:(int)amount content:(NSString *)content;

/**
 退单

 @param profile 账户名称         类型:NSString
 @param orderId 订单ID         类型:NSString
 @param reason 退单原因         类型:NSString
 @param type 退单类型。eg. 仅退款/仅退货/退货且退款/其他     类型:NSString
 */
+ (void)onChargeBack:(NSString *)profile orderId:(NSString *)orderId reason:(NSString *)reason type:(NSString *)type;

/**
 创建角色

 @param name 角色名称         类型:NSString
 */
+ (void)onCreateRole:(NSString *)name;

/**
 完成试用体验

 @param profile 账户名称         类型:NSString
 @param content 体验信息         类型:NSString
 */
+ (void)onTrialFinished:(NSString *)profile content:(NSString *)content;

/**
 完成新手教程

 @param profile 账户名称         类型:NSString
 @param content 教程信息         类型:NSString
 */
+ (void)onGuideFinished:(NSString *)profile content:(NSString *)content;


/**
 完成课程试听

 @param profile 账户名称         类型:NSString
 @param content 教程信息         类型:NSString
 */
+ (void)onPreviewFinished:(NSString *)profile content:(NSString *)content;


/**
 完成免费阅读

 @param profile 账户名称         类型:NSString
 @param content 教程信息         类型:NSString
 */
+ (void)onFreeFinished:(NSString *)profile content:(NSString *)content;


/**
通过关卡

 @param profile 账户名称         类型:NSString
 @param levelId 关卡ID         类型:NSString
 */
+ (void)onLevelPass:(NSString *)profile levelId:(NSString *)levelId;

/**
 解锁成就

 @param profile 账户名称         类型:NSString
 @param achievementId 成就ID         类型:NSString
 */
+ (void)onAchievementUnlock:(NSString *)profile achievementId:(NSString *)achievementId;



/**
 支付订单

 @param profile 账户名称         类型:NSString
 @param orderId 订单id          类型:NSString
 @param amount 金额            类型:int
 @param currencyType 币种       类型:NSString
 @param payType 支付类型         类型:NSString
 */
+ (void)onOrderPaySucc:(NSString *)profile withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType;


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
