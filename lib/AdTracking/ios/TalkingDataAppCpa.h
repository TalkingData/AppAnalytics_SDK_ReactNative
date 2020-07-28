//
//  TalkingDataAppCpa.h
//  TalkingDataAppCpa
//
//  Created by liweiqiang on 13-12-25.
//  Copyright (c) 2012年 __TendCloud__. All rights reserved.
//

#import <Foundation/Foundation.h>


@interface TDSearch : NSObject

// 搜索分类
@property (nonatomic, strong) NSString *category;
// 搜索内容
@property (nonatomic, strong) NSString *content;

// 商品ID
@property (nonatomic, strong) NSString *itemId;
// 商品位置
@property (nonatomic, strong) NSString *itemLocationId;

// 目的地城市
@property (nonatomic, strong) NSString *destination;
// 出发地城市
@property (nonatomic, strong) NSString *origin;
// 起始Unix时间戳。单位：毫秒
@property (nonatomic, assign) int64_t startDate;
// 截止Unix时间戳。单位：毫秒
@property (nonatomic, assign) int64_t endDate;

@end


@interface TDOrder : NSObject

/**
 *  创建订单
 *  @param  orderId             订单ID
 *  @param  total               订单总价
 *  @param  currencyType        币种
 */
+ (TDOrder *)orderWithOrderId:(NSString *)orderId total:(int)total currencyType:(NSString *)currencyType;

/**
 *  添加商品详情
 *  @param  category            商品类别
 *  @param  itemId              商品ID
 *  @param  name                商品名称
 *  @param  unitPrice           商品单价
 *  @param  amount              商品数量
 */
- (TDOrder *)addItemWithCategory:(NSString *)category name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;
- (TDOrder *)addItemWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

@end


@interface TDShoppingCart : NSObject

/**
 *  创建购物车
 */
+ (TDShoppingCart *)createShoppingCart;

/**
 *  添加商品详情
 *  @param  category            商品类别
 *  @param  itemId              商品ID
 *  @param  name                商品名称
 *  @param  unitPrice           商品单价
 *  @param  amount              商品数量
 */
- (TDShoppingCart *)addItemWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

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
@property (nonatomic, assign) int64_t startDate;
// 交易终止Unix时间戳。单位：毫秒
@property (nonatomic, assign) int64_t endDate;
// 货币类型
@property (nonatomic, strong) NSString *currencyType;
// 交易详情
@property (nonatomic, strong) NSString *content;

@end


@interface TalkingDataAppCpa : NSObject

/**
 *  获取设备ID
 *  @return deviceId            设备的ID
 */
+ (NSString *)getDeviceId;

/**
 *  设置不显示日志。如发布时不需显示日志，应当最先调用该方法
 */
+ (void)setVerboseLogDisable;
+ (void)setVerboseLogDisabled;

/**
 *  开启后台使用时长统计，需在SDK初始化之前调用。
 */
+ (void)backgroundSessionEnabled;

/**
 *  用于精准的追踪以Safari作为资源载体的广告来源  如果需要使用应当在init方法之前调用
 */
+ (void)enableSFSafariViewControllerTracking NS_DEPRECATED_IOS(10_0, NA, "此方法会影响到用户交互，使用前请确保和产品、业务沟通清楚!");

/**
 *  AdTracking SDK初始化方法。请在application:didFinishLaunchingWithOptions:方法里调用
 *  @param  appId               应用的唯一标识，统计后台注册得到
 *  @param  channelId           渠道名（可选）。如“AppStore”
 *  @param  custom              自定义参数（可选）。
 */
+ (void)init:(NSString *)appId withChannelId:(NSString *)channelId;
+ (void)init:(NSString *)appId withChannelId:(NSString *)channelId custom:(NSString *)custom;

/**
 *  注册账户事件
 *  @param  account             账户名称
 *  @param  invitationCode      邀请码
 */
+ (void)onRegister:(NSString *)account;
+ (void)onRegister:(NSString *)account invitationCode:(NSString *)invitationCode;

/**
 *  通过账户登录事件
 *  @param  account             账户名称
 */
+ (void)onLogin:(NSString *)account;

