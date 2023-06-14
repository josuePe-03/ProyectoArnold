
import { StyleSheet, Text, View,Image } from 'react-native';


export default function Busqueda() {


  return (
    <Text>Hello</Text>
  );
}

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginTop:10,
    },
    image:{
        width:50,
        height:50,
        borderRadius:25,
    },
    textName:{
        fontSize:17,
        marginLeft:10,
        fontWeight:"600"
    },
    textEmail:{
        fontSize:14,
        marginLeft:10,
        color:"grey"
    }


});