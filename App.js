import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Event from "./src/screens/Event";

export default function App() {
  return (
    <SafeAreaView>
      <Event />
      <StatusBar style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
