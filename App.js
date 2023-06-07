import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";
import Abi from "./components/style";

export default function App() {
  return (
    <View style={Abi.container}>
      <Header />
      <Content />
      <View style={Abi.surya}>
        <Text style={Abi.brilliant}>GW TEST BANGET 😎😎😎!</Text>
        <Text style={Abi.brilliant}>GW TEST BANGET 😎😎😎!</Text>
      </View>
      <StatusBar translucent={false} hidden={true} />
    </View>
  );
}
