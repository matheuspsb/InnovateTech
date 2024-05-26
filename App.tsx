import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StudentService } from "./services/student-service";
import { Result } from "./types/student-type";
import StudentCard from "./components/Student-Card";

export default function App() {
  const [data, setData] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  async function loadStudentsData() {
    try {
      setLoading(true);
      const response = await StudentService.getStudentsList();
      setData(response);
    } catch (error) {
      setError("Failed to fetch students");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  async function loadMoreStudents() {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const response = await StudentService.getStudentsList(nextPage);
      setData([...data, ...response]);
      setPage(nextPage);
    } catch (error) {
      console.error("Error loading more students:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudentsData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error}</Text>
      </View>
    );
  }

  const renderStudentCard = ({ item }: { item: Result }) => (
    <StudentCard item={item} />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Text style={styles.title}>InnovateTech</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.login.uuid}
          renderItem={renderStudentCard}
          ListFooterComponent={
            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <Button title="Load More" onPress={loadMoreStudents} />
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 16,
  },
});
