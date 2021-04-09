import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as Facebook from 'expo-facebook';
import styles from '../style/MainStyle';


export default function Login({navigation}) {
  const [user, setUser] = useState(null);

  const signUpFacebook = async () => {
    try {
      await Facebook.initializeAsync("142220204500368");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
        // console.log((await response.json()).name);
        const data = await response.json();
        setUser(data);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  //criando uma varial email,senha chamada de estado e estou inicializando com null
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  return (
    <View style={styles.container}>

     
        <Text h3>Futec</Text>
        <Input
          placeholder=" E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
        />

        <Input
          placeholder="  Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setSenha(value)}
          secureTextEntry={true}
        />


        <Button  title="Entrar" onPress={entrar}/>


      {/* {user ? (
        <View style={styles.fotoContainer}>
          <Image style={styles.image} source={{ uri: user.picture.data.url }} />
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
      ) : (
        <Button title="Acessar com Facebook" onPress={signUpFacebook}/>
      )} */}

        
    </View>
  );
}

