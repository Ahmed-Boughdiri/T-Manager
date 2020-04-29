import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

const Settings: React.FC = () => {
  const options = [
    {
      name: "Switch To Dark Mode",
      id: 1,
      icon: "highlight",
    },
    {
      name: "Modify The UserName",
      id: 1,
      icon: "verified-user",
    },
  ];
  return (
    <View style={styles.container}>
      {options.map((op) => (
        <ListItem
          key={op.id}
          title={op.name}
          leftIcon={{ name: op.icon, type: "MaterialIcons" }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 250,
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default Settings;
