import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SignupForm extends Component<{}>{
        UserProfile(){
        Actions.UserProfile()
    }
    render(){
        return (
        <View>
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Email"
            placeholderTextColor = "#000000"
            selectionColor="#fcd9d9"
            keyboardType="email-address"
            onSubmitEditing={() => this.password.focus}
            />
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor = "#000000"
            selectionColor="#fcd9d9"
            ref={(input) => this.password = input}
            />
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder="Re-Enter Password"
            secureTextEntry={true}
            placeholderTextColor = "#000000"
            selectionColor="#fcd9d9"
            ref={(input) => this.password = input}
            />
            <TouchableOpacity style = {styles.button} onPress={this.UserProfile}>
            	<Text style = {styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
        </View>
        );

    }


}

const styles = StyleSheet.create({

	container : {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	inputBox :{
		width: 300,
		backgroundColor: '#dedcdc',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		marginVertical: 10,
		paddingVertical: 12

	},

	button : {
		width: 300,
		backgroundColor: '#a19f9f',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 16,
		
	},

	buttonText : {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center',
	}


}); 