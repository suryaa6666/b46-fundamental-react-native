import { Text, View } from "react-native";

function Map() {
  const mobilmotor = [
    "BMW",
    "TESLA",
    "PORSCHE",
    "FERRARI",
    "BAJAJ",
    "SUPRA X",
    "ASTREA",
  ];

  return (
    <View>
      {mobilmotor.map((item, index) => {
        return (
          <View key={index}>
            <Text >{item}</Text>
          </View>
        );
      })}
    </View>
  );
}

export default Map;
