import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import FlatList from "./src/screens/FlatList";

export default function App() {
  return (
    <SafeAreaView>
      <FlatList />
      <StatusBar style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
