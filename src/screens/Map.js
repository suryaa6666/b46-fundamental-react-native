import { Text, View } from "react-native";

function Map() {
  const mobilmotor = [
    {
      name: "BMW",
    },
    {
      name: "TESLA",
    },
  ];

  return (
    <View>
      {mobilmotor.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default Map;
