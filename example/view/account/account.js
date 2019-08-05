import React from 'react';
import {TextInput, Button, View, Text} from 'react-native';
import {TalkingDataAppAnalytics, TDACCOUNT} from '../../TalkingDataAppAnalytics.js'
import ActionSheet from 'react-native-actionsheet'

export class AccountScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            // headerTitle: <Text style={{fontSize: 20}}>OnRegister</Text>,
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            pickerSelected: 0,
            accountid: '',
            pname: '',
            accounttype: null,
            options: [TDACCOUNT.ANONYMOUS,TDACCOUNT.REGISTERED,TDACCOUNT.SINA_WEIBO,TDACCOUNT.QQ,TDACCOUNT.QQ_WEIBO,TDACCOUNT.ND91,TDACCOUNT.WEIXIN,TDACCOUNT.TYPE1,TDACCOUNT.TYPE2,TDACCOUNT.TYPE3,TDACCOUNT.TYPE4,TDACCOUNT.TYPE5,TDACCOUNT.TYPE6,TDACCOUNT.TYPE7,TDACCOUNT.TYPE8,TDACCOUNT.TYPE9,TDACCOUNT.TYPE10],
            optionsName: ['匿名账户','显性注册账户','新浪微博','QQ账户','QQ微博','91账户','微信','自定义类型1','自定义类型2','自定义类型3','自定义类型4','自定义类型5','自定义类型6','自定义类型7','自定义类型8','自定义类型9','自定义类型10','取消']
        };
    };


    render() {
        // alert(this.props.navigation.state.params.itemid);
        // alert(typeof TDACCOUNT.ANONYMOUS);
        const {optionsName,pickerSelected} = this.state;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <TextInput
                    style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                    underlineColorAndroid='transparent'
                    onChangeText={(txt) => this.setState({accountid: txt})}
                    placeholder='accountId'
                />

                <TextInput
                    style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                    underlineColorAndroid='transparent'
                    onChangeText={(txt) => this.setState({pname: txt})}
                    placeholder='name'
                />

                <View style={{borderColor: 'gray', borderWidth: 1}}>
                    <Text style={{marginTop: 10,height: 30, width: 298 ,textAlign:'center'}}
                          onPress={()=>{
                              this.ActionSheet.show()
                          }}
                    >
                        {this.state.optionsName[this.state.pickerSelected]}
                    </Text>
                    <ActionSheet
                        ref={o => this.ActionSheet = o}
                        title={'账户类型'}
                        options={optionsName}
                        cancelButtonIndex={optionsName.length-1}
                        destructiveButtonIndex={pickerSelected}
                        onPress={(index) => {
                            if (index !== optionsName.length-1) {
                                this.setState({accounttype:this.state.options[index]});
                                this.setState({pickerSelected:index})
                            }
                        }}
                    />
                </View>

                <Button
                    title={"调用接口"}
                    onPress={
                        () => {
                            // if (!this.state.accountid) {
                            //     alert('accountID非法');
                            //     return;
                            // }
                            // ;
                            // if (!this.state.pname) {
                            //     alert('accountName非法');
                            //     return;
                            // }
                            // ;
                            if (this.props.navigation.state.params.itemid === 'onRegister') {
                                TalkingDataAppAnalytics.onRegister(this.state.accountid, Number(this.state.options[this.state.pickerSelected]), this.state.pname);
                            } else if (this.props.navigation.state.params.itemid === 'onLogin') {
                                TalkingDataAppAnalytics.onLogin(this.state.accountid, Number(this.state.options[this.state.pickerSelected]), this.state.pname);
                            }

                        }
                    }
                />

            </View>
        );
    }
}