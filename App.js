import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { useState,useEffect } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);


  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // setCourseGoals(prev=>[...prev,enteredGoalText])
    setCourseGoals(prev=>[...prev,{text:enteredGoalText,id:Math.random().toString()}])
    setEnteredGoalText("");
  }

  function deleteGoalHandler(id){
    setCourseGoals(prev=>{
      return prev.filter((item)=>(
        item.id !== id
      ))
    });
  }

  return (
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View> */}
      <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        {/**Using flatList for optimisations */}
      <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={
        (itemData)=>(
          // <View style={styles.goalItem}>
          //   <Text style={styles.goalText}>
          //     {itemData.item.text}
          //   </Text>
          //   </View>
          <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
        )
      }>
        {/* {courseGoals.map((item,index)=>{
          return(
            // adding view because rounded borders arent supported in Text.
            <View key={index} style={styles.goalItem}>
            <Text style={styles.goalText}>
              {item}
            </Text>
            </View>
          )
        })} */}
      </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  },
  goalItem:{
    margin:8,
    backgroundColor:"#5e0acc",
    borderRadius:6,
    padding:8,
    // overflow:'hidden'
  },
  goalText:{
    color:"#fff",
  }
});
