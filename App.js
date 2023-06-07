import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import State from "./src/screens/State";

export default function App() {
  return (
    <SafeAreaView>
      <State />
      <StatusBar style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
