import React from 'react';
import {TextInput} from 'react-native';

export class MyTextInput extends React.Component {
    static defaultProps = {
        style: {height: 40, width: 300, borderColor: 'gray', borderWidth: 1},
        underlineColorAndroid:'transparent',
        onChangeText: {},
        placeholder: "",
        keyboardType: 'default',
    };

    constructor(props){
        super(props);
        this.state = {value:""}
    }

    render() {
        return (
            <TextInput style={this.props.style}
                       underlineColorAndroid={this.props.underlineColorAndroid}
                       onChangeText={(text)=>{
                           this.props.onChangeText(text);
                           if (this.props.value !== ''){
                               this.setState({value:this.props.value})
                           } else{
                               this.setState({value:text})
                           }

                       }}
                       placeholder={this.props.placeholder}
                       keyboardType={this.props.keyboardType}
                       value={this.state.value}
            />
        )


    }
}