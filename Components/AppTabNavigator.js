import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Read from '../Screens/read.js'
import Write from '../Screens/write.js'
import Setting from '../Screens/Setting.js'

export const AppTabNavigator = createBottomTabNavigator({
	Read:{screen:Read,
	navigationOptions : {
		tabBarLabel:"Read"
	}},
	Write:{screen:Write,
	navigationOptions : {
		tabBarLabel:"Write"
	}},
	setting:{screen:Setting,
	navigationOptions : {
		tabBarLabel:"Setting"
	}}
})