import React from 'react';
import {TextInput, Button, View, Text, Platform} from 'react-native';
import {TalkingDataAppAnalytics} from '../../TalkingDataAppAnalytics.js'

export class PageScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {pagename: null};
    };

    render() {


        return (
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row' /*justifyContent: 'space-around' */}}>
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


                </View>
                <View style={{marginTop: 50, justifyContent: 'space-between'}}>
                    <TextInput
                        style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid='transparent'
                        onChangeText={(pname) => this.setState({pagename: pname})}
                        placeholder='pageName'
                    />


                    <Button
                        title={"调用接口"}
                        onPress={
                            () => {

                                let pagename = this.state.pagename;
                                if (!pagename) {
                                    alert('页面名称不能为空');
                                    return;
                                }

                                if (this.props.navigation.state.params.itemid === 'onPageStart') {
                                    TalkingDataAppAnalytics.onPageStart(this.state.pagename);
                                } else if (this.props.navigation.state.params.itemid === 'onPageEnd') {
                                    TalkingDataAppAnalytics.onPageEnd(this.state.pagename);
                                }

                            }
                        }
                    />

                </View>
            </View>
        );
    }
}