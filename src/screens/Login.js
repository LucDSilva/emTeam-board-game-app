import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../componets/Logo';
import Form from '../componets/Form';

export default class Login extends Component<{}>{
	signup(){
		Actions.signup()
	}
	UserProfile(){
		Actions.UserProfile()
	}
	ForgotPW(){
		Actions.ForgotPW()
	}
    render(){
        return (
        <View style = {styles.container}>
            <Logo/>
            <Form type="Login"/>
            <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> No account? Hurry up and </Text>
            	<TouchableOpacity onPress={this.signup}>
            	 <Text style = {styles.signupButton}> Sign Up</Text>
            	 </TouchableOpacity>
            </View>
			<View>
				<Text style = {styles.signupText}> Navigate to </Text>
            	<TouchableOpacity onPress={this.UserProfile}>
            	 <Text style = {styles.signupButton}> profile</Text>
            	 </TouchableOpacity>
			</View>
			<View>
				<Text style = {styles.signupText}> Check Password reset page</Text>
            	<TouchableOpacity onPress={this.ForgotPW}>
            	 <Text style = {styles.signupButton}> here </Text>
            	 </TouchableOpacity>
			</View>
        </View>
        );
    }
}

const styles = StyleSheet.create({

	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	signupTextContainer : {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginVertical: 16,
		flexDirection: 'row',
	},

	signupText : {
        fontSize: 16,
        color: '#000000',
	},

	signupButton : {
		color: '#b80000',
		fontSize: 17,
		fontWeight: '500'
	}

});