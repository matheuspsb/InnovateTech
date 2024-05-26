import React, { PureComponent } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Result } from '../../types/student-type';
import { formatDate } from '../../utils/format-date';
import Colors from '../../constants/Colors';

interface StudentCardProps {
  item: Result;
}

class StudentCard extends PureComponent<StudentCardProps> {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.picture.large }} style={styles.studentImage} />
        <View style={styles.studentInfo}>
          <Text style={styles.name}>{`${item.name.first} ${item.name.last}`}</Text>
          <View style={styles.details}>
            <Text style={styles.text}>{item.gender}</Text>
            <Text style={styles.text}>{formatDate(item?.dob?.date)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.white,
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
    color: Colors.dark.primaryLighter
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: Colors.dark.gray500
  } 
});

export default StudentCard;