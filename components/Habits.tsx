import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Text, Avatar, Overlay } from "react-native-elements";
import AddHabit from "./AddHabit";
import { getFinalHabits } from "../global/habits";
import Habit from "./Habit";
import { HabitProps } from "../global/habits";

const { width: WIDTH } = Dimensions.get("window");

const Habits: React.FC = () => {
  const [habits,setHabits] = React.useState([]);
  const [addHabit, setAddHabit] = React.useState(false);
  const closeAddHabit = (): void => setAddHabit(false);
  const handleHabits = async() =>{
    const habitsHandler: any = await getFinalHabits();
    setHabits(habitsHandler);
    //console.log(habitsHandler);
  }
  React.useEffect(() =>{
    handleHabits()
  })
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text h4>Your Habits</Text>
        <Avatar
          rounded
          size="medium"
          overlayContainerStyle={{ backgroundColor: "#797698" }}
          icon={{ name: "add", type: "FontAwesome", color: "#fff" }}
          onPress={() => setAddHabit(true)}
        />
      </View>
      <View style={styles.boxesContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 10 }}
        >
          {habits.map((h: HabitProps) => (
            <Habit
              name={h.name}
              icon={h.icon}
              progress={h.progress}
              goal={h.goal}
              color={h.color}
            />
          ))}
        </ScrollView>
      </View>
      <Overlay isVisible={addHabit} overlayStyle={{ height: 370, width: 300 }}>
        <AddHabit closeAddHabit={closeAddHabit} />
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    marginTop: 10,
  },
  title: {
    height: 70,
    width: WIDTH,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxesContainer: {
    marginTop: 10,
    width: "100%",
  },
});

export default Habits;
