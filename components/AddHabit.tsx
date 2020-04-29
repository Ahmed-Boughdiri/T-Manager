import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Input from "./Input";

const AddHabit: React.FC<{ closeAddHabit: any }> = ({ closeAddHabit }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", marginLeft: 20 }}>
        <Input
          name="Habit"
          Icon={() => <Ionicons name="md-alarm" color="#ccc" size={30} />}
        />
        <Input
          name="Gategory"
          Icon={() => <Ionicons name="ios-options" color="#ccc" size={30} />}
        />
        <Button
          title="Add Habit"
          buttonStyle={{ backgroundColor: "#f2a265", marginTop: 10 }}
        />
        <TouchableOpacity onPress={closeAddHabit}>
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 18
  },
});

export default AddHabit;
