import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**My own cmponents */
import HeaderComponent from './components/Header';
import StartGameComponent from './screens/StartGame'

const App = () => {
  const [myTitle,setMyTitle]=useState("Homepage")
  return (
    <View style={styles.screen}>
      <HeaderComponent title={myTitle} />
      <StartGameComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});


export default App;
