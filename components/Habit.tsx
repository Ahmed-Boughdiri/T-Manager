import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { HabitProps } from "../global/habits";
import { Caption } from "react-native-paper";

const Habit: React.FC<HabitProps> = ({ name, icon, progress, goal, color }) => {
  return (
    <View style={{ ...styles.box, backgroundColor: color }}>
      <Avatar
        icon={{ name: icon.iconName, type: icon.iconType, color: "#fff" }}
        rounded
        size="medium"
        overlayContainerStyle={{
          backgroundColor: "rgba(255,255,255,0.4)",
          opacity: 1,
        }}
      />
      <Text
        style={{
          textAlign: "left",
          color: "#E9E8E9",
          marginTop: 10,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        {name}
      </Text>
      <View style={styles.progress}>
        <View
          style={{ ...styles.indicator, width: (progress == NaN) ? 0 : (progress / 120) * 100 }}
        ></View>
      </View>
      <Caption
        style={{ fontSize: 14, marginTop: 8, color: "#fff", opacity: 0.5 }}
      >
        {goal}
      </Caption>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 170,
    width: 150,
    backgroundColor: "#000",
    borderRadius: 15,
    paddingTop: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  progress: {
    height: 5,
    width: 120,
    backgroundColor: "#444",
    borderRadius: 10,
    marginTop: 15,
    overflow: "hidden",
  },
  indicator: {
    height: "100%",
    width: "60%",
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 10,
  },
});

export default Habit;
