import Modal from 'react-native-modal';
import { StyleSheet, TextInput, TextInputProps, View, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { Search } from "../icons/Search";
import { Result } from '../../types/student-type';
import StudentDetails from './StudentDetails';

interface StudentDetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  student: Result | null;
};

const { height } = Dimensions.get('window')

function StudentDetailModal({ isVisible, onClose, student } : StudentDetailModalProps){
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={modalStyle.modal}
    >
      <StudentDetails student={student} />
    </Modal>
  );
};

const modalStyle = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    position: 'relative'
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: height * 0.7,
  },
  studentImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    position: 'absolute',
    top: -80,
    right: '35%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 80, 
  },
});

export interface BottomSheetSearchInputProps extends TextInputProps {}

function BottomSheetSearchInput(props: BottomSheetSearchInputProps) {
  return (
    <View style={searchInputStyle.container}>
      <TextInput
        style={searchInputStyle.input}
        numberOfLines={1}
        cursorColor={Colors.light.primary}
        placeholderTextColor={Colors.light.gray400}
        {...props}
      />

      <Search />
    </View>
  );
}

const searchInputStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.light.gray100,
    borderRadius: 16,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.light.backWhite,
  },
});

const AppBottomSheet = {
  SearchInput: BottomSheetSearchInput,
  Modal: StudentDetailModal,
};

export default AppBottomSheet;