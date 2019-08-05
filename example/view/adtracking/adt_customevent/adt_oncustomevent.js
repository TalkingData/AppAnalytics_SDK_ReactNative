import React from 'react';
import {TouchableOpacity, View, SectionList, Text} from 'react-native';
import {LogoTitle} from './../../logoTitle.js'
import jsondata from './../../../data/oncustomevent'
import * as ScreenUtil from './../../../util/ScreenUtil'

import {TalkingDataAdTracking} from '../../../TalkingDataAdTracking'


//homeViewController
let Dimensions = require('Dimensions');
let ScreenWidth = Dimensions.get('window').width;


export class ADTOnCustomScreen extends React.Component {


    constructor(props) {
        super(props);
    };

    _pressRow(item) {
        if(item.id === '1'){
            TalkingDataAdTracking.onCustEvent1();
        }else if(item.id === '2'){
            TalkingDataAdTracking.onCustEvent2();
        }else if(item.id === '3'){
            TalkingDataAdTracking.onCustEvent3();
        }else if(item.id === '4'){
            TalkingDataAdTracking.onCustEvent4();
        }else if(item.id === '5'){
            TalkingDataAdTracking.onCustEvent5();
        }else if(item.id === '6'){
            TalkingDataAdTracking.onCustEvent6();
        }else if(item.id === '7'){
            TalkingDataAdTracking.onCustEvent7();
        }else if(item.id === '8'){
            TalkingDataAdTracking.onCustEvent8();
        }else if(item.id === '9'){
            TalkingDataAdTracking.onCustEvent9();
        }else if(item.id === '10'){
            TalkingDataAdTracking.onCustEvent10();
        }
    };

    _renderItem = (info) => {

        return (
            <TouchableOpacity onPress={() => this._pressRow(info.item)} underlayColor="transparent">
                <View style={{flex: 0, flexDirection: 'row', height: 60, backgroundColor: '#feffff'}}>

                        <Text allowFontScaling={false}
                              style={{fontSize: 20, color: '#000106', width: ScreenWidth}}>{info.item.fname}</Text>

                </View>
            </TouchableOpacity>


        );
    };


    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <LogoTitle txt='OnCustomEvent1~10'/>,
        };
    };

    _keyExtractor = (item, index) => item.id;

    render() {
        let sections = jsondata;
        return (
            <View style={{flex: 1}}>
                <SectionList
                    keyExtractor={this._keyExtractor}
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