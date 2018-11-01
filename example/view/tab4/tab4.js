import React from 'react';
import { View, Text } from 'react-native';



//详情页面 detailViewController
// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() => this.props.navigation.push('Details')} //这里push 和 navigat是不一样的 当前页面跳转当前页面 navigate是不会执行的
//         />
//       </View>
//     );
//   }
// }


export class Tab4Screen extends React.Component {

	static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text>页面2</Text>,
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>页面4</Text>

      </View>
    );
  }
}

