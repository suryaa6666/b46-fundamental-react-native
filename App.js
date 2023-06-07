import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Map from "./src/screens/Map";

export default function App() {
  return (
    <SafeAreaView>
      <Map />
      <StatusBar style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
