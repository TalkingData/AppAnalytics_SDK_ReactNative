//
//  RCTTDAppSDK.h
//  NVV
//
//  Created by bliss_ddo on 2018/8/24.
//  Copyright © 2018年 TalkingData. All rights reserved.
//

#import <Foundation/Foundation.h>


#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTConvert.h>


//注意这个类的命名，如果命名成TDAccountType 就会报错。 所以这里加个RN后缀，在导出module的时候，去掉RN即可。
@interface TDAccountTypeRN : NSObject<RCTBridgeModule>
@end

@interface RCTConvert (TDAccountType)
@end


@interface RCTTDAppSDK : NSObject<RCTBridgeModule>
@end
