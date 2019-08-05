import React from 'react';
import {Button, View, Text, TextInput, Platform} from 'react-native';
import {TalkingDataAdTracking} from '../../../TalkingDataAdTracking.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../../common/myTextInput";
import * as RegexUtil from "../../../util/RegexUtil"

export class ADTOnPayScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {account: "", orderId: "", amount: "", currencyType: "", payType: ""};
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
                        <View style={{marginTop: 20, marginBottom: 20}}>
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
                            placeholder='orderid'
                        />

                        <MyTextInput
                            onChangeText={(text) => {
                                this.setState({amount:text})
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

                                    TalkingDataAdTracking.onPay(this.state.account,this.state.orderId,parseInt(this.state.amount),this.state.currencyType,this.state.payType)



                                    // if (this.state.account !== "") {
                                    //     if (this.state.unitPrice === ""){
                                    //         alert("account cant null");
                                    //         return;
                                    //     }
                                    //     if (this.state.amount === ""){
                                    //         alert("amount cant null");
                                    //         return;
                                    //     }

                                        // if (RegexUtil.isNum(this.state.unitPrice)) {
                                        //     if (RegexUtil.isNaturalNum(this.state.amount)) {
                                        //         let intPrice = parseInt(this.state.unitPrice);
                                        //         let intAmount = parseInt(this.state.amount);
                                        //         this.state.talkingdataShoppingCart.addItem(this.state.itemId,this.state.category,this.state.name,this.state.unitPrice,this.state.amount);
                                        //         alert("添加物品成功")
                                        //     }else {
                                        //         alert("物品数量必须为非负数")
                                        //     }

                                        // }else{
                                        //     alert("物品单价必须为数字")
                                        // }

                                    // } else {
                                    //     alert("物品ID不能为空！");
                                    // }
                                }
                            }
                        />

                    </View>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}