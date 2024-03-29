package com.talkingdata.appanalytics;

import android.content.Context;
import android.text.TextUtils;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeArray;
import com.facebook.react.bridge.ReadableNativeMap;
import com.tendcloud.tenddata.ShoppingCart;
import com.tendcloud.tenddata.TCAgent;
import com.tendcloud.tenddata.TDProfile;

import org.json.JSONArray;
import org.json.JSONObject;


public class TalkingData extends ReactContextBaseJavaModule {
    private Context context;

    public TalkingData(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    /**
     * 设置是否记录未捕获的异常信息
     *
     * @param enabled 参数为 true 时，收集开发者应用异常
     */
    @ReactMethod
    public void setExceptionReportEnabled(boolean enabled){
        TCAgent.setReportUncaughtExceptions(enabled);
    }

    /**
     * 是否开启用户质量评估功能
     *
     * @param enabled 开启或者关闭
     */
    @ReactMethod
    public void setAntiCheatingEnabled(boolean enabled){
    }

    /**
     * 在自定义事件共有数据的缓存中添加一条新的记录
     *
     * @param key 开发者需要在所有事件中保存的 Key
     * @param value 开发者需要在所有事件中保存的 Value
     */
    @ReactMethod
    public void setGlobalKVMap(String key, ReadableMap value) {
        if (value == null){
            TCAgent.setGlobalKV(key, null);
        }else {
            ReadableNativeMap map = (ReadableNativeMap) value;
            TCAgent.setGlobalKV(key, map.toHashMap());
        }
    }

    /**
     * 在自定义事件共有数据的缓存中添加一条新的记录
     *
     * @param key 开发者需要在所有事件中保存的 Key
     * @param value 开发者需要在所有事件中保存的 Value
     */
    @ReactMethod
    public void setGlobalKVArray(String key, ReadableArray value) {
        ReadableNativeArray array = (ReadableNativeArray) value;
        TCAgent.setGlobalKV(key, array.toArrayList());
    }

    /**
     * 在自定义事件共有数据的缓存中添加一条新的记录
     *
     * @param key 开发者需要在所有事件中保存的 Key
     * @param value 开发者需要在所有事件中保存的 Value
     */
    @ReactMethod
    public void setGlobalKVDouble(String key, double value) {
        TCAgent.setGlobalKV(key, value);
    }

    /**
     * 在自定义事件共有数据的缓存中添加一条新的记录
     *
     * @param key 开发者需要在所有事件中保存的 Key
     * @param value 开发者需要在所有事件中保存的 Value
     */
    @ReactMethod
    public void setGlobalKVString(String key, String value) {
        TCAgent.setGlobalKV(key, value);
    }

    /**
     * 在自定义事件共有数据的缓存中添加一条新的记录
     *
     * @param key 开发者需要在所有事件中保存的 Key
     * @param value 开发者需要在所有事件中保存的 Value
     */
    @ReactMethod
    public void setGlobalKVBoolean(String key, boolean value) {
        TCAgent.setGlobalKV(key, value);
    }

    /**
     * 从自定义事件共有数据的缓存中删除一条新的记录
     *
     * @param key 被删除记录的Key
     */
    @ReactMethod
    public void removeGlobalKV(String key) {
        TCAgent.removeGlobalKV(key);
    }

    /**
     * 获取设备唯一性标识 device id
     *
     * @param callback 返回生成的设备 Id
     */
    @ReactMethod
    public void getDeviceID(Promise callback) {
        callback.resolve(TCAgent.getDeviceId(context));
    }

    /**
     * 获取设备匿名标识符
     *
     * @param callback 返回获取的设备匿名标识符
     */
    @ReactMethod
    public void getOAID(Promise callback) {
        callback.resolve(TCAgent.getOAID(context));
    }

    /**
     * 当自定义事件发生的时候，调用该方法记录相关数据
     *
     * @param eventId 事件 id
     * @param eventLabel 事件标签
     * @param map 事件数据
     */
    @ReactMethod
    public void onEvent(String eventId, String eventLabel, ReadableMap map) {
        ReadableNativeMap maps = null;
        if (map != null){
            maps = (ReadableNativeMap) map;
        }
        if (!TextUtils.isEmpty(eventId) && !TextUtils.isEmpty(eventLabel) && maps != null && !maps.toHashMap().isEmpty()){
            TCAgent.onEvent(context,eventId,eventLabel,maps.toHashMap());
        }else if (!TextUtils.isEmpty(eventId) && !TextUtils.isEmpty(eventLabel) && (maps == null || maps.toHashMap().isEmpty())){
            TCAgent.onEvent(context,eventId,eventLabel);
        }else if (!TextUtils.isEmpty(eventId) && TextUtils.isEmpty(eventLabel) && (maps == null || maps.toHashMap().isEmpty())){
            TCAgent.onEvent(context, eventId);
        }
    }

    /**
     * 当自定义事件发生的时候，调用该方法记录相关数据
     *
     * @param eventId 事件 id
     * @param eventLabel 事件标签
     * @param map 事件数据
     * @param value 事件数值
     */
    @ReactMethod
    public void onEventWithValue(String eventId, String eventLabel, ReadableMap map, double value){
        ReadableNativeMap maps = null;
        if (map != null){
            maps = (ReadableNativeMap) map;
        }
        if (!TextUtils.isEmpty(eventId) && !TextUtils.isEmpty(eventLabel) && maps != null && !maps.toHashMap().isEmpty()){
            TCAgent.onEvent(context,eventId,eventLabel,maps.toHashMap(),value);
        }
    }

    /**
     * 记录页面的启动数据
     *
     * @param pageName activity 名称
     */
    @ReactMethod
    public void onPageStart(String pageName) {
        TCAgent.onPageStart(context, pageName);
    }

    /**
     * 记录页面的结束数据
     *
     * @param pageName activity 名称
     */
    @ReactMethod
    public void onPageEnd(String pageName) {
        TCAgent.onPageEnd(context, pageName);
    }

    /**
     * 记录注册数据
     *
     * @param profileID 注册账户id
     * @param type 注册账户类型
     * @param name 注册账户昵称
     */
    @ReactMethod
    public void onRegister(String profileID, int type, String name) {
        TCAgent.onRegister(profileID, getProfileType(type), name);
    }

    /**
     * 记录登录数据
     *
     * @param profileID 登录账户id
     * @param type 登录账户类型
     * @param name 登录账户昵称
     */
    @ReactMethod
    public void onLogin(String profileID, int type, String name) {
        TCAgent.onLogin(profileID, getProfileType(type), name);
    }

    /**
     * 提交订单
     *
     * @param orderID       订单
     * @param amount        订单金额
     * @param currencyType  货币类型
     */
    @ReactMethod
    public void onPlaceOrder(String orderID, int amount, String currencyType) {
        TCAgent.onPlaceOrder(orderID,amount,currencyType);
    }


    /**
     * 支付订单
     *
     * @param orderID       订单
     * @param amount        订单金额
     * @param currencyType  货币类型
     * @param paymentType   支付类型
     */
    @ReactMethod
    public void onOrderPaySucc(String orderID, int amount, String currencyType, String paymentType) {
        TCAgent.onOrderPaySucc(orderID, amount, currencyType, paymentType);
    }

    /**
     * 取消订单
     *
     * @param orderID       订单
     * @param amount        订单金额
     * @param currencyType  货币类型
     */
    @ReactMethod
    public void onCancelOrder(String orderID, int amount, String currencyType) {
        TCAgent.onCancelOrder(orderID,amount,currencyType);
    }

    /**
     *添加物品到购物车
     *
     * @param itemId 物品ID
     * @param category 物品类别
     * @param name 物品名称
     * @param unitPrice 物品价格
     * @param count 物品数量
     */
    @ReactMethod
    public void onAddItemToShoppingCart(String itemId, String category, String name, int unitPrice, int count) {
        TCAgent.onAddItemToShoppingCart(itemId, category, name, unitPrice, count);
    }

    /**
     * 查看物品
     *
     * @param itemId 物品ID
     * @param category 物品类别
     * @param name 物品名称
     * @param unitPrice 物品价格
     */
    @ReactMethod
    public void onViewItem(String itemId, String category, String name, int unitPrice) {
        TCAgent.onViewItem(itemId, category, name, unitPrice);
    }

    /**
     * 查看购物车
     *
     * @param shoppingCart 购物车
     */
    @ReactMethod
    public void onViewShoppingCart(String shoppingCart) {
        TCAgent.onViewShoppingCart(getShoppingCart(shoppingCart));
    }

    /**
     * 获取账户类型
     *
     * @param type int型账户类型
     * @return ProfileType型账户类型
     */
    private TDProfile.ProfileType getProfileType(int type){
        TDProfile.ProfileType profileType;
        switch (type) {
            case 0:
                profileType = TDProfile.ProfileType.ANONYMOUS;
                break;
            case 1:
                profileType = TDProfile.ProfileType.REGISTERED;
                break;
            case 2:
                profileType = TDProfile.ProfileType.SINA_WEIBO;
                break;
            case 3:
                profileType = TDProfile.ProfileType.QQ;
                break;
            case 4:
                profileType = TDProfile.ProfileType.QQ_WEIBO;
                break;
            case 5:
                profileType = TDProfile.ProfileType.ND91;
                break;
            case 6:
                profileType = TDProfile.ProfileType.WEIXIN;
                break;
            case 11:
                profileType = TDProfile.ProfileType.TYPE1;
                break;
            case 12:
                profileType = TDProfile.ProfileType.TYPE2;
                break;
            case 13:
                profileType = TDProfile.ProfileType.TYPE3;
                break;
            case 14:
                profileType = TDProfile.ProfileType.TYPE4;
                break;
            case 15:
                profileType = TDProfile.ProfileType.TYPE5;
                break;
            case 16:
                profileType = TDProfile.ProfileType.TYPE6;
                break;
            case 17:
                profileType = TDProfile.ProfileType.TYPE7;
                break;
            case 18:
                profileType = TDProfile.ProfileType.TYPE8;
                break;
            case 19:
                profileType = TDProfile.ProfileType.TYPE9;
                break;
            case 20:
                profileType = TDProfile.ProfileType.TYPE10;
                break;
            default:
                profileType = TDProfile.ProfileType.ANONYMOUS;
        }
        return profileType;
    }

    /**
     * 获取购物车
     *
     * @param json 购物车
     * @return ShoppingCart购物车对象
     */
    private ShoppingCart getShoppingCart(String json){
        ShoppingCart shoppingCart = ShoppingCart.createShoppingCart();
        try {
            JSONObject jsonObject = new JSONObject(json);
            JSONArray items = jsonObject.getJSONArray("items");
            for (int i = 0;i<items.length();i++) {
                JSONObject a = items.getJSONObject(i);
                String id = a.getString("itemId");
                String category = a.getString("category");
                String name = a.getString("name");
                int unitPrice = a.getInt("unitPrice");
                int count = a.getInt("amount");
                shoppingCart.addItem(id,category,name,unitPrice,count);
            }
        }catch (Throwable t){
            t.printStackTrace();
        }

        return shoppingCart;
    }

    @Override
    public String getName() {
        return "TalkingData";
    }
}
