import { useReducer } from "react";
import { Button, Text, View } from "react-native";

let counter = 0;

function State() {
  const [_, dispatch] = useReducer((x) => {
    return x + 1;
  }, 0);

  const tambah = () => {
    counter += 1;
    dispatch();
  };

  const kurang = () => {
    counter -= 1;
    dispatch();
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
      <Text style={{ fontSize: 100 }}>{counter}</Text>
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
