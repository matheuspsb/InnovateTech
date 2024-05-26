import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

interface StudentInfoItemProps {
  title: string;
  value: string;
}

const StudentInfoItem: React.FC<StudentInfoItemProps> = ({ title, value }) => {
  return (
    <View style={infoItemStyles.container}>
      <Text style={infoItemStyles.title}>{title}</Text>
      <Text style={infoItemStyles.value}>{value}</Text>
    </View>
  );
};

const infoItemStyles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.light.primary,
  },
  value: {
    fontSize: 16,
    color: Colors.dark.gray600,
  },
});

export default StudentInfoItem;
