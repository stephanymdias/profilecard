import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileCard(){
  return (
    <View style={styles.card}>
      <Image 
      source={{ uri: 'https://jpimg.com.br/uploads/2023/02/000_apw2000051019379-e1675878071364-561x450.jpg' }}
      style={styles.profileImage}
      />
      <Text style={styles.name}>Michael Jackson (Lord)</Text>
      <Text style={styles.description}>Michael Joseph Jackson (Gary, 29 de agosto de 1958 – Los Angeles, 25 de junho de 2009) foi um cantor, compositor e dançarino estadunidense. Apelidado de "Rei do Pop", foi um dos ícones culturais mais importantes e influentes de todos os tempos e um dos maiores artistas da história da música.
      </Text>
    </View>
  );
}

const styles= StyleSheet.create({
  card: {
    backgroundColor:'#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});