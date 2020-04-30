import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input: React.FC<{ name: string; Icon: any, updateAction: any }> = ({ name, Icon, updateAction }) => {
  return (
    <View style={styles.inputContainer}>
      <Icon />
      <TextInput placeholder={name} style={{ marginLeft: 15, fontSize: 17 }} onChangeText={(val) => updateAction(val)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    alignSelf: "center",
    alignItems: "flex-end",
    paddingBottom: 5,
    marginBottom: 10,
  },
});

export default Input;
