import React from 'react';
import {TextInput, Button, View, Text, Platform} from 'react-native';
import {TalkingDataAppAnalytics} from '../../TalkingDataAppAnalytics.js'

export class KVScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {key: null, value: null};
    };

    render() {

        let valueObjectButton = this.props.navigation.state.params.itemid === 'setGlobalKV' ? <Button
            title={"value为对象"}
            onPress={() => {
                let k = this.state.key;
                if (!k) {
                    alert('key不能为空');
                    return;
                }

                let v = {"a": "b", "c": "d"};
                TalkingDataAppAnalytics.setGlobalKV(this.state.key, v);
            }}
        /> : null;
        let valueArrayButton = this.props.navigation.state.params.itemid === 'setGlobalKV' ? <Button
            title={"value为数组"}
            onPress={() => {
                let k = this.state.key;
                if (!k) {
                    alert('key不能为空');
                    return;
                }

                let v = new Array();
                v.push({"a": "b"});
                v.push({"c": "d"});
                TalkingDataAppAnalytics.setGlobalKV(this.state.key, v);
            }}
        /> : null;

        let valueNumButton = this.props.navigation.state.params.itemid === 'setGlobalKV' ? <Button
            title={"value为数字"}
            onPress={() => {
                let k = this.state.key;
                if (!k) {
                    alert('key不能为空');
                    return;
                }

                let v = 10.532;
                TalkingDataAppAnalytics.setGlobalKV(this.state.key, v);
            }}
        /> : null;

        let valueBooleanButton = this.props.navigation.state.params.itemid === 'setGlobalKV' ? <Button
            title={"value为布尔值"}
            onPress={() => {
                let k = this.state.key;
                if (!k) {
                    alert('key不能为空');
                    return;
                }

                let v = true;
                TalkingDataAppAnalytics.setGlobalKV(this.state.key, v);
            }}
        /> : null;

        let valueStringButton = this.props.navigation.state.params.itemid === 'setGlobalKV' ? <Button
            title={"value为字符串"}
            onPress={
                () => {
                    let k = this.state.key;
                    if (!k) {
                        alert('key不能为空');
                        return;
                    }

                    TalkingDataAppAnalytics.setGlobalKV(this.state.key, "/.s#(@-测试");
                }
            }
        /> : <Button
            title={"调用接口"}
            onPress={
                () => {
                    let k = this.state.key;
                    if (!k) {
                        alert('key不能为空');
                        return;
                    }

                    TalkingDataAppAnalytics.removeGlobalKV(this.state.key);
                }
            }
        />;

        let marginView = this.props.navigation.state.params.itemid === 'setGlobalKV' ? <View
            style = {{marginTop: 10}}
        /> : null;


        let text = this.props.navigation.state.params.itemid === 'setGlobalKV' ? <Text style={{
            height:35,
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

        </Text> : null;
        return (
            <View style={{flex: 1, alignItems: 'center',flexDirection:'row'}}>
                <View style={{marginTop:20,marginLeft:30}}>
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

                    {marginView}

                    {text}

                    {marginView}

                    {text}

                    {marginView}

                    {text}

                    {marginView}

                    {text}

                    {marginView}

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
                <View style={{marginTop: 20, justifyContent: 'space-between'}}>
                    <TextInput
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid='transparent'
                        onChangeText={(k) => this.setState({key: k})}
                        placeholder='key'
                    />

                    {marginView}

                    {valueNumButton}

                    {marginView}

                    {valueBooleanButton}

                    {marginView}

                    {valueObjectButton}

                    {marginView}

                    {valueArrayButton}

                    {marginView}

                    {valueStringButton}
                </View>
            </View>
        );
    }
}