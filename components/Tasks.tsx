import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Avatar, Overlay } from "react-native-elements";
import AddTask from "./AddTask";
import { tasks, TaskProps } from "../global/tasks";
import Task from "./Task";

const WIDTH = Dimensions.get("window").width;

const Tasks: React.FC = () => {
  const [addTask, setAddTask] = React.useState(false);
  const closeAddTask = () => setAddTask(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h4>Today's Tasks</Text>
        <View style={{ marginTop: -10 }}>
          <Avatar
            rounded
            size="medium"
            overlayContainerStyle={{ backgroundColor: "#797698" }}
            icon={{ name: "add", type: "FontAwesome", color: "#fff" }}
            onPress={() => setAddTask(true)}
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        {tasks.map((t) => (
          <Task name={t.name} id={t.id} completed={t.completed} />
        ))}
      </View>
      <Overlay isVisible={addTask} overlayStyle={{ height: 250, width: 300 }}>
        <AddTask closeAddTask={closeAddTask} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    marginTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  header: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Tasks;
