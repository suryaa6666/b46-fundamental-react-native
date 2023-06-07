import { ScrollView, Text } from "react-native";
import List from "../components/list";

function Props() {
  return (
    <ScrollView style={{marginTop: 30}}>
      <Text style={{ fontSize: 20, color: "red" }}>List Narapidana</Text>
      <List
        nama="Donny Erlambang"
        image="https://ewr1.vultrobjects.com/lmsbzzbx/attachment/hvsxbselfie%20Donny.JPEG"
        ukuran="25cm"
      />
      <List
        nama="Rizal Muallim"
        image="https://ewr1.vultrobjects.com/lmsbzzbx/attachment/6w3vtapas%20poto.JPEG"
        ukuran="2cm"
      />
      <List
        nama="Gendi Telamdika"
        image="https://ewr1.vultrobjects.com/lmsbzzbx/attachment/57mbdmWhatsApp%20Image%202022-12-16%20at%2007.39.06.JPEG"
        ukuran="100km"
      />
    </ScrollView>
  );
}

export default Props;
