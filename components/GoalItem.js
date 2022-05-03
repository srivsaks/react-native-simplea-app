import { Button, StyleSheet, Text, View , Pressable} from 'react-native';

function GoalItem(props){
return(
    
    <View style={styles.goalItem}>
      <Pressable android_ripple={{color:"#fff"}} onPress={props.onDeleteItem.bind(this,props.id)}
      style={({pressed})=>pressed&&styles.pressedItem}
      >
            <Text style={styles.goalText}>
              {props.text}
            </Text>
      </Pressable>
            </View>
)
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        backgroundColor:"#5e0acc",
        borderRadius:6,
        padding:8,
        // overflow:'hidden'
      },
      pressedItem:{
opacity:0.5
      },
      goalText:{
        color:"#fff",
      }
})