import React from 'react';
import {Button, View, Text, TextInput, Platform} from 'react-native';
import {TalkingDataAppAnalytics, TalkingDataShoppingCart} from '../../TalkingDataAppAnalytics.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../common/myTextInput";
import * as RegexUtil from "../../util/RegexUtil"

export class ViewShoppingCartScreen extends React.Component {

    static navigationOptions = () => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>查看购物车</Text>,
        };
    };

    constructor(props) {
        super(props);
        let talkingdataShoppingCart = new TalkingDataShoppingCart();
        this.state = {itemId: "", category: "", name: "", unitPrice: "", amount: "",talkingdataShoppingCart:talkingdataShoppingCart};
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
                            onChangeText={(itemId) => {
                                this.setState({itemId})
                            }}
                            placeholder='物品ID'
                        />

                        <MyTextInput
                            onChangeText={(category) => {
                                this.setState({category})
                            }}
                            placeholder='物品类别'
                        />

                        <MyTextInput
                            onChangeText={(name) => {
                                this.setState({name})
                            }}
                            placeholder='物品名称'
                        />

                        <MyTextInput
                            onChangeText={(text) => {
                                this.setState({unitPrice:text})
                            }}
                            placeholder='物品单价'
                        />

                        <MyTextInput
                            onChangeText={(text) => {
                                this.setState({amount:text})
                            }}
                            placeholder='物品数量'
                        />

                        <Button
                            title={"添加物品"}
                            onPress={
                                () => {
                                    if (this.state.itemId !== "") {
                                        if (this.state.unitPrice === ""){
                                            alert("物品单价不能为空");
                                            return;
                                        }
                                        if (this.state.amount === ""){
                                            alert("物品数量不能为空");
                                            return;
                                        }

                                        if (RegexUtil.isNum(this.state.unitPrice)) {
                                            if (RegexUtil.isNaturalNum(this.state.amount)) {
                                                let intPrice = parseInt(this.state.unitPrice);
                                                let intAmount = parseInt(this.state.amount);
                                                this.state.talkingdataShoppingCart.addItem(this.state.itemId,this.state.category,this.state.name,this.state.unitPrice,this.state.amount);
                                                alert("添加物品成功")
                                            }else {
                                                alert("物品数量必须为非负数")
                                            }

                                        }else{
                                            alert("物品单价必须为数字")
                                        }

                                    } else {
                                        alert("物品ID不能为空！");
                                    }
                                }
                            }
                        />
                        <View style={{marginTop: 20, marginBottom: 20}}>
                            <Button
                                title={"调用查看购物车接口"}
                                onPress={
                                    () => {
                                        TalkingDataAppAnalytics.onViewShoppingCart(this.state.talkingdataShoppingCart.shoppingCartString);
                                        alert("查看购物车成功")
                                    }
                                }
                            />
                        </View>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}