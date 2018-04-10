import { Dimension} from "../chart-tree/entity";


export let rawData: Array<any> = [
    {
        name: "Kate",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "1",
        salary: 100
    },
    {
        name: "Jim",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "2",
        salary: 100
    },
    {
        name: "David",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "3",
        salary: 100
    }, 
    {
        name: "Grace",
        gender: "female",
        birthYear: "1988",
        country: "China",
        identityNo: "4",
        salary: 100
    },
    {
        name: "James",
        gender: "male",
        birthYear: "1988",
        country: "American",
        identityNo: "5",
        salary: 100
    },
    {
        name: "Green",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "6",
        salary: 100
    },
    {
        name: "Scott",
        gender: "male",
        birthYear: "1985",
        country: "China",
        identityNo: "7",
        salary: 100
    },
    {
        name: "Park",
        gender: "male",
        birthYear: "1987",
        country: "American",
        identityNo: "8",
        salary: 100
    },
    {
        name: "Helen",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "9",
        salary: 100
    },
    {
        name: "Lucas",
        gender: "male",
        birthYear: "1988",
        country: "China",
        identityNo: "10",
        salary: 100
    },
    {
        name: "Jessie",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "11",
        salary: 100
    },
    {
        name: "Clark",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "12",
        salary: 100
    },
    {
        name: "William",
        gender: "male",
        birthYear: "1984",
        country: "American",
        identityNo: "13",
        salary: 100
    },
    {
        name: "Shane",
        gender: "male",
        birthYear: "1986",
        country: "China",
        identityNo: "14",
        salary: 100
    },
    {
        name: "Bing",
        gender: "male",
        birthYear: "1986",
        country: "American",
        identityNo: "15",
        salary: 100
    },
    {
        name: "Winston",
        gender: "male",
        birthYear: "1983",
        country: "China",
        identityNo: "16",
        salary: 100
    },
    {
        name: "Betty",
        gender: "female",
        birthYear: "1985",
        country: "China",
        identityNo: "17",
        salary: 100
    },
    {
        name: "Celia",
        gender: "female",
        birthYear: "1988",
        country: "American",
        identityNo: "18",
        salary: 100
    },
    {
        name: "Hilary",
        gender: "female",
        birthYear: "1984",
        country: "China",
        identityNo: "19",
        salary: 100
    },
    {
        name: "Cally",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "20",
        salary: 100
    },
    {
        name: "Jim",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "21",
        salary: 100
    },
    {
        name: "David",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "22",
        salary: 100
    }, 
    {
        name: "Fiona",
        gender: "female",
        birthYear: "1988",
        country: "China",
        identityNo: "23",
        salary: 100
    },
    {
        name: "James",
        gender: "male",
        birthYear: "1988",
        country: "American",
        identityNo: "24",
        salary: 100
    },
    {
        name: "Green",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "25",
        salary: 100
    },
    {
        name: "Scott",
        gender: "male",
        birthYear: "1985",
        country: "China",
        identityNo: "26",
        salary: 100
    },
    {
        name: "Park",
        gender: "male",
        birthYear: "1987",
        country: "American",
        identityNo: "27",
        salary: 100
    },
    {
        name: "Helen",
        gender: "female",
        birthYear: "1985",
        country: "American",
        identityNo: "28",
        salary: 100
    },
    {
        name: "Lucas",
        gender: "male",
        birthYear: "1988",
        country: "China",
        identityNo: "29",
        salary: 100
    },
    {
        name: "Jessie",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "30",
        salary: 100
    },
    {
        name: "Clark",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "31",
        salary: 100
    },
    {
        name: "William",
        gender: "male",
        birthYear: "1984",
        country: "American",
        identityNo: "32",
        salary: 100
    },
    {
        name: "Shane",
        gender: "male",
        birthYear: "1986",
        country: "China",
        identityNo: "33",
        salary: 100
    },
    {
        name: "Bing",
        gender: "male",
        birthYear: "1986",
        country: "American",
        identityNo: "34",
        salary: 100
    },
    {
        name: "Winston",
        gender: "male",
        birthYear: "1983",
        country: "China",
        identityNo: "35",
        salary: 100
    },
    {
        name: "Betty",
        gender: "female",
        birthYear: "1985",
        country: "China",
        identityNo: "36",
        salary: 100
    },
    {
        name: "Celia",
        gender: "female",
        birthYear: "1988",
        country: "American",
        identityNo: "37",
        salary: 100
    },
    {
        name: "Hilary",
        gender: "female",
        birthYear: "1984",
        country: "China",
        identityNo: "38",
        salary: 100
    },
];
export let metaData: Array<any> = [
    {
        name: "name",
        dimension: Dimension.StaticProperty
    },
    {
        name: "gender",
        dimension: Dimension.StaticProperty
    },
    {
        name: "birthYear",
        dimension: Dimension.Time
    },
    {
        name: "country",
        dimension: Dimension.StaticProperty
    }, 
    {
        name: "salary",
        dimension: Dimension.Value
    }
];

export let reduceSeq: Array<any> = [
    {
        name: "gender",
        dimension: Dimension.StaticProperty
    },
    {
        name: "birthYear",
        dimension: Dimension.Time
    },
    {
        name: "country",
        dimension: Dimension.StaticProperty
    }
];