import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import db from '../config.js'
import {MyHeader} from '../Components/myHeader.js'

export default class Read extends React.Component{
	render(){
		return(
			<View>
			<Text>Read</Text>
			</View>
		)
	}
}