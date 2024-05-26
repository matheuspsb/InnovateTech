import axios from "axios";
import { ApiResponse, Result } from "../types/student-type";

const baseURL = process.env.EXPO_PUBLIC_API_URL

export class StudentService {
  static async getStudentsList(page: number = 1, results: number = 20): Promise<Result[]> {
    try {
      const response = await axios.get<ApiResponse>(`${baseURL}?page=${page}&results=${results}`);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching student list:', error);
      throw error;
    }
  }
}