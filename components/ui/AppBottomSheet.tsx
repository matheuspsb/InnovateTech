import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Colors from "../../constants/Colors";
import { Search } from "../icons/Search";

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
};

export default AppBottomSheet;