import React from 'react';
import {TextInput, Button, View, Text} from 'react-native';
import {TalkingDataAdTracking} from '../../../TalkingDataAdTracking'

export class ADTCreateRoleScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: <Text style={{fontSize: 20}}>{navigation.state.params.itemid}</Text>,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            roleName: '',
        };
    };


    render() {

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <TextInput
                    style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                    underlineColorAndroid='transparent'
                    onChangeText={(txt) => this.setState({roleName: txt})}
                    placeholder='name'
                />

                <Button
                    title={"调用接口"}
                    onPress={
                        () => {
                            TalkingDataAdTracking.onCreateRole(this.state.roleName);
                        }
                    }
                />

            </View>
        );
    }
}