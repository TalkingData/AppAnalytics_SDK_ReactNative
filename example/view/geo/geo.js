import React from 'react';
import {TextInput, Button, View, Text, Platform} from 'react-native';
import {TalkingDataAppAnalytics} from '../../TalkingDataAppAnalytics.js'
import * as RegexUtil from "../../util/RegexUtil"

export class GeoScreen extends React.Component {

    static navigationOptions = () => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>设置经纬度</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {lat: null, lot: null};
    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */

        return (
            <View style={{flex: 1, flexDirection:'row',alignItems:'center'}}>
                <View style={{marginTop:50,marginLeft:30}}>
                    <Text style={{
                        height:42,
                        width:20,
                        textAlign:'center',
                        alignItems:'center',
                        justifyContent:'center',
                        textAlignVertical:'center',
                        ...Platform.select({
                            ios:{
                                lineHeight:42,
                            },
                            android:{
                            }
                        })
                    }}>
                        *
                    </Text>
                    <Text style={{
                        height:42,
                        width:20,
                        textAlign:'center',
                        alignItems:'center',
                        justifyContent:'center',
                        textAlignVertical:'center',
                        ...Platform.select({
                            ios:{
                                lineHeight:42,
                            },
                            android:{
                            }
                        })
                    }}>
                        *
                    </Text>
                    <Text style={{
                        height:42,
                        width:20,
                        textAlign:'center',
                        alignItems:'center',
                        justifyContent:'center',
                        textAlignVertical:'center',
                        ...Platform.select({
                            ios:{
                                lineHeight:42,
                            },
                            android:{
                            }
                        })
                    }}>

                    </Text>

                </View>
                <View style={{marginTop: 50, justifyContent: 'space-between'}}>
                    <TextInput
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid='transparent'
                        onChangeText={(lat) => this.setState({lat})}
                        placeholder='经度'
                    />

                    <TextInput
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid='transparent'
                        onChangeText={(lot) => this.setState({lot})}
                        placeholder='纬度'
                    />

                    <Button
                        title={"设置经纬度"}
                        onPress={
                            () => {
                                // this.setState({
                                //   deviceId:TalkingDataAppAnalytics.getDeviceID()
                                // });
                                if (this.state.lat === ""){
                                    alert('经度不能为空');
                                    return;
                                }

                                // alert(lat);
                                if (!RegexUtil.isNum(this.state.lat)) {
                                    alert('经度必须为数字');
                                    return;
                                }
                                let lat = parseFloat(this.state.lat);

                                if (this.state.lot === ""){
                                    alert('纬度不能为空');
                                    return;
                                }

                                if (!RegexUtil.isNum(this.state.lot)) {
                                    alert('纬度必须为数字');
                                    return;
                                }
                                let lot = parseFloat(this.state.lot);

                                TalkingDataAppAnalytics.setLatitudeLongitude(lat, lot);
                            }
                        }
                    />
                </View>
            </View>
        );
    }
}