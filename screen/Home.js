import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Image} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
const imageUrl = 'https://softmark.mx/wp-content/uploads/2021/07/logobco1.png';


export default function Home() {

  const navigation = useNavigation();
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Image source={{ uri: imageUrl }} style={{marginTop:42,width: 310, height: 64 }} />
        <Text style={styles.text}>Acceso delta</Text>
      </View>
        <View style={styles.cuerpo}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Busqueda')}>
            <Text style={styles.text2}>Busqueda</Text>
          </TouchableOpacity  > 
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Busqueda')}>
            <Text style={styles.text2}>Encriptado de informacion</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cuerpo}>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text2}>Comunicaciones Seguras</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text2}>Analizador de red Wifi</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#2271B3',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom:20

  },
    text:{
    fontSize:22,
    color:'#fff',
    marginTop:12,
    paddingBottom:23,
    paddingStart:13,
  }, 
  cuerpo:{
    width:'100%',
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems:'center'
  },
  card:{
    width: 170,
    height: 200,
    margin: 10,
    borderColor: "#334155",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 2, // Solo para Android
  },
  text2:{
    fontSize:19,
    fontWeight:"300"

  }
});