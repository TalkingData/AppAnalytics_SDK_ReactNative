import React from 'react';
import {Button, View, Text, TextInput, Picker,Platform} from 'react-native';
import {TalkingDataAppAnalytics, TalkingDataOrder} from '../../TalkingDataAppAnalytics.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import ActionSheet from 'react-native-actionsheet'
import {MyTextInput} from "../common/myTextInput";
import * as RegexUtil from "../../util/RegexUtil"


export class OrderScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>生成订单</Text>,
        };
    };

    constructor(props) {
        super(props);
        let item = {itemId: "", category: "", name: "", unitPrice: "", amount: ""};
        this.state = {
            accountId: "",
            orderId: "",
            total: "",
            currencyType: "CNY",
            currencyName: "人民币",
            order: null,
            item: item,
            options: ["CNY", "USD","EUR"],
            optionsName: ["人民币", "美元","欧元", "取消"],
            selectIndex: 0
        };

    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        const {optionsName, selectIndex} = this.state;

        return (
            <KeyboardAwareScrollView>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{marginTop: 20, marginLeft: 30}}>
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
                            marginTop:20,
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
                        <Text style={{
                            height: 40,
                            width: 20,
                            marginTop:50,
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
                        <Text style={{
                            height: 35,
                            width: 20,
                            marginTop:50,
                            marginBottom:20,
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
                    <View style={{justifyContent: 'space-between'}}>
                    <View style={{marginTop: 20}}>
                        <MyTextInput
                            onChangeText={(accountId) => this.setState({accountId})}
                            placeholder='账号ID'
                        />
                    </View>

                    <View style={{marginTop: 20, justifyContent: 'space-between'}}>

                        <MyTextInput
                            onChangeText={(orderId) => this.setState({orderId})}
                            placeholder='订单ID'
                        />

                        <MyTextInput
                            onChangeText={(text) => {
                                this.setState({total: text})
                            }}
                            placeholder='订单总价'
                        />

                        <View style={{borderColor: 'gray', borderWidth: 1}}>
                            <Text style={{marginTop: 10, height: 30, width: 298, textAlign: 'center'}}
                                  onPress={() => {
                                      this.ActionSheet.show()
                                  }}
                            >
                                {this.state.currencyName}
                            </Text>
                            <ActionSheet
                                ref={o => this.ActionSheet = o}
                                title={'币种'}
                                options={optionsName}
                                cancelButtonIndex={optionsName.length - 1}
                                destructiveButtonIndex={selectIndex}
                                onPress={(index) => {
                                    if (index !== optionsName.length - 1) {
                                        this.setState({currencyType: this.state.options[index]})
                                        this.setState({currencyName: this.state.optionsName[index]})
                                        this.setState({selectIndex: index})
                                    }
                                }}
                            />
                        </View>

                        <Button
                            title={"生成订单"}
                            onPress={
                                () => {
                                    if (this.state.orderId != "" && this.state.total != "") {
                                        if (RegexUtil.isNum(this.state.total)){
                                            this.state.order = new TalkingDataOrder(this.state.orderId, this.state.total, this.state.currencyType);
                                            alert("生成订单成功")
                                        }else{
                                            alert("订单总价必须为数字")
                                        }

                                    } else {
                                        alert("订单号或者订单总价不能为空")
                                    }
                                }
                            }
                        />
                    </View>

                    <View style={{marginTop: 50, justifyContent: 'space-between'}}>

                        <MyTextInput
                            onChangeText={(itemId) => {
                                this.state.item.itemId = itemId;
                                this.setState({item: this.state.item})
                            }}
                            placeholder='物品ID'
                        />

                        <MyTextInput
                            onChangeText={(category) => {
                                this.state.item.category = category;
                                this.setState({item: this.state.item})
                            }}
                            placeholder='物品类别'
                        />

                        <MyTextInput
                            onChangeText={(name) => {
                                this.state.item.name = name;
                                this.setState({item: this.state.item})
                            }}
                            placeholder='物品名称'
                        />

                        <MyTextInput
                            onChangeText={(text) => {
                                this.state.item.unitPrice = text;
                                this.setState({item: this.state.item})
                            }}
                            placeholder='物品单价'
                        />

                        <MyTextInput
                            onChangeText={(text) => {
                                this.state.item.amount = text;
                                this.setState({item: this.state.item})
                            }}
                            placeholder='物品数量'
                        />

                        <Button
                            title={"添加物品"}
                            onPress={
                                () => {
                                    if (this.state.order != null) {
                                        if (this.state.item.itemId !== ""){
                                            if (this.state.item.unitPrice === ""){
                                                alert("物品单价不能为空");
                                                return;
                                            }
                                            if (this.state.item.amount === ""){
                                                alert("物品数量不能为空");
                                                return;
                                            }


                                            if (RegexUtil.isNum(this.state.item.unitPrice)) {
                                                if (RegexUtil.isNaturalNum(this.state.item.amount)) {
                                                    this.state.order.addItem(this.state.item.itemId, this.state.item.category, this.state.item.name, this.state.item.unitPrice, this.state.item.amount);
                                                    alert("添加物品成功")
                                                }else {
                                                    alert("物品数量必须为非负数")
                                                }


                                            }else{
                                                alert("物品单价必须为数字")
                                            }
                                        } else{
                                            alert("物品ID不能为空")
                                        }

                                    } else {
                                        alert("请先生成订单！");
                                    }
                                }
                            }
                        />
                    </View>
                    <View style={{marginTop: 50, marginBottom: 20}}>
                        <Button
                            title={"调用订单接口"}
                            onPress={
                                () => {
                                    if (this.state.accountId != "") {
                                        if (this.state.order != null) {
                                            TalkingDataAppAnalytics.onPlaceOrder(this.state.accountId, this.state.order.orderString);
                                            alert("调用订单接口成功")
                                        } else {
                                            alert("请先生成订单！");
                                        }
                                    } else {
                                        alert("账号ID不能为空");
                                    }

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