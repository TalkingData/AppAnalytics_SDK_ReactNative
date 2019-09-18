import React from 'react';
import {Button, View, Text, TextInput, Picker,Platform} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {TalkingDataAdTracking,TalkingDataAdSearch} from '../../../TalkingDataAdTracking'
import {MyTextInput} from "../../common/myTextInput";
import * as RegexUtil from "../../../util/RegexUtil"


export class ADTAdSearchScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            destination: '',
            origin: '',
            item_id: '',
            item_location_id: '',
            start_date: '',
            end_date: '',
            adSearch:new TalkingDataAdSearch(),
            key:'',
            value:''
        };
    };


    render() {

        return (
            <KeyboardAwareScrollView>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>

                    <View style={{marginTop: 20, marginLeft: 30}}>
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

                    <View style={{justifyContent: 'space-between'}}>

                    <View style={{marginTop: 20, justifyContent: 'space-between'}}>

                        <View style={{marginTop: 20, justifyContent: 'space-between'}}/>

                        <MyTextInput
                            onChangeText={(destination) => this.setState({destination:destination})}
                            placeholder='目的地城市ID'
                        />

                        <MyTextInput
                            onChangeText={(origin) => this.setState({origin: origin})
                            }
                            placeholder='出发地城市ID'
                        />

                        <MyTextInput
                            onChangeText={(item_id) => this.setState({item_id: item_id})
                            }
                            placeholder='商品ID(酒店/汽车)'
                        />

                        <MyTextInput
                            onChangeText={(item_location_id) => this.setState({item_location_id:item_location_id})}
                            placeholder='商品位置ID'
                        />

                        <MyTextInput
                            onChangeText={(start_date) => this.setState({start_date: start_date})
                            }
                            placeholder='业务事件起始日期（航班出发日期）'
                        />

                        <MyTextInput
                            onChangeText={(end_date) => this.setState({end_date: end_date})
                            }
                            placeholder='业务事件截止日期（航班返程日期）'
                        />

 

                        <Button
                            title={"广告搜索"}
                            onPress={
                                () => {
                                    this.state.adSearch.setDestination(this.state.destination);
                                    this.state.adSearch.setOrigin(this.state.origin);
                                    this.state.adSearch.setItemId(this.state.item_id);
                                    this.state.adSearch.setItemLocationId(this.state.item_location_id);
                                    this.state.adSearch.setStartDate(this.state.start_date);
                                    this.state.adSearch.setEndDate(this.state.end_date);
                                    TalkingDataAdTracking.onAdSearch(this.state.adSearch.adSearchString);
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