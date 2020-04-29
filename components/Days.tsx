import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { days, DayProps } from "../global/days";

const WIDTH = Dimensions.get("window").width;

const Day: React.FC<DayProps> = ({ name, num, active }) =>{
    return(
        <View style={{marginRight: 8}}>
            <Avatar rounded title={num + ""} size={60} overlayContainerStyle={{backgroundColor: (active ? "#413754" : "#A69EAA")  }} />
            <Text style={{textAlign: "center",marginTop: 5, color: active ? "#413754" : "#A69EAA"}}>{name}</Text>
        </View>
    )
}

const Days: React.FC = () =>{
    return(
        <View style={styles.container}>
            {
                days.map(d => <Day name={d.name} num={d.num} key={d.num} active={d.active} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        marginTop: 15,
        justifyContent: "center",
        paddingHorizontal: 25,
        flexDirection: "row",
        paddingBottom: 20
    }
})

export default Days;
