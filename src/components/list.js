import { Text, View, Image } from "react-native";

function List({ nama, image, ukuran }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text>Nama : {nama}</Text>
      <Text>Ukuran : {ukuran}</Text>
    </View>
  );
}

export default List;
