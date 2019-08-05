import {NativeModules} from 'react-native';
import {Platform} from 'react-native';

const TDADT = NativeModules.TalkingDataAppCpa;

class TalkingDataADTOrder {

	constructor(orderId,total,currencyType) {
		this.orderId = orderId;
		this.total = total;
		this.currencyType = currencyType;
		this.items = new Array();
  	}

  	addItemWithItemId(itemId,category,name,unitPrice,amount){
  		this.items.push({'itemId':itemId,'category':category,'name':name,'unitPrice':unitPrice,'amount':amount});
  	}

	addItem(category,name,unitPrice,amount){
		this.items.push({'category':category,'name':name,'unitPrice':unitPrice,'amount':amount});
	}

  	get orderString(){
  		return JSON.stringify({
  			'orderId':this.orderId,
  			'total':this.total,
  			'currencyType':this.currencyType,
  			'items':this.items
  		});
  	}
}

class TalkingDataADTShoppingCart {
	
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

class TalkingDataAdSearch {
	
	constructor(){
		this.custom = new Object();
	}

	setDestination(destination){
		this.destination = destination;
	}

	setOrigin(origin){
		this.origin = origin;
	}

	setItemId(item_id){
		this.item_id = item_id;
	}

	setItemLocationId(item_location_id){
		this.item_location_id = item_location_id;
	}

	setStartDate(start_date){
		this.start_date = start_date;
	}

	setEndDate(end_date){
		this.end_date = end_date;
	}

	setSearchTerm(search_term){
		this.search_term = search_term;
	}

	setGoogleBusinessVertical(google_business_vertical){
		this.google_business_vertical = google_business_vertical;
	}

	addCustom(key, value){
		this.custom[key] = value;
	}

  	get adSearchString(){
  		return JSON.stringify({
			  'destination':this.destination,
			  'origin':this.origin,
			  'item_id':this.item_id,
			  'item_location_id':this.item_location_id,
			  'start_date':this.start_date,
			  'end_date':this.end_date,
			  'search_term':this.search_term,
			  'google_business_vertical':this.google_business_vertical,
			  'custom':this.custom
  		});
	}
	  
}

class TalkingDataAdTracking {
	/**
	* 获取SDK所使用Device的ID
	* iOS Android
	* @return {string} deviceID
	*/
    static getDeviceID(callback){
        TDADT.getDeviceID().then(callback);
    }


/**
	* 注册
	* iOS Android
	* @param {string} accountId 账户ID
	* @param {TDAccountType} accountType 账户类型 详见
	* @param {string} name 账户昵称
	*/
	static onRegister(account){
		if (typeof account !== 'string') {
			return ;
		}
		TDADT.onRegister(account);
	}

	/**
	* 登录
	* iOS Android
	* @param {string} account 账户ID
	*/
	static onLogin(account){
		if (typeof account !== 'string') {
			return ;
		}
		TDADT.onLogin(account);
	}

	/**
	* 创建角色
	* iOS Android
	* @param {string} name 角色名称
	*/
	static onCreateRole(name){
		if (typeof name !== 'string') {
			return ;
		}
		TDADT.onCreateRole(name);
	}

	static onPay(account,orderId,amount,currencyType,payType) {
		if (typeof account !== 'string') {
			return;
		};
		if (typeof orderId !== 'string') {
			return;
		};
		if (typeof amount !== 'number') {
			return;
		};
		if (typeof currencyType !== 'string') {
			return;
		};
		if (typeof payType !=='string') {
			return;
		};
		TDADT.onPay(account,orderId,amount,currencyType,payType)
	}

	static onPayWithItem(account,orderId,amount,currencyType,payType,itemId,itemCount) {
		if (typeof account !== 'string') {
			return;
		};
		if (typeof orderId !== 'string') {
			return;
		};
		if (typeof amount !== 'number') {
			return;
		};
		if (typeof currencyType !== 'string') {
			return;
		};
		if (typeof payType !=='string') {
			return;
		};
		if (typeof itemId !=='string') {
			return;
		};
		if (typeof itemCount !== 'number') {
			return;
		};
		TDADT.onPayWithItem(account,orderId,amount,currencyType,payType,itemId,itemCount)
	}

	static onPayWithOrder(account,orderId,amount,currencyType,payType,orderString) {
		if (typeof account !== 'string') {
			return;
		};
		if (typeof orderId !== 'string') {
			return;
		};
		if (typeof amount !== 'number') {
			return;
		};
		if (typeof currencyType !== 'string') {
			return;
		};
		if (typeof payType !=='string') {
			return;
		};
		if (typeof orderString !== 'string') {
			return;
		};
		TDADT.onPayWithOrder(account,orderId,amount,currencyType,payType,orderString)
	}


	static onViewItem(itemId,category,name,unitPrice){
		if (typeof itemId !== 'string') {
			return;
		};
		if (typeof category !== 'string') {
			return;
		};
		if (typeof name !== 'string') {
			return;
		};
		if (typeof unitPrice !=='number') {
			return;
		};
		TDADT.onViewItem(itemId,category,name,unitPrice);
	}

	static onAddItemToShoppingCart(itemId,category,name,unitPrice,amount){
		if (typeof itemId !== 'string') {
			return;
		};
		if (typeof itemId !== 'string') {
			return;
		};
		if (typeof category !== 'string') {
			return;
		};
		if (typeof name !== 'string') {
			return;
		};
		if (typeof unitPrice !=='number') {
			return;
		};
		if (typeof amount !=='number') {
			return;
		};
		TDADT.onAddItemToShoppingCart(itemId,category,name,unitPrice,amount);
	}




	static onViewShoppingCart(shoppingCart){
		if (typeof shoppingCart !== 'string') {
			return;
		};
		TDADT.onViewShoppingCart(shoppingCart);
	}


	/**
	* 下单。
	* iOS Android
	* @param {string} accountId 账户ID
	* @param {object} order 订单对象
	* order 订单对象
		{
			orderId(string) 订单id
			total(number) 订单总价
			currencyType(string) 币种
			category(string) 商品类别

		}
	*/
	static onPlaceOrder(accountId,order){
		if (typeof accountId !== 'string') {
			return;
		};
		if (typeof order !== 'string') {
			return;
		};
		TDADT.onPlaceOrder(accountId,order);
	}

	static onOrderPaySucc(account,orderId,amount,currencyType,payType){
		if (typeof account !== 'string') {
			return;
		};
		if (typeof orderId !== 'string') {
			return;
		};
		if (typeof amount !== 'number') {
			return;
		};
		if (typeof currencyType !== 'string') {
			return;
		};
		if (typeof payType !== 'string') {
			return;
		};
		TDADT.onOrderPaySucc(account,orderId,amount,currencyType,payType);
	}

	static onCustEvent1(){TDADT.onCustEvent1();}
	static onCustEvent2(){TDADT.onCustEvent2();}
	static onCustEvent3(){TDADT.onCustEvent3();}
	static onCustEvent4(){TDADT.onCustEvent4();}
	static onCustEvent5(){TDADT.onCustEvent5();}
	static onCustEvent6(){TDADT.onCustEvent6();}
	static onCustEvent7(){TDADT.onCustEvent7();}
	static onCustEvent8(){TDADT.onCustEvent8();}
	static onCustEvent9(){TDADT.onCustEvent9();}
	static onCustEvent10(){TDADT.onCustEvent10();}

	static onAdSearch(adSearch){
		TDADT.onAdSearch(adSearch);
	}

}

export {TalkingDataAdTracking,TalkingDataADTOrder,TalkingDataADTShoppingCart,TalkingDataAdSearch};