/**
 *  添加支付相关信息事件
 *  @param  account             账户名称
 *  @param  method              支付方式
 *  @param  content             支付信息
 */
+ (void)onCreateCard:(NSString *)account method:(NSString *)method content:(NSString *)content;

/**
 *  唤醒事件
 *  @param  link                唤醒链接
 */
+ (void)onReceiveDeepLink:(NSURL *)link;

/**
 *  收藏事件
 *  @param  category            收藏分类
 *  @param  content             收藏内容
 */
+ (void)onFavorite:(NSString *)category content:(NSString *)content;

/**
 *  分享事件
 *  @param  account             账户名称
 *  @param  content             分享内容
 */
+ (void)onShare:(NSString *)account content:(NSString *)content;

/**
 *  签到打卡事件
 *  @param  account             账户名称
 *  @param  punchId             签到打卡ID
 */
+ (void)onPunch:(NSString *)account punchId:(NSString *)punchId;

/**
 *  搜索事件
 *  @param  search              搜索信息，参见 TDSearch 定义
 */
+ (void)onSearch:(TDSearch*)search;

/**
 *  客户联系事件
 *  @param  account             账户名称
 *  @param  content             联系内容
 */
+ (void)onContact:(NSString *)account content:(NSString *)content;

/**
 *  支付
 *  @param  account             账户名称
 *  @param  orderId             订单ID
 *  @param  amount              金额
 *  @param  currencyType        币种
 *  @param  payType             支付类型
 */
+ (void)onPay:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType;

/**
 *  支付
 *  @param  account             账户名称
 *  @param  orderId             订单ID
 *  @param  amount              金额
 *  @param  currencyType        币种
 *  @param  payType             支付类型
 *  @param  itemId              商品ID
 *  @param  itemCount           商品个数
 */
+ (void)onPay:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withItemId:(NSString *)itemId withItemCount:(int)itemCount;

/**
 *  退单
 *  @param  account             账户名称
 *  @param  orderId             订单ID
 *  @param  reason              退单原因 
 *  @param  type                退单类型。eg. 仅退款/仅退货/退货且退款/其他
 */
+ (void)onChargeBack:(NSString *)account orderId:(NSString *)orderId reason:(NSString *)reason type:(NSString *)type;

/**
 *  用户预约事件
 *  @param  account             账户名称
 *  @param  reservationId       预约ID
 *  @param  category            预约分类
 *  @param  amount              预约金
 *  @param  term                预约信息
 */
+ (void)onReservation:(NSString *)account reservationId:(NSString *)reservationId category:(NSString *)category amount:(int)amount term:(NSString *)term;

/**
 *  用户预订事件
 *  @param  account             账户名称
 *  @param  bookingId           预订ID
 *  @param  category            预订分类
 *  @param  amount              预订金
 *  @param  content             预订内容
 */
+ (void)onBooking:(NSString *)account bookingId:(NSString *)bookingId category:(NSString *)category amount:(int)amount content:(NSString *)content;

/**
 *  查看商品
 *  @param  category            商品类别
 *  @param  itemId              商品ID
 *  @param  name                商品名称
 *  @param  unitPrice           商品单价
 */
+ (void)onViewItemWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice;

/**
 *  添加购物车
 *  @param  category            商品类别
 *  @param  itemId              商品ID
 *  @param  name                商品名称
 *  @param  unitPrice           商品单价
 *  @param  amount              商品数量
 */
+ (void)onAddItemToShoppingCartWithCategory:(NSString *)category itemId:(NSString *)itemId name:(NSString *)name unitPrice:(int)unitPrice amount:(int)amount;

/**
 *  查看购物车
 *  @param  shoppingCart        购物车对象，详见 TDShoppingCart
 */
+ (void)onViewShoppingCart:(TDShoppingCart *)shoppingCart;

/**
 *  下订单
 *  @param  account             账户名称
 *  @param  order               订单对象
 */
+ (void)onPlaceOrder:(NSString *)account withOrder:(TDOrder *)order;

/**
 *  支付订单
 *  @param  account             账户名称
 *  @param  orderId             订单ID
 *  @param  amount              金额
 *  @param  currencyType        币种
 *  @param  payType             支付类型
 */
