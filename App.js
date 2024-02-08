import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView,Image,TextInput } from 'react-native';

export default function App() {
  return (
    <>
      <ScrollView >
        <Text style={{fontSize:50}}>Dinesh</Text>
        <View style={{alignItems:'center',}}>
          <Text >Some More</Text> 
          <Image 
            source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}
            style={{height:500,width:500,}}
          />
        </View>
        <TextInput style={{height:40,borderWidth:3,borderColor:'grey'}}/>
        
    </ScrollView>
      
    </>
  );
}


