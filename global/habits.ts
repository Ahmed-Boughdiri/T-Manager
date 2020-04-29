
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

export const habits: HabitProps[] = [
    {
      name: "Programming",
      icon: {
        iconName: "laptop",
        iconType: "FontAwesome",
      },
      progress: 80,
      goal: "200 New Lines",
      color: "#443f79",
    },
    {
      name: "Reading",
      icon: {
        iconName: "book",
        iconType: "FontAwesome",
      },
      progress: 60,
      goal: "20 New Pages",
      color: "#e07c7c",
    },
    {
      name: "HouseWork",
      icon: {
        iconName: "home",
        iconType: "Entypo",
      },
      progress: 30,
      goal: "1 Hour",
      color: "#f2a265",
    },
];