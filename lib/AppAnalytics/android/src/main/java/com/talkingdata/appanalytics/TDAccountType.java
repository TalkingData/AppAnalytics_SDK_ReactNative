package com.talkingdata.appanalytics;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

public class TDAccountType extends ReactContextBaseJavaModule {

    public TDAccountType(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("ANONYMOUS", 0);
        constants.put("REGISTERED", 1);
        constants.put("SINA_WEIBO", 2);
        constants.put("QQ", 3);
        constants.put("QQ_WEIBO", 4);
        constants.put("ND91", 5);
        constants.put("WEIXIN", 6);
        constants.put("TYPE1", 11);
        constants.put("TYPE2", 12);
        constants.put("TYPE3", 13);
        constants.put("TYPE4", 14);
        constants.put("TYPE5", 15);
        constants.put("TYPE6", 16);
        constants.put("TYPE7", 17);
        constants.put("TYPE8", 18);
        constants.put("TYPE9", 19);
        constants.put("TYPE10", 20);
        return constants;
    }

    @Override
    public String getName() {
        return "TDAccountType";
    }
}
