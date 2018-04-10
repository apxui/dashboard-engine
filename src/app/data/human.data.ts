import { Dimension} from "../chart-tree/entity";


export let rawData: Array<any> = [
    {
        name: "Kate",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "1",
        house: 1
    },
    {
        name: "Jim",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "2",
        house: 1
    },
    {
        name: "David",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "3",
        house: 1
    }, 
    {
        name: "Grace",
        gender: "female",
        birthYear: "1988",
        country: "China",
        identityNo: "4",
        house: 1
    },
    {
        name: "James",
        gender: "male",
        birthYear: "1988",
        country: "American",
        identityNo: "5",
        house: 1
    },
    {
        name: "Green",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "6",
        house: 1
    },
    {
        name: "Scott",
        gender: "male",
        birthYear: "1985",
        country: "China",
        identityNo: "7",
        house: 1
    },
    {
        name: "Park",
        gender: "male",
        birthYear: "1987",
        country: "American",
        identityNo: "8",
        house: 1
    },
    {
        name: "Helen",
        gender: "female",
        birthYear: "1985",
        country: "American",
        identityNo: "9",
        house: 1
    },
    {
        name: "Lucas",
        gender: "male",
        birthYear: "1988",
        country: "China",
        identityNo: "10",
        house: 1
    },
    {
        name: "Lily",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "11",
        house: 1
    },
    {
        name: "Clark",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "12",
        house: 1
    },
    {
        name: "William",
        gender: "male",
        birthYear: "1984",
        country: "American",
        identityNo: "13",
        house: 1
    },
    {
        name: "Shane",
        gender: "male",
        birthYear: "1986",
        country: "China",
        identityNo: "14",
        house: 1
    },
    {
        name: "Bing",
        gender: "male",
        birthYear: "1986",
        country: "American",
        identityNo: "15",
        house: 1
    },
    {
        name: "Winston",
        gender: "male",
        birthYear: "1983",
        country: "China",
        identityNo: "16",
        house: 1
    },
    {
        name: "Nancy",
        gender: "female",
        birthYear: "1985",
        country: "China",
        identityNo: "17",
        house: 1
    },
    {
        name: "Maggie",
        gender: "female",
        birthYear: "1988",
        country: "American",
        identityNo: "18",
        house: 1
    },
    {
        name: "Lisa",
        gender: "female",
        birthYear: "1984",
        country: "China",
        identityNo: "19",
        house: 1
    },
    {
        name: "Cally",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "20",
        house: 1
    },
    {
        name: "Arnold",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "21",
        house: 1
    },
    {
        name: "Andrew",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "22",
        house: 1
    }, 
    {
        name: "Fiona",
        gender: "female",
        birthYear: "1988",
        country: "China",
        identityNo: "23",
        house: 1
    },
    {
        name: "Cliff",
        gender: "male",
        birthYear: "1988",
        country: "American",
        identityNo: "24",
        house: 1
    },
    {
        name: "Devin",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "25",
        house: 1
    },
    {
        name: "Edward",
        gender: "male",
        birthYear: "1985",
        country: "China",
        identityNo: "26",
        house: 1
    },
    {
        name: "Eric",
        gender: "male",
        birthYear: "1987",
        country: "American",
        identityNo: "27",
        house: 1
    },
    {
        name: "Helen",
        gender: "female",
        birthYear: "1985",
        country: "American",
        identityNo: "28",
        house: 1
    },
    {
        name: "Harry",
        gender: "male",
        birthYear: "1988",
        country: "China",
        identityNo: "29",
        house: 1
    },
    {
        name: "Jessie",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "30",
        house: 1
    },
    {
        name: "Ivan",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "31",
        house: 1
    },
    {
        name: "Mick",
        gender: "male",
        birthYear: "1984",
        country: "American",
        identityNo: "32",
        house: 1
    },
    {
        name: "Norman",
        gender: "male",
        birthYear: "1986",
        country: "China",
        identityNo: "33",
        house: 1
    },
    {
        name: "Nomic",
        gender: "male",
        birthYear: "1986",
        country: "American",
        identityNo: "34",
        house: 1
    },
    {
        name: "Rod",
        gender: "male",
        birthYear: "1983",
        country: "China",
        identityNo: "35",
        house: 1
    },
    {
        name: "Betty",
        gender: "female",
        birthYear: "1985",
        country: "China",
        identityNo: "36",
        house: 1
    },
    {
        name: "Celia",
        gender: "female",
        birthYear: "1988",
        country: "American",
        identityNo: "37",
        house: 1
    },
    {
        name: "Hilary",
        gender: "female",
        birthYear: "1984",
        country: "China",
        identityNo: "38",
        house: 1
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
        name: "house",
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
    },
    {
        name: "name",
        dimension: Dimension.StaticProperty
    }
];