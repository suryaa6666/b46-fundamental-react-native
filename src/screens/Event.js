import { Alert, Button, Text, View } from "react-native";

// bikin Button
// tampilin alert ketika diclick

function Event() {
  return (
    <View style={{ marginTop: 100 }}>
      <Button
        title="ini button"
        onPress={() => Alert.alert("ini alert", "ini deskripsinya")}
      />
      <Text></Text>
    </View>
  );
}

export default Event;
