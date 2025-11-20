import React from 'react';
import { FlatList, View, StyleSheet, Image, Text } from 'react-native';  
import { Card } from 'react-native-paper';

export default function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Mouse Gamer XING LING',
      preco: 'R$ 25,00',
      descricao: 'Mouse com sensor óptico de alta precisão',
      imagem: 'https://cdn.pixabay.com/photo/2021/05/17/11/02/gamer-6260337_1280.jpg',
    },
    {
      id: 2,
      nome: 'Teclado Mecanico',
      preco: 'R$ 200,00',
      descricao: 'Teclado top com iluminação LED',
      imagem: 'https://cdn.pixabay.com/photo/2022/08/14/16/39/keyboard-7386244_1280.jpg',
    },
    {
      id: 3,
      nome: 'Camera Tech pix',
      preco: 'R$ 350,00',
      descricao: 'Camera top de última geração',
      imagem: 'https://cdn.pixabay.com/photo/2015/10/01/20/16/camera-967638_1280.jpg',
    },
    {
      id: 4,
      nome: 'Super Nintendo',
      preco: 'R$ 1000,00',
      descricao: 'Video-game de última geração',
      imagem: 'https://cdn.pixabay.com/photo/2021/04/30/16/34/nintendo-6219352_1280.jpg',
    },
  ];

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.imagem }} />
      <Card.Title title={item.nome} subtitle={item.descricao} />
      <Card.Content>
        <Text style={styles.preco}>{item.preco}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}  
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },
  preco: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 18,  
  },
});
