import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import EmbeddingExpression from "./src/screens/EmbeddingExpression";

export default function App() {
  return (
    <SafeAreaView>
      <EmbeddingExpression />
      <StatusBar style={{ flex: 1}} />
    </SafeAreaView>
  );
}
