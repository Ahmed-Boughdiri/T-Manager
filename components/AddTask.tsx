import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import Input from "./Input";
import { Octicons, Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";

const AddTask: React.FC<{ closeAddTask: any }> = ({ closeAddTask }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <Input
          name="Task"
          Icon={() => <Octicons name="tasklist" size={23} color="#ccc" />}
        />
        <Input
          name="Gategory"
          Icon={() => <Ionicons name="ios-options" color="#ccc" size={30} />}
        />
        <Button
          title="Add Task"
          buttonStyle={{ backgroundColor: "#f2a265", marginTop: 10 }}
        />
        <TouchableOpacity onPress={closeAddTask}>
          <Text
            style={{
              textAlign: "center",
              color: "lightblue",
              fontSize: 17,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AddTask;
