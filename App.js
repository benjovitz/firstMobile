import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Alert, Image, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.flexbox}>
      <Image style={{height:100, width:100,flex:1}} source={require("./assets/stars.png")}></Image>
      <Text style={styles.header}>祖国！</Text>
      </View>
      <View style={{justifyContent:"center",alignItems:"center"}}>
      <Image style={{borderRadius:360}} source={require("./assets/leader.jpg")}></Image>
      </View>
      <View style={{justifyContent:'center',alignItems:"center"}}>
      <Button title='捐出你的薪水'  onPress={() => Linking.openURL('https://www.youtube.com/watch?v=OjNpRbNdR7E')}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EE1C25',
    height:"100%"
  },
  flexbox:{
    flexDirection:"row",
    paddingBottom:100
  },
  header:{
    fontSize: 75,
    color:"#FFFF00",
    justifyContent:"flex-end",
    paddingLeft:50,
    flex:2
  }
});
