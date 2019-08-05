import React from 'react';
import {Platform} from 'react-native';
import {TouchableOpacity, Switch, View, SectionList, Text} from 'react-native';
import {LogoTitle} from './logoTitle.js'
import jsondata from './../data/section.json'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ScreenUtil from './../util/ScreenUtil'

import {TalkingDataAppAnalytics} from '../TalkingDataAppAnalytics.js'


//homeViewController
let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;


export class HomeScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            logEnable: true,
            exceEnable: false,
            signalEnable: false,
            antiCheatEnable: true,
        };
    };

    _pressRow(item) {


        if (item.page == null) {
            return;
        }

        if (Platform.OS === 'ios') {
            if (!item.supportiOS) {
                alert('不支持iOS平台');
                return;
            }
        }

        if (Platform.OS === 'android') {
            if (!item.supportAndroid) {
                alert('不支持Android平台');
                return;
            }
        }


        this.props.navigation.push(item.page, {itemid: item.id});


    };

    _renderItem = (info) => {

        let iconNameAndroid = `logo-android`;
        let iconNameApple = `logo-apple`;
        let iOSColor = 'gray';
        let androidColor = 'gray';


        if (info.item.supportiOS) {
            iOSColor = '#45d685';
        }


        if (info.item.supportAndroid) {
            androidColor = '#45d685';
        }


        let switchValue = false;
        if (info.item.id === 'setLogEnabled') {
            switchValue = this.state.logEnable;
        } else if (info.item.id === 'setExceptionReportEnabled') {
            switchValue = this.state.exceEnable;
        } else if (info.item.id === 'setSignalReportEnabled') {
            switchValue = this.state.signalEnable;
        } else if (info.item.id === 'setAntiCheatingEnabled') {
            switchValue = this.state.antiCheatEnable;
        }

        let sw = info.item.page == null ?
            <View style={{justifyContent: 'space-around'}}>
                <Switch value={switchValue}
                        onValueChange={(value) => {

                            if (Platform.OS === 'ios') {
                                if (!info.item.supportiOS) {
                                    alert('不支持iOS平台');
                                    return;
                                }
                            }

                            if (Platform.OS === 'android') {
                                if (!info.item.supportAndroid) {
                                    alert('不支持Android平台');
                                    return;
                                }
                            }

                            if (info.item.id === 'setLogEnabled') {
                                this.setState({logEnable: value});
                                TalkingDataAppAnalytics.setLogEnabled(value);
                            } else if (info.item.id === 'setExceptionReportEnabled') {
                                this.setState({exceEnable: value});
                                TalkingDataAppAnalytics.setExceptionReportEnabled(value);
                            } else if (info.item.id === 'setSignalReportEnabled') {
                                this.setState({signalEnable: value});
                                TalkingDataAppAnalytics.setSignalReportEnabled(value);
                            } else if (info.item.id === 'setAntiCheatingEnabled') {
                                this.setState({antiCheatEnable: value});
                                TalkingDataAppAnalytics.setAntiCheatingEnabled(value);
                            }
                        }}>
                </Switch>
            </View> : null;

        return (
            <TouchableOpacity onPress={() => this._pressRow(info.item)} underlayColor="transparent">
                <View style={{flex: 1, flexDirection: 'row', height: 60, backgroundColor: '#feffff'}}>
                    <View style={{
                        width: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        height: 'auto',
                        marginVertical: 5,
                        marginLeft: 5,
                        marginRight: 5
                    }}>
                        <Ionicons name={iconNameApple} size={30} style={{textAlign: 'center', color: iOSColor}}/>
                        <Ionicons name={iconNameAndroid} size={30} style={{textAlign: 'center', color: androidColor}}/>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        width: ScreenWidth * 0.7,
                        height: 'auto',
                        marginVertical: ScreenUtil.pxToDp(10)
                    }}>
                        <Text allowFontScaling={false}
                              style={{fontSize: 15, color: '#000106', width: ScreenWidth * 0.8}}>{info.item.name}</Text>
                        <Text allowFontScaling={false}
                              style={{fontSize: 12, width: ScreenWidth * 0.70}}>{info.item.desc}</Text>
                    </View>
                    {sw}

                </View>
            </TouchableOpacity>


        );
    };


    _sectionComp = (info) => {
        let txt = info.section.key;
        return <Text
            style={{
                paddingLeft: 10,
                height: 20,
                textAlign: 'left',
                textAlignVertical: 'center',
                backgroundColor: '#f8f9fa',
                color: '#000106',
                fontSize: 15
            }}>{txt}</Text>
    };

    componentDidMount() {
        this.props.navigation.setParams({increaseCount: this._increaseCount});
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        this.setState({count: this.state.count + 1});
    };

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle txt='产品线：AppAnalytics'/>,
        };
    };

    _keyExtractor = (item, index) => item.id;

    render() {
        let sections = jsondata;
        return (
            <View style={{flex: 1}}>
                <SectionList
                    keyExtractor={this._keyExtractor}
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View
                        style={{marginLeft: 50, height: 0.5, backgroundColor: '#f4f5f6'}}
                    >
                    </View>}

                />

            </View>
        );
    }
}