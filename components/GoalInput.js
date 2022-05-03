import { StyleSheet,View,Button,TextInput, Modal } from "react-native";
function GoalInput(props){
return(
   <Modal animationType="slide" visible={props.isModalVisible}>
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={props.goalInputHandler} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
        <Button title="Add goal" onPress={props.addGoalHandler} />
        </View>
        <View style={styles.button}>
        <Button title="Cancel" onPress={props.closeModal}/>
        </View>
        </View>
      </View>
      </Modal>
)
}

export default GoalInput;

const styles=StyleSheet.create({
    textInput: {
        borderWidth: 2,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8
      },
      inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        padding:16
      },
      buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:16
      },
      button:{
      width:"40%",
      marginHorizontal:8,
      }

})