import {View, Text, StyleSheet} from 'react-native';

const lexa1 = () => {
  return (
  
    <View style={[styles.defaultViewMain,{backgroundColor: "lightblue", flex:1,}]}>
    
      <View style={[styles.defaultView,{paddingTop:0, height:90,}]}>
      <View style={[styles.defaultView,{backgroundColor: 'red', flex:1, justifyContent:"center",alignItems:"center"}]}>
      <Text style={[styles.defaultText,{}]}>RÖD</Text>
      </View>
      </View>
      
      <View style={[styles.defaultView, styles.defaultViewRow,{}]}>
      <View style={[styles.defaultView,{backgroundColor: 'green', height:90, flex:1}]}> 
      <Text style={[styles.defaultText,{}]}>GRÖN</Text>
      </View>
      <View style={[styles.defaultView]}/>
      <View style={[styles.defaultView,{backgroundColor: 'yellow', flex:1}]}>  
      </View>
      </View>
      
      <View style={[styles.defaultView, styles.defaultViewRow,{height:45}]}>
      <View style={[styles.defaultView,{backgroundColor: 'red', flex:3}]}/>
      <View style={[styles.defaultView]}/>
      <View style={[styles.defaultView,{backgroundColor: 'black', flex:1}]}/>
      </View>
      
      <View style={{flex:1,justifyContent:"flex-end"}}>
      <View style={[styles.defaultView,{backgroundColor:'orange', height:30, alignItems:"flex-end", justifyContent:"center"}]}>
      <Text style={[styles.defaultText,{}]}>ORANGE</Text>
      </View>
      </View>
    </View>
  );
};

export default lexa1;

const styles = StyleSheet.create({
  defaultText:{
  fontSize:20,
  paddingHorizontal:4
  },
  defaultViewMain:{
  padding:2,
  flexDirection:"column"
  },  
  defaultViewRow:{
  flexDirection:"Row",
  },  
  defaultView:{
  padding:2,
  },
  
});
