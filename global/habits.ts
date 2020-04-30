import { AsyncStorage } from "react-native";

export interface HabitProps {
    name: string,
    icon: {
        iconName: string,
        iconType: string
    },
    progress: number,
    goal: string,
    color: string
}

const getFullHabits = async() =>{
  let fullHabits = [];
  const nb = await AsyncStorage.getItem("nb");
  const num = (nb === null) ? 0 : +nb;
  for(let i=0;i<num;i++){
    const newHabit = await AsyncStorage.getItem("habit" + i);
    fullHabits.push(newHabit);
  }
  return fullHabits;
}

const getHabits = async() =>{
  const fullHabits = await getFullHabits();
  const habitsProps = [];
  for(const i in fullHabits){
    const habitsCar: (string[] | undefined) = fullHabits[i]?.split(",");
    const finalHabitsCar = (habitsCar === undefined) ? [] : habitsCar;
    const car = {
      name: finalHabitsCar[0],
      goal: finalHabitsCar[1],
      category: finalHabitsCar[2], 
      color: finalHabitsCar[3],
      progress: +finalHabitsCar[4]
    }
    habitsProps.push(car);
  }
  return habitsProps;
}

const generateIconName = (name: string): string =>{
  switch(name) {
    case "Sport": return "heart-pulse";
    case "Reading": return "book";
    case "Programming": return "laptop";
    case "Art": return "md-brush";
    case "Studying": return "lead-pencil";
    case "Working": return "ios-briefcase";
    case "Fitness": return "heart-pulse";
    case "HouseWork": return "ios-home";
    case "Distroy Bad Attitude" : return "ios-warning";
    case "Creativity": return "lightbulb-on-outline";
    case "Health": return "hospital";
    default: return ""
  }
}

const generateIconType = (name: string): string =>{
  switch(name) {
    case "Sport": return "MaterialCommunityIcons";
    case "Reading": return "Feather";
    case "Programming": return "FontAwesome";
    case "Art": return "Ionicons";
    case "Studying": return "MaterialCommunityIcons";
    case "Working": return "Ionicons";
    case "Fitness": return "MaterialCommunityIcons";
    case "HouseWork": return "Ionicons";
    case "Distroy Bad Attitude": return "Ionicons";
    case "Creativity": return "MaterialCommunityIcons";
    case "Health": return "MaterialCommunityIcons"; 
    default: return ""
  }
}

const generateColor = (color: string): string =>{
  switch(color){
    case "Blue": return "#443f79";
    case "Red": return "#e07c7c";
    case "Orange": return "#f2a265";
    case "Purple": return "#b8b6cb";
    case "Gray": return "#A69EAA";
    case "Black": return "#444";
    default: return "";
  }
}

export var habits: HabitProps[] = [];

const getFinalHabits = async() =>{
  const habitsCar = await getHabits();
  for(const i in habitsCar){
    const car = habitsCar[i];
    const prop: HabitProps = {
      name: car.name,
      icon: {
        iconName: generateIconName(car.category),
        iconType: generateIconType(car.category)
      },
      progress: car.progress,
      goal: car.goal,
      color: generateColor(car.color),
    }
    habits.push(prop)
  }
  //console.log(habits)
}

getFinalHabits();

export const addMyHabit = async(habit: string) =>{
  const nb = await AsyncStorage.getItem("nb");
  const newNB: number = (nb === null) ? 1 : (+nb) + 1;
  await AsyncStorage.setItem("nb",newNB + "");
  await AsyncStorage.setItem("habit" + newNB,habit);
}

const getData = async() =>{
  const data = await AsyncStorage.getItem("habit1");
  console.log(data);
}

getData()

// AsyncStorage.removeItem("habit1")



