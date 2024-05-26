import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { Result } from "../../types/student-type";
import StudentInfoItem from "./StudentInfoItem";
import { formatDate } from "../../utils/format-date";

const { height } = Dimensions.get("window");

interface StudentDetailsProps {
  student: Result | null;
}

const StudentDetails: React.FC<StudentDetailsProps> = ({ student }) => {
  return (
    <View style={styles.content}>
      {student ? (
        <>
          <Image
            source={{ uri: student.picture.large }}
            style={styles.studentImage}
          />
          <View style={{ marginTop: 70 }}>
            <StudentInfoItem
              title="Nome Completo"
              value={`${student.name.first} ${student.name.last}`}
            />
            <StudentInfoItem title="Email" value={student.email} />
            <StudentInfoItem title="Gênero" value={student.gender} />
            <StudentInfoItem
              title="Data de Nascimento"
              value={formatDate(student.dob.date)}
            />
            <StudentInfoItem title="Telefone" value={student.phone} />
            <StudentInfoItem title="Nacionalidade" value={student.nat} />
            <StudentInfoItem
              title="Endereço"
              value={`${student.location.street.name}, Nº${student.location.street.number}`}
            />
            <StudentInfoItem
              title="Identificação"
              value={student.id.value}
            />
          </View>
        </>
      ) : (
        <Text>Não foi possível carregar os dados desse aluno...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: height * 0.7,
  },
  studentImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    position: "absolute",
    top: -80,
    right: "35%",
  },
});

export default StudentDetails;
