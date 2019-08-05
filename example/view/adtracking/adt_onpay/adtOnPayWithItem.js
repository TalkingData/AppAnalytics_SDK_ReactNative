import React from 'react';
import {Button, View, Text, TextInput, Platform} from 'react-native';
import {TalkingDataAdTracking} from '../../../TalkingDataAdTracking.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../../common/myTextInput";
import * as RegexUtil from "../../../util/RegexUtil"

export class ADTOnPayWithItemScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {account: "", orderId: "", amount: "", currencyType: "", payType: "",itemId:"",itemCount:""};
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


                        <MyTextInput    
                            onChangeText={(itemId) => {
                                this.setState({itemId})
                            }}
                            placeholder='itemId'
                        />

                        <MyTextInput    
                            onChangeText={(itemCount) => {
                                this.setState({itemCount})
                            }}
                            placeholder='itemCount'
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

                                    if (this.state.itemId == "") {
                                        alert("itemid illegal");
                                        return;
                                    }
                                    if (this.state.itemCount == "") {
                                        alert("amount illegal");
                                        return;
                                    }else {
                                        if(RegexUtil.isNaturalNum(this.state.itemCount) === false){
                                            alert("不是自然数");
                                            return;                                       
                                         }
                                    }

                                    TalkingDataAdTracking.onPayWithItem(this.state.account,this.state.orderId,parseInt(this.state.amount),this.state.currencyType,this.state.payType,this.state.itemId,parseInt(this.state.itemCount))

                                }
                            }
                        />

                    </View>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}