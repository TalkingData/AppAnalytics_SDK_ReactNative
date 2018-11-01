import React from 'react';
import { Button,View, Text } from 'react-native';
import { TalkingDataAppAnalytics } from '../../TalkingDataAppAnalytics.js'

export class DeviceIdScreen extends React.Component {

  static navigationOptions = ( ) => {
    return {
      headerTitle: <Text style={{fontSize: 20}}>获取设备ID</Text>,
    };
  };

  constructor(props) {
    super(props);
    this.state = {deviceId:''};
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        
        <View style={{height:100,justifyContent: 'space-between'} }>

          <Text style={{fontSize:20}} >{this.state.deviceId}</Text>

          <Button
            title={"获取设备ID"}
            onPress={
              () =>{

                  TalkingDataAppAnalytics.getDeviceID((device_id)=>{
                                          this.setState({
                                              deviceId:device_id
                                          });
                                      })
              }
            }
            style={{backgroundColor:'#18B4FF'}}
          />
        </View>
      </View>
    );
  }
}