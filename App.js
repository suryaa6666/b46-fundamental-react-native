import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Props from "./src/screens/props";

export default function App() {
  return (
    <SafeAreaView>
      <Props />
      <StatusBar style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
