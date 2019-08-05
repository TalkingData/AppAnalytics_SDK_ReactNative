# React-native-talkingdata-adtracking


Ad Tracking react-native 平台 SDK 由`封装层`和`Native SDK`两部分构成，目前[GitHub](https://github.com/TalkingData/AppAnalytics_SDK_ReactNative)上提供了封装层代码，需要从 [TalkingData官网](https://www.talkingdata.com/spa/sdk/#/config) 下载最新版的 Android 和 iOS 平台 Native SDK，组合使用。

## 目录

* [集成说明](#integration)
* [INSTALL & 安装](#install)
* [IMPORT &  引用](#usage)
* [API & 示例](#api)
* [Run Demo & 运行Demo](#rundemo)
* [LICENSE & 许可](#license)

## 版本支持

⚠️ 支持 React Native **0.47+**

---

<span id="integration"></span>
### 集成说明
1. 下载本项目（封装层）到本地；  
2. 访问 [TalkingData官网](https://www.talkingdata.com/spa/sdk/#/config?productLine=AppAnalytics&sdkPlatform=react-native) 下载最新版的 Android 和 iOS 平台 App Analytics SDK（ Native SDK）
选择 react-native 平台进行功能定制；

	![](./img/adt/application.png)
3. 将下载的最新版 `Native SDK` 复制到`封装层`中，构成完整的 react-native SDK。  
  - Android 平台  
  	* 将最新的 .jar 文件复制到 `lib/AdTracking/android/src/main/libs/` 目录下
  	* 修改lib/AdTracking/android/build.gradle中jar包的名称为新jar包的名称

  		<img src='./img/android_gradle.png'></img>
  - iOS 平台  

    * 将最新的 .a 文件复制到 `lib/AdTracking/ios` 目录下
4. 按 `Native SDK` 功能选项对`封装层`代码进行必要的删减，详见“注意事项”第2条；
5. 将 react-native SDK 集成您需要统计的工程中，并按 [集成文档](http://doc.talkingdata.com/posts/35) 进行必要配置和功能调用。

<span id="install"></span>

## INSTALL & 安装


#### iOS


将`lib/AdTracking/ios目录下`libTalkingDataAppCpa.a`,`TalkingDataAppCpa.h`,`RCTTDAdTrackingSDK.h`,`RCTTDadTrackingSDK.m`拖入到工程目录

<img src='./img/adt/project_ios.png'></img>




#### Android


* 将`lib/AdTracking/android`以Module方式引入项目中：

<img src='./img/adt/android_project.png'></img>


* 在 `MainApplication.java` 中添加:
  
```diff
+ import com.talkingdata.adtracking.TalkingDataADTPackage;

  public class MainApplication extends Application implements ReactApplication {
    //......

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
+         new TalkingDataADTPackage(),
          new MainReactPackage()
      );
    }
    
    ......
  }
```

---

<span id="usage"></span>
## IMPORT &  引用

JS层引用头文件

```js
import {TalkingDataAdTracking,TalkingDataADTOrder,TalkingDataADTShoppingCart,TalkingDataAdSearch} from 'TalkingDataAdTracking'
```

#### iOS
添加初始化代码

```diff
+ #import "TalkingDataAppCpa.h"

  -(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  
+  [TalkingDataAppCpa init:@"你的appid" withChannelId:@"appstore"];

  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"rnDemo"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

```

#### Android

添加初始化代码

* 在 `MainApplication.java` 中添加:
  
```diff
+ import com.tendcloud.appcpa.TalkingDataAppCpa;

  public class MainApplication extends Application implements ReactApplication {
    //......

    @Override
    public void onCreate() {
       super.onCreate();
+      TalkingDataAppCpa.init(this, "您的 App ID", "渠道 ID");
       SoLoader.init(this, /* native exopackage */ false);
    }
    ......
  }
```

* 在 `AndroidManifest.xml` 中添加：

```diff
<!--?xml version="1.0" encoding="utf-8"?-->
<manifest ......>
+  <uses-permission android:name="android.permission.INTERNET" /><!-- 允许程序联网和发送统计数据的权限。-->
+  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" /><!-- 允许应用检测网络连接状态，在网络异常状态下避免数据发送，节省流量和电量。-->
+  <uses-permission android:name="android.permission.READ_PHONE_STATE"  /><!-- 允许应用以只读的方式访问手机设备的信息，通过获取的信息来唯一标识用户。-->
+  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"  /><!-- 获取设备的MAC地址，同样用来标识唯一用户。-->
+  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"  /><!-- 用于保存设备信息，以及记录日志。-->
+  <uses-permission android:name="android.permission.GET_TASKS"  /><!-- (建议配置) 获取当前应用是否在显示应用，可以更精准的统计用户活跃-->
+  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"  /><!-- (可选权限) 可通过GPS获取设备的位置信息，用来修正用户的地域分布数据，使报表数据更准确。-->
+  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"  /><!-- (可选权限) 用来获取该应用被使用的粗略位置信息。-->

  <application ......>
  <activity ......>
  ......
  </activity>
  ......
  </application>
</manifest>
```


<span id="api"></span>
## API & 示例

| 方法                    | 参数         |  iOS | Android |  desc     |
| :---- | :----- | :-- | :---- | :-------- |
| [getDeviceID(callback)](#getdeviceid)|  Callback |  ✅  |   ✅   |  获取设备ID  |
| [onRegister(account)](#onregister)          |    Account,账户名  |  ✅  |   ✅  |  注册接口用于记录用户在使用应用过程中的注册行为。建议在注册成功时调用此接口。 |
| [onLogin(account)](#onlogin)                | Account,账户名                                               |  ✅  |   ✅   |  登录接口用于记录用户在使用应用过程中的登录行为。  |
| [onCreateRole(name)](#oncreaterole)                          | name,角色名称                                                | ✅ | ✅ | 在用户创建角色的时候调用TalkingDataAppCpa的onCreateRole接口。 |
| [onPlaceOrder(accountId,orderString)](#onplaceorder)                 |    accountId 账户id,orderString 订单的字符串     |  ✅  |   ✅   |  下单接口用于记录用户在使用应用过程中的成功下单的行为。 下单接口由3个子接口构成：创建订单、添加订单详情、成功下单。  |
| [onOrderPaySucc(account,orderId,amount,currencyType,payType)](#onorderpaysuccess) | Account账户 orderId订单id,amount订单数量，currencyType，订单金额，payType支付类型 |  ✅  |   ✅   |  成功支付订单接口用于记录用户完成订单支付的行为。 |
| [onPay(account,orderId,amount,currencyType,payType)](#onviewitem) |   account账户，orderId 订单id，amount 数量，currencyType货币类型，payType支付类型   |  ✅  |   ✅   | 用于记录用户的支付行为 |
| [onPayWithItem(account,orderId,amount,currencyType,payType,itemId,itemCount)](#onviewitem) | account 账户，orderid订单id，amount数量，currencty火币类型，payType支付类型，itemId道具id，itemCount道具数量 | ✅ | ✅ | 用于记录用户的支付行为 |
| [onPayWithOrder(account,orderId,amount,currencyType,payType,orderString)](#onviewitem) | account 账户，orderId订单id，amount数量，currencyType 支付类型，payType支付类型，orderString订单字符串string | ✅ | ✅ | 用于记录用户的支付行为 |
| [onAddItemToShoppingCart(itemId,category,name,unitPrice,amount)](#onadditemtoshoppingcart)                 |    itemId item的ID,category 类别,name 名称,unitPrice 单价,amount 数量     |  ✅  |   ✅   |  用于记录用户将商品加入购物车的行为。|
| [onViewShoppingCart(shoppingCartString)](#onviewshoppingcart)                 |   shoppingCartString 购物车字符串    |  ✅  |   ✅   | 查看购物车用于记录用户浏览购物车内商品的行为。 这个接口由3个子接口构成：创建购物车、添加购物车详情、查看购物车。调用时需要按顺序完成这3个子接口的调用，否则可能会无法产生正确的查看购物车行为数据。 |
| onCustEvent1()<br/>onCustEvent2()<br/>onCustEvent3()<br/>onCustEvent4()<br/>onCustEvent5()<br/>onCustEvent6()<br/>onCustEvent7()<br/>onCustEvent8()<br/>onCustEvent9()<br/>onCustEvent10()<br/> | 自定义事件 1~10 | ✅ | ✅ |  |
| onAdSearch(adSearchString) | 广告搜索事件，adSearchString 广告搜索的字符串 | ✅ | ✅ |  |

## 

<span id="getdeviceid"></span>

### getDeviceID(callback)

获取设备ID

**Examples**

```js
import { TalkingDataAdTracking } from 'TalkingDataAdTracking'

TalkingDataAdTracking.getDeviceID((device_id)=>{
   //do something with device_id
});
```

**Notes**

> 此接口是异步接口
>
> 接口支持iOS+Android平台。





---

<span id="onregister"></span>
### onRegister(account)

注册接口用于记录用户在使用应用过程中的注册行为。建议在注册成功时调用此接口。

**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking'

accountId = '123'; //账户id
TalkingDataAdTracking.onRegister(accountId);

```

**Notes**

> 接口支持iOS+Android平台。
> 

**参数**

* **accountId (required):** string 账户ID

---

<span id="onlogin"></span>

### onLogin(account)

登录接口用于记录用户在使用应用过程中的登录行为。

**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking'

accountId = '123'; //账户id
TalkingDataAdTracking.onRegister(accountId);
```

**Notes**
> 接口支持iOS+Android平台。


**参数**

* **accountId (required):** string 账户ID

- 

------

<span id="oncreaterole"></span>

### onCreateRole(name)

登录接口用于记录用户在使用应用过程中的登录行为。

**Examples**

```js
import {TalkingDataAdTracking} fromTalkingDataAdTracking'

name = 'role_name'; //角色名称
TalkingDataAdTracking.onCreateRole(name);

```

**Notes**

> 接口支持iOS+Android平台。

**参数**

- **accountId (required):** string角色名称



---

<span id="onplaceorder"></span>
### onPlaceOrder(accountId,orderString)

下单接口用于记录用户在使用应用过程中的成功下单的行为。
下单接口由3个子接口构成：创建订单、添加订单详情、成功下单。

**Examples**

```js
import {TalkingDataAdTracking, TalkingDataADTOrder} from 'TalkingDataAdTracking'

accountId = 'aid_123';//账户id
orderId = 'oid_123';//订单id
total = 59900; //总钱数 单位为分
currencyType = 'CNY';//货币类型
order = new TalkingDataADTOrder(orderId,total,currencyType);//生成新的订单对象
order.addItem('007','家电','电视',499900,1)
TalkingDataAdTracking.onPlaceOrder(accountId, order.orderString);

```

**Notes**

> 接口支持iOS+Android平台。

**参数**

* **accountId (required):** string 账户id
* **orderId (required):** string 订单id
* **total (required):** string 总钱数 单位为分
* **currencyType (required):** string 货币类型

---

<span id="onorderpaysucc"></span>
### onOrderPaySucc(accountId,payType,orderString)

成功支付订单接口用于记录用户完成订单支付的行为。


**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking'

accountid = 'aid_123';//账户id
orderId = 'oid_123';//订单id
amount = 59900; //总钱数 单位为分
currencyType = 'CNY';//货币类型
payType = '银联支付' //支付类型

TalkingDataAdTracking.onOrderPaySucc(accountid,orderId,amount,currencyType,payType);

```

**Notes**

> 接口支持iOS+Android平台。

**参数**

* **acount (required):** string 账户id
* **orderId (required):** string 订单id
* **amount (required):** number 数量
* **currencyType (required):** 货币类型
* **payType (required):** string 支付类型

------

<span id="onorderpaysucc"></span>

### onPay(account,orderId,amount,currencyType,payType)

成功支付订单接口用于记录用户完成订单支付的行为。

**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking'

accountid = 'aid_123';//账户id
orderId = 'oid_123';//订单id
amount = 59900; //总钱数 单位为分
currencyType = 'CNY';//货币类型
payType = '银联支付' //支付类型

TalkingDataAdTracking.onPay(accountid,orderId,amount,currencyType,payType);

```

**Notes**

> 接口支持iOS+Android平台。

**参数**

- **acount (required):** string 账户id
- **orderId (required):** string 订单id
- **amount (required):** number 数量
- **currencyType (required):** 货币类型
- **payType (required):** string 支付类型



------

<span id="onpaywithitem"></span>

### onPayWithItem(account,orderId,amount,currencyType,payType,itemId,itemCount)

成功支付订单接口用于记录用户完成订单支付的行为。

**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking.js'

accountid = 'aid_123';//账户id
orderId = 'oid_123';//订单id
amount = 59900; //总钱数 单位为分
currencyType = 'CNY';//货币类型
payType = '银联支付' //支付类型
itemid = 'item_123';//道具id
itemcount = 123 ; //道具数量

TalkingDataAdTracking.onPayWithItem(accountid,orderId,amount,currencyType,payType,itemid,itemcount);

```

**Notes**

> 接口支持iOS+Android平台。

**参数**

- **acount (required):** string 账户id

- **orderId (required):** string 订单id

- **amount (required):** number 数量

- **currencyType (required):** 货币类型

- **payType (required):** string 支付类型

- **itemId (required):** string 道具id

- **itemCount (required):** number 道具数量

------

<span id="onpaywithitem"></span>

### onPayWithOrder(account,orderId,amount,currencyType,payType,orderString)

成功支付订单接口用于记录用户完成订单支付的行为。

**Examples**

```js
import {TalkingDataAdTracking,TalkingDataADTOrder} from 'TalkingDataAdTracking.js'

let order = new TalkingDataADTOrder('orderid', '100', 'CNY');
order.addItem('itemid', 'category', 'name' , '1.0', '5');
                                    TalkingDataAdTracking.onPayWithOrder('accountid_001','order_id001',100,'CNY','ApplePay', order.orderString);

```

**Notes**

> 接口支持iOS+Android平台。

**参数**

- **acount (required):** string 账户id
- **orderId (required):** string 订单id
- **amount (required):** number 数量
- **currencyType (required):** 货币类型
- **payType (required):** string 支付类型
- **orderString (required):** string 订单对象string

------

<span id="onviewitem"></span>

### onViewItem(itemId,category,name,unitPrice)


用于记录用户查看商品详情的行为。

**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking'

itemId = 'item_123';//订单id
category = 'item_category'; //类别
name = 'item_name';//道具名称
unitPrice = 123
                                            TalkingDataAdTracking.onViewItem(itemId,category,name,uintPrice);

```

**Notes**
> 接口支持iOS+Android平台。

**参数**

* **itemId (required):** string 道具id
* **category (required):** string 道具类别
* **name (required):** string 道具名称
* **unitPrice (required):** number 道具单价

---

<span id="onadditemtoshoppingcart"></span>
### onAddItemToShoppingCart(itemId,category,name,unitPrice,amount)

用于记录用户将商品加入购物车的行为。


**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking'

itemId = 'item_123';//订单id
category = 'item_category'; //类别
name = 'item_name';//道具名称
unitPrice = 120; //单价 单位为分
amount = 100; //数量

TalkingDataAdTracking.onAddItemToShoppingCart(itemId,category,name,unitPrice,amount);

```

**Notes**
> 接口支持iOS+Android平台。

**参数**

* **itemId (required):** string 道具id
* **category (required):** string 道具类别
* **name (required):** string 道具名称
* **unitPrice (required):** number 单价 单位为分
* **amount (required):** number 数量

---

<span id="onviewshoppingcart"></span>

### onViewShoppingCart(shoppingCartString)

查看购物车用于记录用户浏览购物车内商品的行为。
这个接口由3个子接口构成：创建购物车、添加购物车详情、查看购物车。调用时需要按顺序完成这3个子接口的调用，否则可能会无法产生正确的查看购物车行为数据。

**Examples**

```js
import {TalkingDataADTShoppingCart, TalkingDataAdTracking} from 'TalkingDataAdTracking'

let talkingdataShoppingCart = new TalkingDataShoppingCart();

itemId = 'item_123';//订单id
category = 'item_category'; //类别
name = 'item_name';//道具名称
unitPrice = 120; //单价 单位为分
amount = 100; //数量                                       
talkingdataShoppingCart.addItem(itemId,category,name,unitPrice,amount); //购物车添加item

TalkingDataAdTracking.onViewShoppingCart(talkingdataShoppingCart.shoppingCartString);//记录添加购物车

```

**Notes**
> 接口支持iOS+Android平台。

**参数**

* **itemId (required):** string 道具id
* **category (required):** string 道具类别
* **name (required):** string 道具名称
* **unitPrice (required):** number 单价 单位为分
* **amount (required):** number 数量

---

<span id="onCustEvent"></span>

### 自定义事件
系统预留了10个自定义事件，在需要的时候调用 onCustEvent1, onCustEvent2, ..., onCustEvent10 方法。
**Examples**

```js
import {TalkingDataAdTracking} from 'TalkingDataAdTracking'

TalkingDataAdTracking.onCustEvent1();//自定义事件1
TalkingDataAdTracking.onCustEvent2();//自定义事件2
TalkingDataAdTracking.onCustEvent3();//自定义事件3
TalkingDataAdTracking.onCustEvent4();//自定义事件4
TalkingDataAdTracking.onCustEvent5();//自定义事件5
TalkingDataAdTracking.onCustEvent6();//自定义事件6
TalkingDataAdTracking.onCustEvent7();//自定义事件7
TalkingDataAdTracking.onCustEvent8();//自定义事件8
TalkingDataAdTracking.onCustEvent9();//自定义事件9
TalkingDataAdTracking.onCustEvent10();//自定义事件10

```

**Notes**
> 接口支持iOS+Android平台。

---

<span id="onAdSearch"></span>

### onAdSearch(adSearch)

广告搜索事件

**Examples**

```js
import {TalkingDataAdSearch, TalkingDataAdTracking} from 'TalkingDataAdTracking'

let talkingdataAdSearch = new TalkingDataAdSearch();
talkingdataAdSearch.setDestination('Beijing');
talkingdataAdSearch.setOrigin('Shanghai');
talkingdataAdSearch.setItemId('123');
talkingdataAdSearch.setItemLocationId('Edu');
talkingdataAdSearch.setStartDate('2019-01-01');
talkingdataAdSearch.setEndDat('2019-12-12');
talkingdataAdSearch.setSearchTerm('searchTerm');
talkingdataAdSearch.setGoogleBusinessVertical('google Business Vertical');
talkingdataAdSearch.addCustom('CustomA','valueA');
talkingdataAdSearch.addCustom('CustomB','valueB');

TalkingDataAdTracking.onAdSearch(talkingdataAdSearch.adSearchString;//广告搜索事件

```

**Notes**
> 接口支持iOS+Android平台。

**参数**

* **destination:** 目的地城市 ID，至多64字符，支持数字+字母
* **origin:** 出发地城市 ID，至多64字符，支持数字+字母
* **itemId:** 商品 ID (酒店/汽车)；至多64字符，支持数字+字母
* **itemLocationId:** 商品位置 ID（求职招聘/教育行业）；至多64字符，支持数字+字母
* **startDate:** 业务事件起始日期（航班出发日期）；yyyy-mm-dd，"2016-09-23"；
* **endDate:** 业务事件截止日期（航班返程日期）；yyyy-mm-dd，"2016-09-23"；
* **searchTerm:** 搜索字符串，至多 128 字符
* **googleBusinessVertical:** 用于区分各种业务类型的字符串，至多128字符
* **custom:** 用于开发者扩展数据字段

---

<span id="rundemo"></span>

## Run Demo & 运行Demo
下载本项目，进入到example文件夹

```
cd example
```

安装Demo的依赖

```js
npm install --save react-native@0.57.0
npm install --save react-navigation
npm install --save react-native-actionsheet
npm install --save react-native-vector-icons
npm install --save react-native-keyboard-aware-scroll-view
```

适配Xcode10

```
cd node_modules/react-native/scripts 
./ios-install-third-party.sh 
cp -rf third-party ./../third-party
cd ../../../
cd node_modules/react-native/third-party/glog-0.3.5/ && ../../scripts/ios-configure-glog.sh
cd ../../../../

⚠️如果因为nullable等关键字报错，在rn模板里点fix即可。
```


链接静态库

```
react-native link
```

运行Demo

```js
~~react-native run-ios~~
iOS请直接双击打开TalkingDataSDKDemo.xcodeproj在xcode中运行
react-native run-android
```

Demo截图

<img src="./img/adt/demo.png" width="75%" hegiht="75%" align=center />

---




<span id="license"></span>
## LICENSE & 许可

[MIT LICENSE](LICENSE)

