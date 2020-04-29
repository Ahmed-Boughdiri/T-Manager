
export interface TaskProps {
    name: string,
    id: number,
    completed: boolean
}

export const tasks: TaskProps[] = [
    {
      name: "Completing The App",
      id: 1,
      completed: false,
    },
    {
      name: "Studying Math",
      id: 2,
      completed: false,
    },
    {
      name: "Reading 10 Pages From My Favourite Book",
      id: 3,
      completed: true,
    },
    {
      name: "Practising Yoga",
      id: 4,
      completed: false,
    },
];
