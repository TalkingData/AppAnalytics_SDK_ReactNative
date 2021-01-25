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

	setCategory(category){
		this.category = category;
	}

	setContent(content){
		this.content = content;
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

  	get adSearchString(){
  		return JSON.stringify({
  			'category':this.category,
  			'content':this.content,
			  'destination':this.destination,
			  'origin':this.origin,
			  'item_id':this.item_id,
			  'item_location_id':this.item_location_id,
			  'start_date':this.start_date,
			  'end_date':this.end_date,
  		});
	}
	  
}


class TalkingDataTransaction {
	
	constructor(){

	}

	setTransactionId(transactionId){
		this.transactionId = transactionId;
	}

	setCategory(category){
		this.category = category;
	}

	setAmount(amount){
		this.amount = amount;
	}

	setPersonA(personA){
		this.personA = personA;
	}

	setPersonB(personB){
		this.personB = personB;
	}

	setStartDate(startDate){
		this.startDate = startDate;
	}

	setEndDate(endDate){
		this.endDate = endDate;
	}

	setCurrencyType(currencyType){
		this.currencyType = currencyType;
	}

	setContent(content){
		this.content = content;
	}



  	get transactionStr(){
  		return JSON.stringify({
			  'transactionId':this.transactionId,
			  'category':this.category,
			  'amount':this.amount,
			  'personA':this.personA,
			  'personB':this.personB,
			  'startDate':this.startDate,
			  'endDate':this.endDate,
			  'currencyType':this.currencyType,
			  'content':this.content,
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
    * 获取SDK所使用Device的ID
    * iOS Android
    * @return {string} OAID
    */
    static getOAID(callback){
         if(Platform.OS === 'android'){
            TDADT.getOAID().then(callback);
         }
    }

/**
	* 注册
	* iOS Android
	* @param {string} profileId 账户ID
	* @param {string} name 账户昵称
	*/
	static onRegister(profile){
		if (typeof profile !== 'string') {
			return ;
		}
		TDADT.onRegister(profile);
	}

	static onRegisterWithinvitationCode(profile,invitationCode){
		if (typeof profile !== 'string') {
			return ;
		}
		if (typeof invitationCode!== 'string') {
			return ;
		}
		TDADT.onRegisterWithinvitationCode(profile,invitationCode);
	}
	/**
	* 登录
	* iOS Android
	* @param {string} profile 账户ID
	*/
	static onLogin(profile){
		if (typeof profile !== 'string') {
			return ;
		}
		TDADT.onLogin(profile);
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
	static onPlaceOrder(profileId,order){
		if (typeof profileId !== 'string') {
			return;
		};
		if (typeof order !== 'string') {
			return;
		};
		TDADT.onPlaceOrder(profileId,order);
	}


	static onOrderPaySucc(profile,orderId,amount,currencyType,payType){
		if (typeof profile !== 'string') {
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
		TDADT.onOrderPaySucc(profile,orderId,amount,currencyType,payType);
	}

	static onPay(profile,orderId,amount,currencyType,payType) {
		if (typeof profile !== 'string') {
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
		TDADT.onPay(profile,orderId,amount,currencyType,payType)
	}

	static onPayWithItem(profile,orderId,amount,currencyType,payType,itemId,itemCount) {
		if (typeof profile !== 'string') {
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
		TDADT.onPayWithItem(profile,orderId,amount,currencyType,payType,itemId,itemCount)
	}

	static onPayWithOrder(profile,orderId,amount,currencyType,payType,orderString) {
		if (typeof profile !== 'string') {
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
		TDADT.onPayWithOrder(profile,orderId,amount,currencyType,payType,orderString)
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

	static onSearch(adSearch){
		TDADT.onSearch(adSearch);
	}


	static onCreateCard(profile,method,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof method !== 'string') {
			return;
		};
		if (typeof content !== 'string') {
			return;
		}
		TDADT.onCreateCard(profile,method,content);
	}

	static onFavorite(category,content)
	{
		if (typeof category !== 'string') {
			return;
		};

		if (typeof content !== 'string') {
			return;
		}
		TDADT.onFavorite(category,content);
	}

	static onShare(profile,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof content !== 'string') {
			return;
		}
		TDADT.onShare(profile,content);
	}

	static onPunch(profile,punchId)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof punchId !== 'string') {
			return;
		}
		TDADT.onPunch(profile,punchId);
	}

	static onReservation(profile,reservationId,category,amount,term)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof reservationId !== 'string') {
			return;
		}
		if (typeof category !== 'string') {
			return;
		}
		if (typeof amount !== 'number') {
			return;
		}
		if (typeof term !== 'string') {
			return;
		}

		TDADT.onReservation(profile,reservationId,category,amount,term);
	}

	static onBooking(profile,bookingId,category,amount,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof bookingId !== 'string') {
			return;
		}
		if (typeof category !== 'string') {
			return;
		}
		if (typeof amount !== 'number') {
			return;
		}
		if (typeof content !== 'string') {
			return;
		}

		TDADT.onBooking(profile,bookingId,category,amount,content);
	}

	static onContact(profile,content)
	{
		if (typeof profile !== 'string') {
			return;
		};

		if (typeof content !== 'string') {
			return;
		}

		TDADT.onContact(profile,content);
	}

	static onLearn(profile,course,begin,duration)
	{
		if (typeof profile !== 'string') {
			return;
		};

		if (typeof course !== 'string') {
			return;
		}

		if (typeof begin !== 'number') {
			return;
		}

		if (typeof duration !== 'number') {
			return;
		}
		TDADT.onLearn(profile,course,begin,duration)
	}

	static onRead(profile,book,begin,duration)
	{
		if (typeof profile !== 'string') {
			return;
		};

		if (typeof book !== 'string') {
			return;
		}

		if (typeof begin !== 'number') {
			return;
		}

		if (typeof duration !== 'number') {
			return;
		}
		TDADT.onRead(profile,book,begin,duration)
	}

	static onBrowse(profile,content,begin,duration)
	{
		if (typeof profile !== 'string') {
			return;
		};

		if (typeof content !== 'string') {
			return;
		}

		if (typeof begin !== 'number') {
			return;
		}

		if (typeof duration !== 'number') {
			return;
		}
		TDADT.onBrowse(profile,content,begin,duration)
	}


	static onTransaction(profile,transactionStr){
		if (typeof profile !== 'string') {
			return;
		};

		if (typeof transactionStr !== 'string') {
			return;
		}

		TDADT.onTransaction(profile,transactionStr);
	}

	static onCredit(profile,amount,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof amount !== 'number') {
			return;
		}
		if (typeof content !== 'string') {
			return;
		}
		TDADT.onCredit(profile,amount,content)
	}

	static onChargeBack(profile,orderId,reason,type)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof orderId !== 'string') {
			return;
		}
		if (typeof reason !== 'string') {
			return;
		}
		if (typeof type !== 'string') {
			return;
		}
		TDADT.onChargeBack(profile,orderId,reason,type)
	}

	static onTrialFinished(profile,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof content !== 'string') {
			return;
		}
		TDADT.onTrialFinished(profile,content)
	}

	static onGuideFinished(profile,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof content !== 'string') {
			return;
		}
		TDADT.onGuideFinished(profile,content)
	}
	static onPreviewFinished(profile,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof content !== 'string') {
			return;
		}
		TDADT.onPreviewFinished(profile,content)
	}
	static onFreeFinished(profile,content)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof content !== 'string') {
			return;
		}
		TDADT.onFreeFinished(profile,content)
	}

	static onLevelPass(profile,levelId)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof levelId !== 'string') {
			return;
		}
		TDADT.onLevelPass(profile,levelId)
	}

	
	static onAchievementUnlock(profile,achievementId)
	{
		if (typeof profile !== 'string') {
			return;
		};
		if (typeof achievementId !== 'string') {
			return;
		}
		TDADT.onAchievementUnlock(profile,achievementId)
	}


}

export {TalkingDataAdTracking,TalkingDataADTOrder,TalkingDataADTShoppingCart,TalkingDataAdSearch,TalkingDataTransaction};
