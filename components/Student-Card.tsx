import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Result } from '../types/student-type';

interface StudentCardProps {
  item: Result;
}

const StudentCard: React.FC<StudentCardProps> = ({ item } ) => (
  <View style={styles.card}>
    <Image source={{ uri: item.picture.large }} style={styles.studentImage} />
    <View style={styles.studentInfo}>
      <Text style={styles.name}>{`${item.name.first} ${item.name.last}`}</Text>
      <View style={styles.details}>
        <Text>{item.gender}</Text>
        <Text>{item.dob.date}</Text>
      </View>
    </View>
  </View>
);

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  studentImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 16,
  },
  studentInfo: {
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'space-between',
    height: 70,
    width: windowWidth - 160 // Tamanho da tela - (padding + tamanho da imagem)
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
});

export default StudentCard;