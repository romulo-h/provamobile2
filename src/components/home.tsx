import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{
      backgroundColor: "white", padding: 10, margin: 10, borderRadius: 5, shadowColor: '#171717',
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }}>
      
      <Text
        onPress={() => {
          navigation.navigate('Pagina 2' as never);
        }}>
          Muda para Página 2
      </Text>
    </View>
  );
};
export default Home;