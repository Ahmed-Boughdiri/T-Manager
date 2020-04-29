import React from "react";
import { View, StyleSheet, Dimensions, Text as SubText } from "react-native";
import { Text, Avatar, Tooltip } from "react-native-elements";
import Settings from "./Settings";

const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text h2 style={{ color: "#fff" }}>
          Welcome Back,
        </Text>
        <SubText style={{ fontSize: 20, color: "#fff" }}>Ahmed</SubText>
      </View>
      <View style={styles.options}>
        <Tooltip
          popover={<Settings />}
          backgroundColor="#fff"
          overlayColor="transparent"
        >
          <Avatar
            icon={{ name: "settings", type: "Feather", color: "#fff" }}
            rounded
            size="medium"
            overlayContainerStyle={{ backgroundColor: "#413754" }}
          />
        </Tooltip>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT * 0.15,
    width: WIDTH,
    marginTop: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  options: {
    marginTop: 7,
  },
});

export default Header;
