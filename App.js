import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { useState,useEffect } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const[isModalVisible,setIsModalVisible] = useState(false);

  function startAddGoalHandler(enteredText) {
    setIsModalVisible(true)
  }

  function endAddGoalHandler() {
    setIsModalVisible(false)
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // setCourseGoals(prev=>[...prev,enteredGoalText])
    setCourseGoals(prev=>[...prev,{text:enteredGoalText,id:Math.random().toString()}])
    setIsModalVisible(false)
  }

  function deleteGoalHandler(id){
    setCourseGoals(prev=>{
      return prev.filter((item)=>(
        item.id !== id
      ))
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View> */}
      {isModalVisible && <GoalInput goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} isModalVisible={isModalVisible} closeModal={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        {/**Using flatList for optimisations */}
      <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={
        (itemData)=>(
          // <View style={styles.goalItem}>
          //   <Text style={styles.goalText}>
          //     {itemData.item.text}
          //   </Text>
          //   </View>
          <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id} />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:"#1e085a"
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
