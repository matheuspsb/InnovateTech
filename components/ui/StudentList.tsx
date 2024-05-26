import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import StudentCard from "./StudentCard";
import { Result } from "../../types/student-type";
import LoadingSpinner from "../icons/LoadingSpinner";
import Colors from "../../constants/Colors";

interface StudentListProps {
  data: Result[];
  onPress: (item: Result) => void;
  handleEndReached: () => void;
  loading: boolean;
}

const StudentList = ({ data, onPress, loading, handleEndReached }: StudentListProps) => {
  const renderStudentCard = ({ item }: { item: Result }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <StudentCard item={item} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.login.uuid}
      renderItem={renderStudentCard}
      ListFooterComponent={
        <View style={{ marginBottom: 150 }}>
          {loading && (
            <View style={{ alignItems: "center", gap: 8 }}>
              <LoadingSpinner color={Colors.light.primary} />
              <Text style={{ color: Colors.light.primary }}>
                Carregando mais...
              </Text>
            </View>
          )}
        </View>
      }
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.01}
    />
  );
};

export default StudentList;
