import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Facebook from "expo-facebook";
import styles from "./style/MainStyle";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from './Screens/Login'
import Principal from './Screens/Principal'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

