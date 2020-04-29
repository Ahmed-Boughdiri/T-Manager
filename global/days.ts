
export interface DayProps {
    name: string,
    num: number,
    active: boolean
}

export const days: DayProps[] = [
    {
        name: "Mon",
        num: 5,
        active: false,
    },
    {
        name: "Tue",
        num: 6,
        active: false,
    },
    {
        name: "Wed",
        num: 7,
        active: true,
    },
    {
        name: "Thu",
        num: 8,
        active: false,
    },
    {
        name: "Fri",
        num: 9,
        active: false,
    }
]