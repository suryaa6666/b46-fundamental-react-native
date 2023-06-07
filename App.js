import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Text,
  Box,
  View,
  HStack,
  Stack,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <View backgroundColor={"amber.500"} marginTop={50}>
        <StatusBar style={{ flex: 1 }} />
        <Text>NATIVE BASE INTRODUCTION</Text>
        <Stack direction={"row"} space={10} flexWrap={"wrap"}>
          <Box borderColor={"primary.300"} borderWidth={3} marginBottom={5}>
            Halo
          </Box>
          <Box borderColor={"primary.300"} borderWidth={3} marginBottom={5}>
            Halo
          </Box>
          <Box borderColor={"primary.300"} borderWidth={3} marginBottom={5}>
            Halo
          </Box>
          <Box borderColor={"primary.300"} borderWidth={3} marginBottom={5}>
            Halo
          </Box>
          <Box borderColor={"primary.300"} borderWidth={3} marginBottom={5}>
            Halo
          </Box>
          <Box borderColor={"primary.300"} borderWidth={3} marginBottom={5}>
            Halo
          </Box>
          <Box borderColor={"primary.300"} borderWidth={3} marginBottom={5}>
            Halo
          </Box>
        </Stack>
      </View>
    </NativeBaseProvider>
  );
}
