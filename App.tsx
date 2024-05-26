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
import AppBottomSheet from "./components/ui/AppBottomSheet";
import Colors from "./constants/Colors";

export default function App() {
  const [data, setData] = useState<Result[]>([]);
  const [filteredData, setFilteredData] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  async function loadStudentsData() {
    try {
      setLoading(true);
      const response = await StudentService.getStudentsList();
      setData(response);
      setFilteredData(response);
    } catch (error) {
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
      const newData = [...data, ...response];
      setData(newData);
      if (search === "") {
        setFilteredData(newData);
      } else {
        const filtered = newData.filter(
          (item) =>
            item.name.first.toLowerCase().includes(search.toLowerCase()) ||
            item.name.last.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filtered);
      }
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

  const handleSearch = (text: string) => {
    setSearch(text);
    if (text === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
          item.name.first.toLowerCase().includes(text.toLowerCase()) ||
          item.name.last.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
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
        <AppBottomSheet.SearchInput value={search} onChangeText={handleSearch} placeholder="Buscar o aluno..." />
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.login.uuid}
          renderItem={renderStudentCard}
          ListFooterComponent={
            <View style={{ alignItems: "center", marginBottom: 120 }}>
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
    color: Colors.light.primary,
  },
});
