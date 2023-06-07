import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Form from "./src/screens/Form";

export default function App() {
  return (
    <SafeAreaView>
      <Form />
      <StatusBar style={{ flex: 1 }} />
    </SafeAreaView>
  );
}
