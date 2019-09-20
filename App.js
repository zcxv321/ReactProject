import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Head */}
      <View style = {styles.top}>
      </View>
      {/* Head */}

      {/* Center */ }
      <View style= {{flex:1,backgroundColor:'green',width:'100%'}}>
        <View style={{backgroundColor:'white',marginTop:100,marginHorizontal:50}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style = {styles.buttonStyle}>
              <Button icon={<Icon name="arrow-right" size={15} color="white"/>} iconRight title="Button with right icon"/>
            </View>        
            <View style = {styles.buttonStyle}><Button title='Upload' /></View>
          </View>
        </View>
      </View>

      
      {/* Center */}

      {/* Buttom */}
      <View style = {styles.buttom}>
      </View>
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
    height:'7%',
    width:'100%',
    backgroundColor:'black',
    marginTop:0
  },
  buttonStyle:{
    
    padding:10,
    margin:20,

  }
});
