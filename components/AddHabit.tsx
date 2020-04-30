import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Input from "./Input";
import { addMyHabit } from "../global/habits";
import { Dropdown } from "react-native-material-dropdown";
import { categories } from "../global/categories";
import { colors } from "../global/colors";

const AddHabit: React.FC<{ closeAddHabit: any }> = ({ closeAddHabit }) => {
  const [habitName,setHabitName] = React.useState("");
  const [goal,setGoal] = React.useState("");
  const [category,setCategory] = React.useState("");
  const [color,setColor] = React.useState("");
  const updateHabit = (val: string): void => setHabitName(val);
  const updateGoal = (val: string): void => setGoal(val);
  const taritement = () =>{
    addMyHabit(habitName + "," + goal + "," + category + "," + color + ",0");
    closeAddHabit();
  }
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", marginLeft: 20 }}>
        <Input
          name="Habit"
          Icon={() => <Ionicons name="md-alarm" color="#ccc" size={30} />}
          updateAction={updateHabit}
        />
        <Input
          name="Goal"
          Icon={() => <Feather name="target" color="#ccc" size={30} />}
          updateAction={updateGoal}
        />
        <View style={{marginTop: -10}}>
          <Dropdown data={categories} label="Category" onChangeText={(val) => setCategory(val)} />
        </View>
        <View style={{marginTop: -10}}>
          <Dropdown data={colors} label="Colors" onChangeText={(val) => setColor(val)} />
        </View>
        <Button
          title="Add Habit"
          buttonStyle={{ backgroundColor: "#f2a265", marginTop: 10 }}
          onPress={taritement}
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
