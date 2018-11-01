import React from 'react';
import {Button, View, Text, Platform} from 'react-native';
import {TalkingDataAppAnalytics} from '../../TalkingDataAppAnalytics.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {MyTextInput} from "../common/myTextInput";


export class EventScreen extends React.Component {

    static navigationOptions = () => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>自定义事件</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {eventId: "", eventLabel: "", eventKey:"", eventValue:"", keyArray: new Array(), valueArray: new Array()};

    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */

        return (
            <KeyboardAwareScrollView>
                <View style={{flex: 1, flexDirection:'row'}}>
                    <View style={{marginTop:50,marginLeft:30}}>
                        <Text style={{
                            height:40,
                            width:20,
                            textAlign:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            textAlignVertical:'center',
                            ...Platform.select({
                                ios:{
                                    lineHeight:40,
                                },
                                android:{
                                }
                            })
                        }}>
                            *
                        </Text>
                        <Text style={{
                            height:40,
                            width:20,
                            textAlign:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            textAlignVertical:'center',
                            ...Platform.select({
                                ios:{
                                    lineHeight:40,
                                },
                                android:{
                                }
                            })
                        }}>

                        </Text>
                        <Text style={{
                            height:40,
                            width:20,
                            textAlign:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            textAlignVertical:'center',
                            ...Platform.select({
                                ios:{
                                    lineHeight:40,
                                },
                                android:{
                                }
                            })
                        }}>
                            *
                        </Text>
                        <Text style={{
                            height:40,
                            width:20,
                            textAlign:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            textAlignVertical:'center',
                            ...Platform.select({
                                ios:{
                                    lineHeight:40,
                                },
                                android:{
                                }
                            })
                        }}>

                        </Text>
                        <Text style={{
                            height:40,
                            width:20,
                            textAlign:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            textAlignVertical:'center',
                            ...Platform.select({
                                ios:{
                                    lineHeight:40,
                                },
                                android:{
                                }
                            })
                        }}>

                        </Text>
                        <Text style={{
                            height:40,
                            width:20,
                            textAlign:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            textAlignVertical:'center',
                            ...Platform.select({
                                ios:{
                                    lineHeight:40,
                                },
                                android:{
                                }
                            })
                        }}>

                        </Text>

                    </View>
                    <View style={{marginTop: 50, justifyContent: 'space-between'}}>

                        <MyTextInput
                            onChangeText={(eventId) => {
                                this.setState({eventId:eventId})
                            }}
                            placeholder='事件id'
                        />

                        <MyTextInput
                            onChangeText={(eventLabel) => {
                                this.setState({eventLabel})
                            }}
                            placeholder='事件标签'
                        />

                        <MyTextInput
                            onChangeText={(data) => {
                                this.setState({eventKey:data})
                            }}
                            placeholder='事件数据Key'
                        />

                        <MyTextInput
                            onChangeText={(data) => {
                                this.setState({eventValue:data})
                            }}
                            placeholder='事件数据Value'
                        />
                        <Button
                            title={"添加事件数据"}
                            onPress={
                                () => {
                                    let key = this.state.eventKey;
                                    if (key !== ""){
                                        let value = this.state.eventValue;
                                        this.state.keyArray.push(key);
                                        this.state.valueArray.push(value);
                                        alert("添加事件数据成功");
                                    } else{
                                        alert("Key不能为空");
                                    }

                                }
                            }
                        />

                        <View style={{marginTop: 10, justifyContent: 'space-between'}} />

                        <Button
                            title={"调用事件接口"}
                            onPress={
                                () => {
                                    if (this.state.eventId !== "") {
                                        let newMap = {};
                                        for (let i = 0;i<this.state.keyArray.length;i++){
                                            newMap[this.state.keyArray[i]] = this.state.valueArray[i];
                                        }
                                        TalkingDataAppAnalytics.onEvent(this.state.eventId,this.state.eventLabel,newMap);
                                        alert("调用事件成功");
                                    } else {
                                        alert("事件id不能为空！");
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