import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Itemc } from 'react-native';
import { Icon } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Head */}
      <View style = {styles.top}>
        <Text style={{color:'white',textAlign:'center',fontSize:50,}}>application</Text>
      </View>
      {/* Head */}

      {/* Center */ }
      <View style= {{flex:1,backgroundColor:'green',width:'100%'}}>
        <View style={{backgroundColor:'white',marginTop:40,marginHorizontal:20,padding:10,alignContent:"center",flexDirection:'column',justifyContent:'center'}}>

            <TouchableOpacity>
              <View style = {styles.buttonStyle}>
                <Icon name='plus' type='foundation' ></Icon><Text>Add</Text>
              </View>
            </TouchableOpacity>

            
              <FlatList style={styles.mainContent}>
                 
              </FlatList>

            <View><Button title='Upload' /></View>            
        </View>
      </View>

      
      {/* Center */}

      {/* Buttom */}
      {/* <View style = {styles.buttom}>
      </View> */}
      {/* Buttom */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttom: {
    height:'7%',
    width:'100%',    
    marginBottom:0,
    backgroundColor:'black'
  },
  top:{
    height:'10%',
    width:'100%',
    borderRadius:10,
    backgroundColor:'black',
    marginTop:0,
    alignContent:'center',
    justifyContent:'center'
  },
  buttonStyle:{
    padding:10,
    margin:5,
    flexDirection:'row',
    borderRadius:10,
    backgroundColor:'#6cffe0',
    justifyContent:'center',    
  },
  mainContent:{
    margin:10,
    height:'80%', 
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  }
});
