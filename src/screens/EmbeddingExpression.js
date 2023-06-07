import { Text, View } from "react-native";

export default function EmbeddingExpression() {

    function getFullname(namaDepan, namaBelakang) {
      return `${namaDepan} ${namaBelakang}`
    }

  const name = "John Doe";
  return (
    <View style={{ marginTop: 200 }}>
      <Text>{name}</Text>
      <Text>{getFullname("ibnu", "ganteng")}</Text>
    </View>
  );
}
