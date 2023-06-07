import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Form() {
  return (
    <View style={{marginTop: 30, padding: 30 }}>
      <Text style={styles.myFont}>My Form</Text>
      <View>
        <TextInput style={styles.myInput} placeholder="Full name..." />
        <TextInput style={styles.myInput} placeholder="Email..." />
        <TextInput style={styles.myInput} placeholder="Address..." />
        <TextInput style={styles.myInput} placeholder="Password..." />
      </View>
      <Button title="Halo bang" />
    </View>
  );
}

const styles = StyleSheet.create({
  myFont: {
    color: "red",
    fontSize: 30,
    textAlign: "center"
  },
  myButton: {
    backgroundColor: "blue",
  },
  myInput: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    borderStyle: "solid",
    padding: 10
  },
});

export default Form;
