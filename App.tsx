import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import Header from "./components/Header";
import Days from "./components/Days";
import Habits from "./components/Habits";
import Tasks from "./components/Tasks";

const WIDTH = Dimensions.get("window").width;

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Header />
        <Days />
      </View>
      <ScrollView style={{ width: WIDTH }} showsVerticalScrollIndicator={false}>
        <Habits />
        <Tasks />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9E9",
  },
  top: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    backgroundColor: "#5e5a8c",
  },
});

export default App;
