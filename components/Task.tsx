import React from "react";
import { View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { TaskProps } from "../global/tasks";

const Task: React.FC<TaskProps> = ({ name, completed }) => {
  return (
    <View style={styles.task}>
      <CheckBox
        title={name}
        checked={completed}
        containerStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    height: 50,
    width: "100%",
    borderRadius: 60,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Task;
