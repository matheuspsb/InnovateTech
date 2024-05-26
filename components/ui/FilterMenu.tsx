// FilterMenu.js
import React, { useState } from "react";
import { Menu } from "react-native-paper";
import Colors from "../../constants/Colors";
import { Fill } from "../icons/Fill";
import { StyleSheet, TouchableOpacity } from "react-native";

const FilterMenu = ({ onChange }: { onChange: (value: string) => void }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <>
      <TouchableOpacity style={styles.filterButton} onPress={openMenu}>
        <Fill />
      </TouchableOpacity>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<TouchableOpacity style={styles.filterButton} onPress={openMenu}><Fill /></TouchableOpacity>}
        contentStyle={{ backgroundColor: Colors.light.white }}
      >
        <Menu.Item onPress={() => onChange("all")} title="Todos" />
        <Menu.Item onPress={() => onChange("male")} title="Masculino" />
        <Menu.Item onPress={() => onChange("female")} title="Feminino" />
      </Menu>
    </>
  );
};

export default FilterMenu;

const styles = StyleSheet.create({
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
