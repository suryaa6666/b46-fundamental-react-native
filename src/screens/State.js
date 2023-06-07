import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";

function State() {
  const [james, jessica] = useState(100);

  const tambah = () => {
    if (james >= 100) {
      return Alert.alert("gak bisa", "baca");
    }
    jessica(james + 1);
  };

  const kurang = () => {
    jessica(james - 1);
  };
  return (
    <View
      style={{
        marginTop: 100,
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 100 }}>{james}</Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <Button onPress={tambah} title="Tambah" />
        <Button onPress={kurang} title="Kurang" />
      </View>
    </View>
  );
}

export default State;
