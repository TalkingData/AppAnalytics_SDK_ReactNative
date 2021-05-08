import {NativeModules} from 'react-native';
import {Platform} from 'react-native';

const TD = NativeModules.TalkingData;

/**
  @"ANONYMOUS":匿名账户,
  @"REGISTERED":显性注册账户,
  @"SINA_WEIBO":新浪微博,
  @"QQ":QQ账户,
  @"QQ_WEIBO":腾讯微博,
  @"ND91":91账户,
  @"WEIXIN":微信,
  @"TYPE1":自定义类型1,
  @"TYPE2":自定义类型2,
  @"TYPE3":自定义类型3,
  @"TYPE4":自定义类型4,
  @"TYPE5":自定义类型5,
  @"TYPE6":自定义类型6,
  @"TYPE7":自定义类型7,
  @"TYPE8":自定义类型8,
  @"TYPE9":自定义类型9,
  @"TYPE10":自定义类型10,
*/
const TDPROFILE = NativeModules.TDProfileType;


class TalkingDataShoppingCart {
	
	constructor(){
		this.items = new Array();
	}

  	addItem(itemId,category,name,unitPrice,amount){
  		this.items.push({'itemId':itemId,'category':category,'name':name,'unitPrice':unitPrice,'amount':amount});
  	}

  	get shoppingCartString(){
  		return JSON.stringify({
  			'items':this.items
  		});
  	}
}

class TalkingDataAppAnalytics {

	/**
	* 获取SDK所使用Device的ID
	* iOS Android
	* @return {string} deviceID
	*/
    static getDeviceID(callback){
        TD.getDeviceID().then(callback);
        // if (Platform.OS === 'ios') {
        //     // TD.getDeviceID(callback)
        //     TD.getDeviceID().then(callback);
        // } else if (Platform.OS === 'android'){
        //     TD.getDeviceID().then(callback);
        // }
    }

    /**
    * 获取SDK所使用Device的ID
    * iOS Android
    * @return {string} OAID
    */
    static getOAID(callback){
         if(Platform.OS === 'android'){
            TD.getOAID().then(callback);
         }
    }

	/**
	* 统计日志开关
	* iOS only
	* @param {Boolean} enabled
	*/
	static setLogEnabled(enable){
		if (Platform.OS === 'ios'){
			TD.setLogEnabled(enable);
		}
	}

	/**
	* 是否捕捉程序崩溃记录
	* iOS Android
	* @param {Boolean} enabled 默认是false
	*/
	static setExceptionReportEnabled(enable){
        TD.setExceptionReportEnabled(enable);
	}

	/**
	* 统计日志开关
	* iOS only
	* @param {Boolean} enabled
	*/
	static setSignalReportEnabled(enable){
		if (Platform.OS === 'ios'){
			TD.setSignalReportEnabled(enable);
		}
	}

	/**
	* 设置经纬度
	* iOS only
	* @param {number} lat
	* @param {number} lnt
	*/
	static setLatitudeLongitude(lat,lnt){
		if (Platform.OS === 'ios'){
			TD.setLatitude(lat,lnt);
		}
	}


	/**
	* 开启防作弊
	* iOS Android
	* @param {Boolean} enabled
	*/
	static setAntiCheatingEnabled(enable){
		TD.setAntiCheatingEnabled(enable);
	}

	/**
	* 注册
	* iOS Android
	* @param {string} profileId 账户ID
	* @param {TDProfileType} profileType 账户类型 详见
	* @param {string} name 账户昵称
	*/
	static onRegister(profileId,profileType,name){
		TD.onRegister(profileId,profileType,name);
	}

	/**
	* 登录
	* iOS Android
	* @param {string} profileId 账户ID
	* @param {TDProfileType} profileType 账户类型 详见
	* @param {string} name 账户昵称
	*/
	static onLogin(profileId,profileType,name){
		TD.onLogin(profileId,profileType,name);
	}

	/**
	* 记录事件
	* iOS Android
	* @param {string} eventName 事件名称
	* @param {string} label 事件标签（自定义）
	* @param {object} parameters 事件标签(自定义)
	*/
	static onEvent(eventName,label,parameters){
		TD.onEvent(eventName,label,parameters);
	}

    /**
    * 记录事件
    * iOS Android
    * @param {string} eventName 事件名称
    * @param {string} label 事件标签（自定义）
    * @param {object} parameters 事件标签(自定义)
    * @param {double} value 事件数值
    */
    static onEventWithValue(eventName,label,parameters,value){
		TD.onEventWithValue(eventName,label,parameters,value);
    }

	/**
	* 添加全局的字段，这里的内容会每次的自定义事都会带着，发到服务器。
	也就是说如果您的自定义事件中每一条都需要带同样的内容，如用户名称等，就可以添加进去
	* iOS Android
	* @param {string} k 全局的key，string类型。
	* @param {any} v 全局的value，任意类型。
	*/
	static setGlobalKV(k,v){
		if (Platform.OS === 'ios') {
			TD.setGlobalKV(k,v);
		}else if(Platform.OS === 'android'){
			switch (typeof v){
                case "number":
                    TD.setGlobalKVDouble(k,v);
                	break;
                case "string":
                    TD.setGlobalKVString(k,v);
                    break;
                case "boolean":
                    TD.setGlobalKVBoolean(k,v);
                    break;
				case "object":
					if (v instanceof Array){
                        TD.setGlobalKVArray(k,v);
					} else{
                        TD.setGlobalKVMap(k,v);
					}
					break;
				default:
					TD.setGlobalKVMap(k,{v});

			}
		};
	}

	/**
	* 删除全局数据
	* iOS Android
	* @param {string} k 全局的key，string类型。
	*/
	static removeGlobalKV(k){
		TD.removeGlobalKV(k);
	}

	/**
	* 开始跟踪某一页面，记录页面打开时间。
	* iOS Android
	* @param {string} pageName 页面名称。
	*/
	static onPageStart(pageName) {
		TD.onPageStart(pageName);
	}

	/**
	* 结束跟踪某一页面，记录页面关闭时间。
	* iOS Android
	* @param {string} pageName 页面名称。
	*/
	static onPageEnd(pageName){
		TD.onPageEnd(pageName);
	}

	/**
	* 下单。
	* iOS Android
	* @param {string} profileId 账户ID
	* @param {object} order 订单对象
	* order 订单对象
		{
			orderId(string) 订单id
			total(number) 订单总价
			currencyType(string) 币种
			category(string) 商品类别

		}
	*/
	static onPlaceOrder(orderId,amount,currencyType){
		TD.onPlaceOrder(orderId,amount,currencyType);
	}

	static onOrderPaySucc(orderId,amount,currencyType,paymentType){
        TD.onOrderPaySucc(orderId,amount,currencyType,paymentType);
	}

    static onCancelOrder(orderId,amount,currencyType){
        TD.onCancelOrder(orderId,amount,currencyType);
    }
	static onViewItem(itemId,category,name,unitPrice){
		TD.onViewItem(itemId,category,name,unitPrice);
	}

	static onAddItemToShoppingCart(itemId,category,name,unitPrice,amount){
		TD.onAddItemToShoppingCart(itemId,category,name,unitPrice,amount);
	}

	static onViewShoppingCart(shoppingCart){
		TD.onViewShoppingCart(shoppingCart);
	}


}

export {TalkingDataAppAnalytics,TDPROFILE,TalkingDataShoppingCart};
