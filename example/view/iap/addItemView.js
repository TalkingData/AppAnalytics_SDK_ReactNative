import React from 'react';
import {Button, View, Text, TextInput, Platform} from 'react-native';
import {TalkingDataAppAnalytics} from '../../TalkingDataAppAnalytics.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../common/myTextInput";
import * as RegexUtil from "../../util/RegexUtil"

export class AddItemScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>向购物车添加物品</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {itemId: "", category: "", name: "", unitPrice: "", amount: ""};
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
                                                TalkingDataAppAnalytics.onAddItemToShoppingCart(this.state.itemId,this.state.category,this.state.name,intPrice,intAmount);
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
                    </View>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}