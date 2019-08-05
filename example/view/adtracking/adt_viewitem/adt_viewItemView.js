import React from 'react';
import {Button, View, Text, TextInput, Picker, Platform} from 'react-native';
import {TalkingDataAppAnalytics, TalkingDataAdTracking} from '../../../TalkingDataAdTracking'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../../common/myTextInput";
import * as RegexUtil from "../../../util/RegexUtil"


export class ADTViewItemScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>查看物品</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {itemId: "", category: "", name: "", unitPrice:""};

    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

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
                                this.setState({itemId:itemId})
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
                        <Button
                            title={"查看物品"}
                            onPress={
                                () => {
                                    if (this.state.itemId !== "") {
                                        if (this.state.unitPrice === ""){
                                            alert("物品单价不能为空");
                                            return;
                                        }

                                        if (RegexUtil.isNum(this.state.unitPrice)) {
                                            var intPrice = parseInt(this.state.unitPrice);

                                            TalkingDataAdTracking.onViewItem(this.state.itemId,this.state.category,this.state.name,intPrice);
                                            alert("查看物品成功");

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