import { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StudentService } from "./services/student-service";
import { Result } from "./types/student-type";
import AppBottomSheet from "./components/ui/AppBottomSheet";
import Colors from "./constants/Colors";
import { Button, Provider } from "react-native-paper";
import StudentList from "./components/ui/StudentList";
import FilterMenu from "./components/ui/FilterMenu";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [data, setData] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredData, setFilteredData] = useState<Result[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const [selectedStudent, setSelectedStudent] = useState<Result | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [genderFilter, setGenderFilter] = useState<string>("all");

  async function loadStudentsData() {
    try {
      setLoading(true);
      let cachedData = await AsyncStorage.getItem("studentsData");
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setFilteredData(JSON.parse(cachedData));
        setLoading(false);
      } else {
        const response = await StudentService.getStudentsList();
        setData(response);
        setFilteredData(response);
        await AsyncStorage.setItem("studentsData", JSON.stringify(response));
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
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

  const filterData = (data: Result[], text: string, gender: string) => {
    let filtered = data;
    if (text !== "") {
      filtered = filtered.filter(
        (item) =>
          item.name.first.toLowerCase().includes(text.toLowerCase()) ||
          item.name.last.toLowerCase().includes(text.toLowerCase())
      );
    }
    if (gender !== "all") {
      filtered = filtered.filter((item) => item.gender === gender);
    }
    setFilteredData(filtered);
  };

  const handleSearch = useCallback((text: string) => {
    setSearch(text);
    filterData(data, text, genderFilter);
  }, [data, genderFilter]);

  const handleCardPress = (student: Result) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const handleFilterChange = (value: string) => {
    setGenderFilter(value);
    filterData(data, search, value);
    closeMenu();
  };

  const handleEndReached = () => {
    if (!loading && search === "") {
      loadMoreStudents();
    }
  };

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles.title}>InnovateTech</Text>
            <View style={styles.actionBar}>
              <AppBottomSheet.SearchInput
                value={search}
                onChangeText={handleSearch}
                placeholder="Buscar o aluno..."
              />
              <FilterMenu onChange={handleFilterChange} />
            </View>
          </View>
          <StudentList
            data={filteredData}
            onPress={handleCardPress}
            loading={loading}
            handleEndReached={handleEndReached}
          />
        </View>

        <AppBottomSheet.Modal
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          student={selectedStudent}
        />
      </SafeAreaView>
    </Provider>
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
  actionBar: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
