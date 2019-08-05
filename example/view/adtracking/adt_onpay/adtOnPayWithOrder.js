import React from 'react';
import {Button, View, Text, TextInput, Platform} from 'react-native';
import {TalkingDataAdTracking,TalkingDataADTOrder} from '../../../TalkingDataAdTracking.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../../common/myTextInput";
import * as RegexUtil from "../../../util/RegexUtil"

export class ADTOnPayWithOrderScreen extends React.Component {

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

                        <Button
                            title={"调用接口"}
                            onPress={
                                () => {

                                    let order = new TalkingDataADTOrder('orderid', '100', 'CNY');
                                    order.addItemWithItemId('itemid', 'category', 'name' , '1.0', '5');
                                    TalkingDataAdTracking.onPayWithOrder('accountid_001','order_id001',100,'CNY','ApplePay', order.orderString);
                                }
                            }
                        />
        );
    }
}