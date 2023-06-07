import { FlatList, Image, ScrollView, Text, View } from "react-native";

function Map() {
  const mobil = [
    {
      id: 1,
      name: "BMW",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 2,
      name: "TESLA",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 3,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 4,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 5,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 6,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 7,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 8,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 9,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 10,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 11,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
    {
      id: 12,
      name: "TRUCK",
      image:
        "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/h549ru20230111_054548.jpg",
    },
  ];

  return (
    <ScrollView>
      {/* <FlatList
        initialNumToRender={3}
        data={mobil}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <Text>{item.name}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: 300, height: 300 }}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      /> */}
      {mobil.map((item, index) => {
        return (
          <View key={index}>
            <Text>{item.name}</Text>
            <Image
              source={{ uri: item.image }}
              style={{ width: 300, height: 300 }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}

export default Map;