+ (void)onOrderPaySucc:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType;

/**
 *  带订单详情支付
 *  @param  account             账户名称
 *  @param  orderId             订单ID
 *  @param  amount              金额
 *  @param  currencyType        币种
 *  @param  payType             支付类型
 *  @param  order               订单详情
 */
+ (void)onPay:(NSString *)account withOrderId:(NSString *)orderId withAmount:(int)amount withCurrencyType:(NSString *)currencyType withPayType:(NSString *)payType withOrder:(TDOrder *)order;

/**
 *  授信
 *  @param  account             账户名称
 *  @param  amount              授信额度
 *  @param  content             授信信息
 */
+ (void)onCredit:(NSString *)account amount:(int)amount content:(NSString *)content;

/**
 *  交易
 *  @param  account             帐户名称
 *  @param  transaction         交易信息对象，详见TDTransaction
 */
+ (void)onTransaction:(NSString *)account transaction:(TDTransaction *)transaction;

/**
 *  创建角色
 *  @param  name                角色名称
 */
+ (void)onCreateRole:(NSString *)name;

/**
 *  通过关卡
 *  @param  account             账户名称
 *  @param  levelId             关卡ID
 */
+ (void)onLevelPass:(NSString *)account levelId:(NSString *)levelId;

/**
 *  完成新手教程
 *  @param  account             账户名称
 *  @param  content             教程信息
 */
+ (void)onGuideFinished:(NSString *)account content:(NSString *)content;

/**
 *  课程学习
 *  @param  account             账户名称
 *  @param  course              课程信息
 *  @param  begin               开始学习Unix时间戳。单位：毫秒
 *  @param  duration            学习时长。单位：秒
 */
+ (void)onLearn:(NSString *)account course:(NSString *)course begin:(int64_t)begin duration:(int)duration;

/**
 *  完成课程试听
 *  @param  account             账户名称
 *  @param  content             教程信息
 */
+ (void)onPreviewFinished:(NSString *)account content:(NSString *)content;

/**
 *  文章阅读
 *  @param  account             账户名称
 *  @param  book                文章信息
 *  @param  begin               开始阅读Unix时间戳。单位：毫秒
 *  @param  duration            阅读时长。单位：秒
 */
+ (void)onRead:(NSString *)account book:(NSString *)book begin:(int64_t)begin duration:(int)duration;

/**
 *  完成免费阅读
 *  @param  account             账户名称
 *  @param  content             教程信息
 */
+ (void)onFreeFinished:(NSString *)account content:(NSString *)content;

/**
 *  解锁成就
 *  @param  account             账户名称
 *  @param  achievementId       成就ID
 */
+ (void)onAchievementUnlock:(NSString *)account achievementId:(NSString *)achievementId;

/**
 *  详情浏览
 *  @param  account             账户名称
 *  @param  content             详情信息
 *  @param  begin               开始浏览Unix时间戳。单位：毫秒
 *  @param  duration            浏览时长。单位：秒
 */
+ (void)onBrowse:(NSString *)account content:(NSString *)content begin:(int64_t)begin duration:(int)duration;

/**
 *  完成试用体验
 *  @param  account             账户名称
 *  @param  content             体验信息
 */
+ (void)onTrialFinished:(NSString *)account content:(NSString *)content;

/**
 *  自定义事件1
 */
+ (void)onCustEvent1;

/**
 *  自定义事件2
 */
+ (void)onCustEvent2;

/**
 *  自定义事件3
 */
+ (void)onCustEvent3;

/**
 *  自定义事件4
 */
+ (void)onCustEvent4;

/**
 *  自定义事件5
 */
+ (void)onCustEvent5;

/**
 *  自定义事件6
 */
+ (void)onCustEvent6;

/**
 *  自定义事件7
 */
+ (void)onCustEvent7;

/**
 *  自定义事件8
 */
+ (void)onCustEvent8;

/**
 *  自定义事件9
 */
+ (void)onCustEvent9;

/**
 *  自定义事件10
 */
+ (void)onCustEvent10;

@end
