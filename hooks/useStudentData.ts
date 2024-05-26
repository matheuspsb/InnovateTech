import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StudentService } from "../services/student-service";
import { Result } from "../types/student-type";

interface UseStudentData {
  setData: (data: Result[]) => void;
  setLoading: (loading: boolean) => void;
  data: Result[];
  loading: boolean;
}

const useStudentData = (): UseStudentData => {
  const [data, setData] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadStudentsData = async () => {
      try {
        setLoading(true);
        let cachedData = await AsyncStorage.getItem("studentsData");
        if (cachedData) {
          setData(JSON.parse(cachedData));
        } else {
          const response = await StudentService.getStudentsList();
          setData(response);
          await AsyncStorage.setItem(
            "studentsData",
            JSON.stringify(response)
          );
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStudentsData();
  }, []);

  return { data, loading, setData, setLoading };
};

export default useStudentData;
