package com.talkingdata.adtracking;

import android.content.Context;
import android.text.TextUtils;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.tendcloud.appcpa.Order;
import com.tendcloud.appcpa.ShoppingCart;
import com.tendcloud.appcpa.TDSearch;
import com.tendcloud.appcpa.TalkingDataAppCpa;

import org.json.JSONArray;
import org.json.JSONObject;

public class TalkingDataAdTracking extends ReactContextBaseJavaModule {
    private Context context;

    @Override
    public String getName() {
        return "TalkingDataAppCpa";
    }

    public TalkingDataAdTracking(ReactApplicationContext reactContext) {
        super(reactContext);
        context = reactContext;
    }

    /**
     * 获取设备唯一性标识 device id
     *
     * @param callback 返回生成的设备 Id
     */
    @ReactMethod
    public void getDeviceID(Promise callback) {
        callback.resolve(TalkingDataAppCpa.getDeviceId(context));
    }

    @ReactMethod
    public void onRegister(String account) {
        TalkingDataAppCpa.onRegister(account);
    }

    @ReactMethod
    public void onLogin(String account) {
        TalkingDataAppCpa.onLogin(account);
    }

    @ReactMethod
    public void onCreateRole(String roleName) {
        TalkingDataAppCpa.onCreateRole(roleName);
    }

    @ReactMethod
    public void onPay(String account, String orderid, int amount, String currencyType, String payType) {
        TalkingDataAppCpa.onPay(account, orderid, amount, currencyType, payType);
    }

    @ReactMethod
    public void onPayWithOrder(String account, String orderid, int amount, String currencyType, String payType, String order) {
        TalkingDataAppCpa.onPay(account, orderid, amount, currencyType, payType, getOrder(order));
    }

    @ReactMethod
    public void onPayWithItem(String account, String orderid, int amount, String currencyType, String payType, String itemId, int itemCount) {
        TalkingDataAppCpa.onPay(account, orderid, amount, currencyType, payType, itemId, itemCount);
    }

    @ReactMethod
    public void onPlaceOrder(String account, String order) {
        TalkingDataAppCpa.onPlaceOrder(account, getOrder(order));
    }

    @ReactMethod
    public void onOrderPaySucc(String account,String orderid,int amount,String currencyType,String payType){
        TalkingDataAppCpa.onOrderPaySucc(account, orderid, amount, currencyType, payType);
    }

    @ReactMethod
    public void onAddItemToShoppingCart(String itemId ,String category,String name,int unitPrice,int amount){
        TalkingDataAppCpa.onAddItemToShoppingCart(itemId, category, name, unitPrice, amount);
    }

    @ReactMethod
    public void onViewItem(String itemId ,String category,String name,int unitPrice){
        TalkingDataAppCpa.onViewItem(itemId, category, name, unitPrice);
    }

    @ReactMethod
    public void onViewShoppingCart(String shoppingCart){
        TalkingDataAppCpa.onViewShoppingCart(getShoppingCart(shoppingCart));
    }

    @ReactMethod
    public void onReceiveDeepLink(String link){
        TalkingDataAppCpa.onReceiveDeepLink(link);
    }

    @ReactMethod
    public void onAdSearch(String tdSearch){
        TalkingDataAppCpa.onSearch(getSearch(tdSearch));
    }

    @ReactMethod
    public void onCustEvent1(){
        TalkingDataAppCpa.onCustEvent1();
    }

    @ReactMethod
    public void onCustEvent2(){
        TalkingDataAppCpa.onCustEvent2();
    }

    @ReactMethod
    public void onCustEvent3(){
        TalkingDataAppCpa.onCustEvent3();
    }

    @ReactMethod
    public void onCustEvent4(){
        TalkingDataAppCpa.onCustEvent4();
    }

    @ReactMethod
    public void onCustEvent5(){
        TalkingDataAppCpa.onCustEvent5();
    }

    @ReactMethod
    public void onCustEvent6(){
        TalkingDataAppCpa.onCustEvent6();
    }

    @ReactMethod
    public void onCustEvent7(){
        TalkingDataAppCpa.onCustEvent7();
    }

    @ReactMethod
    public void onCustEvent8(){
        TalkingDataAppCpa.onCustEvent8();
    }

    @ReactMethod
    public void onCustEvent9(){
        TalkingDataAppCpa.onCustEvent9();
    }

    @ReactMethod
    public void onCustEvent10(){
        TalkingDataAppCpa.onCustEvent10();
    }


    /**
     * 获取订单
     *
     * @param json 订单
     * @return Order订单对象
     */
    private Order getOrder(String json){
        try{
            JSONObject jsonObject = new JSONObject(json);
            Order order = Order.createOrder(jsonObject.optString("orderId"), jsonObject.optInt("total"), jsonObject.optString("currencyType"));
            JSONArray items = jsonObject.optJSONArray("items");
            if (items != null){
                for (int i = 0;i<items.length();i++) {
                    JSONObject item = items.optJSONObject(i);
                    String id = item.optString("itemId");
                    String category = item.optString("category");
                    String name = item.optString("name");
                    int unitPrice = item.optInt("unitPrice");
                    int count = item.optInt("amount");
                    if (TextUtils.isEmpty(id)) {
                        order.addItem(category,name,unitPrice,count);
                    }else{
                        order.addItem(id,category,name,unitPrice,count);
                    }
                }
            }
            return order;
        }catch (Throwable t){
            t.printStackTrace();
        }
        return null;
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
            JSONArray items = jsonObject.optJSONArray("items");
            if (items != null){
                for (int i = 0;i<items.length();i++) {
                    JSONObject item = items.optJSONObject(i);
                    String id = item.optString("itemId");
                    String category = item.optString("category");
                    String name = item.optString("name");
                    int unitPrice = item.optInt("unitPrice");
                    int count = item.optInt("amount");
                    shoppingCart.addItem(id,category,name,unitPrice,count);
                }
            }
        }catch (Throwable t){
            t.printStackTrace();
        }

        return shoppingCart;
    }

    private TDSearch getSearch(String json){
        TDSearch tdSearch = TDSearch.createAdSearch();
        try{
            JSONObject jsonObject = new JSONObject(json);
            tdSearch.setCategory(jsonObject.optString("category", null));
            tdSearch.setContent(jsonObject.optString("content", null));
            tdSearch.setItemId(jsonObject.optString("item_id", null));
            tdSearch.setItemLocationId(jsonObject.optString("item_location_id", null));
            tdSearch.setDestination(jsonObject.optString("destination", null));
            tdSearch.setOrigin(jsonObject.optString("origin", null));
            if (jsonObject.has("start_date")){
                tdSearch.setStartDate(jsonObject.optLong("start_date", 0));
            }
            if (jsonObject.has("end_date")){
                tdSearch.setEndDate(jsonObject.optLong("end_date", 0));
            }
        }catch (Throwable t){
            t.printStackTrace();
        }
        return tdSearch;
    }
}
