import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

const Pagina2Component = () => {
  const navigation = useNavigation();

  return (
    <View>
        <Text>Pagina 2</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Home' as never);
        }}>
        <Text>Voltar</Text>
      </Pressable>
      
    </View>
  );
};

export default Pagina2Component;