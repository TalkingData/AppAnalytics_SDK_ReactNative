import React from 'react';
import {TextInput, Button, View, Text} from 'react-native';
import {TalkingDataAdTracking} from '../../../TalkingDataAdTracking'

export class ADTRegisterScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            accountid: '',
        };
    };


    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <TextInput
                    style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                    underlineColorAndroid='transparent'
                    onChangeText={(txt) => this.setState({accountid: txt})}
                    placeholder='accountId'
                />

                <Button
                    title={"调用接口"}
                    onPress={
                        () => {

                            if (this.props.navigation.state.params.itemid === 'onRegister') {
                                TalkingDataAdTracking.onRegister(this.state.accountid);
                            } else if (this.props.navigation.state.params.itemid === 'onLogin') {
                                TalkingDataAdTracking.onLogin(this.state.accountid);
                            }

                        }
                    }
                />

            </View>
        );
    }
}