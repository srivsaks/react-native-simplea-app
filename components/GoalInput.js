import { StyleSheet,View,Button,TextInput, Modal } from "react-native";
function GoalInput(props){
return(

    <View style={styles.inputContainer}>
    <Modal>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={props.goalInputHandler} />
        </Modal>
        <Button title="Add goal" onPress={props.addGoalHandler} />
        
      </View>
)
}

export default GoalInput;

const styles=StyleSheet.create({
    textInput: {
        borderWidth: 2,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8
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
})