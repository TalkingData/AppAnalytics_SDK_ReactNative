import React from 'react';
import {Button, View, Text, TextInput, Platform} from 'react-native';
import {TalkingDataAppAnalytics} from '../../../TalkingDataAppAnalytics.js'
import {TalkingDataAdTracking} from '../../../TalkingDataAdTracking'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../../common/myTextInput";
import * as RegexUtil from "../../../util/RegexUtil"

export class ADTOnOrderPaySuccessScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {account: "", orderid: "", amount: "", currencyType: "", payType: ""};
    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        return (
            <KeyboardAwareScrollView>
                <View style={{flex: 1, alignItems: 'center',flexDirection:'row'}}>
                    <View style={{marginTop: 50, marginLeft: 30}}>
                        <Text style={{
                            height: 40,
                            width: 20,
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            ...Platform.select({
                                ios: {
                                    lineHeight: 40,
                                },
                                android: {}
                            })
                        }}>
                            *
                        </Text>
                        <Text style={{
                            height: 40,
                            width: 20,
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            ...Platform.select({
                                ios: {
                                    lineHeight: 40,
                                },
                                android: {}
                            })
                        }}>

                        </Text>

                        <Text style={{
                            height: 40,
                            width: 20,
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            ...Platform.select({
                                ios: {
                                    lineHeight: 40,
                                },
                                android: {}
                            })
                        }}>

                        </Text>
                        <Text style={{
                            height: 40,
                            width: 20,
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            ...Platform.select({
                                ios: {
                                    lineHeight: 40,
                                },
                                android: {}
                            })
                        }}>
                            *
                        </Text>
                        <Text style={{
                            height: 40,
                            width: 20,
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            ...Platform.select({
                                ios: {
                                    lineHeight: 40,
                                },
                                android: {}
                            })
                        }}>
                            *
                        </Text>
                        <Text style={{
                            height: 35,
                            width: 20,
                            textAlign: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlignVertical: 'center',
                            ...Platform.select({
                                ios: {
                                    lineHeight: 40,
                                },
                                android: {}
                            })
                        }}>

                        </Text>

                    </View>
                    <View style={{marginTop: 50, justifyContent: 'space-between'}}>

                        <MyTextInput
                            onChangeText={(account) => {
                                this.setState({account})
                            }}
                            placeholder='account'
                        />

                        <MyTextInput
                            onChangeText={(orderId) => {
                                this.setState({orderId})
                            }}
                            placeholder='orderId'
                        />

                        <MyTextInput
                            onChangeText={(amount) => {
                                this.setState({amount})
                            }}
                            placeholder='amount'
                        />

                        <MyTextInput
                            onChangeText={(currencyType) => {
                                this.setState({currencyType})
                            }}
                            placeholder='currencyType'
                        />

                        <MyTextInput
                            onChangeText={(payType) => {
                                this.setState({payType})
                            }}
                            placeholder='payType'
                        />

                        <Button
                            title={"调用接口"}
                            onPress={
                                () => {
                                    if (this.state.account == "") {
                                        alert("account illegal");
                                        return;
                                    }

                                    if (this.state.orderId == "") {
                                        alert("orderId illegal");
                                        return;
                                    }

                                    if (this.state.amount == "") {
                                        alert("amount illegal");
                                        return;
                                    }else {
                                        if(RegexUtil.isNaturalNum(this.state.amount) === false){
                                            alert("不是自然数");
                                            return;                                       
                                         }
                                    }

                                    if (this.state.currencyType == "") {
                                        alert("amount illegal");
                                        return;
                                    }


                                    if (this.state.payType == "") {
                                        alert("amount illegal");
                                        return;
                                    }

                                    TalkingDataAdTracking.onOrderPaySucc(this.state.account,this.state.orderId,parseInt(this.state.amount),this.state.currencyType,this.state.payType)

                                    
                                }
                            }
                        />
                    </View>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}