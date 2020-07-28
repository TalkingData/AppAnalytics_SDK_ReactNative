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
import com.tendcloud.appcpa.TDTransaction;
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

    /**
     * 获取设备匿名标识符
     *
     * @param callback 返回获取的设备匿名标识符
     */
    @ReactMethod
    public void getOAID(Promise callback) {
        callback.resolve(TalkingDataAppCpa.getOAID(context));
    }

    @ReactMethod
    public void onRegister(String account) {
        TalkingDataAppCpa.onRegister(account);
    }

    @ReactMethod
    public void onRegisterWithinvitationCode(String account, String invitationCode) {
        TalkingDataAppCpa.onRegister(account, invitationCode);
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
    public void onSearch(String tdSearch){
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

    @ReactMethod
    public void onCreateCard(String accountId, String method, String content) {
        TalkingDataAppCpa.onCreateCard(accountId, method, content);
    }

    @ReactMethod
    public void onTransaction(String accountId, String transaction) {
        TalkingDataAppCpa.onTransaction(accountId, getTransaction(transaction));
    }

    @ReactMethod
    public void onCredit(String accountId, int amount, String content) {
        TalkingDataAppCpa.onCredit(accountId, amount, content);
    }

    @ReactMethod
    public  void onFavorite(String category, String content) {
        TalkingDataAppCpa.onFavorite(category, content);
    }

    @ReactMethod
    public  void onShare(String accountId, String content) {
        TalkingDataAppCpa.onShare(accountId, content);
    }
    @ReactMethod
    public  void onPunch(String accountId, String punchId) {
        TalkingDataAppCpa.onPunch(accountId, punchId);
    }
    @ReactMethod
    public  void onReservation(String accountId, String reservationId, String category, int amount, String term) {
        TalkingDataAppCpa.onReservation(accountId, reservationId, category, amount, term);
    }
    @ReactMethod
    public  void onBooking(String accountId, String bookingId, String category, int amount, String content) {
        TalkingDataAppCpa.onBooking(accountId, bookingId, category, amount, content);
    }
    @ReactMethod
    public  void onContact(String accountId, String content) {
        TalkingDataAppCpa.onContact(accountId, content);
    }
    @ReactMethod
    public  void onLearn(String accountId, String course, int begin, int duration) {
        TalkingDataAppCpa.onLearn(accountId, course, begin, duration);
    }
    @ReactMethod
    public  void onRead(String accountId, String book, int begin, int duration) {
        TalkingDataAppCpa.onRead(accountId, book, begin, duration);
    }
    @ReactMethod
    public  void onBrowse(String accountId, String content, int begin, int duration) {
        TalkingDataAppCpa.onBrowse(accountId, content, begin, duration);
    }
    @ReactMethod
    public  void onChargeBack(String accountId, String orderId, String reason, String type) {
        TalkingDataAppCpa.onChargeBack(accountId, orderId, reason, type);
    }
    @ReactMethod
    public  void onTrialFinished(String accountId, String content) {
        TalkingDataAppCpa.onTrialFinished(accountId, content);
    }
    @ReactMethod
    public  void onGuideFinished(String accountId, String content) {
        TalkingDataAppCpa.onGuideFinished(accountId, content);
    }
    @ReactMethod
    public  void onPreviewFinished(String accountId, String content) {
        TalkingDataAppCpa.onPreviewFinished(accountId, content);
    }
    @ReactMethod
    public  void onFreeFinished(String accountId, String content) {
        TalkingDataAppCpa.onFreeFinished(accountId, content);
    }
    @ReactMethod
    public  void onLevelPass(String accountId, String levelId) {
        TalkingDataAppCpa.onLevelPass(accountId, levelId);
    }
    @ReactMethod
    public  void onAchievementUnlock(String accountId, String achievementId) {
        TalkingDataAppCpa.onAchievementUnlock(accountId, achievementId);
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
            tdSearch.setItemId(jsonObject.optString("itemId", null));
            tdSearch.setItemLocationId(jsonObject.optString("itemLocationId", null));
            tdSearch.setDestination(jsonObject.optString("destination", null));
            tdSearch.setOrigin(jsonObject.optString("origin", null));
            if (jsonObject.has("startDate")){
                tdSearch.setStartDate(jsonObject.optLong("startDate", 0));
            }
            if (jsonObject.has("endDate")){
                tdSearch.setEndDate(jsonObject.optLong("endDate", 0));
            }
        }catch (Throwable t){
            t.printStackTrace();
        }
        return tdSearch;
    }

    private TDTransaction getTransaction(String json) {
        TDTransaction tdTransaction = TDTransaction.createTDTransaction();
        if (TextUtils.isEmpty(json)) {
            return tdTransaction;
        }
        try {
            JSONObject jsonObject = new JSONObject(json);
            tdTransaction.setTransactionId(jsonObject.optString("transactionId", null))
                    .setCategory(jsonObject.optString("category", null))
                    .setAmount(jsonObject.optInt("amount", 0))
                    .setPersonA(jsonObject.optString("personA", null))
                    .setPersonB(jsonObject.optString("personB", null))
                    .setStartDate(jsonObject.optLong("startDate", 0))
                    .setEndDate(jsonObject.optLong("endDate", 0))
                    .setContent(jsonObject.optString("content", null))
                    .setCurrencyType(jsonObject.optString("currencyType", null));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return tdTransaction;
    }
}
