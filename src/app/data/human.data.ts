import { Dimension } from "../chart-tree/entity";


export let rawData: Array<any> = [
    {
        name: "Kate",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "1",
        house: 1,
        IQ: 10,
        EQ: 89,
        FQ: 39,
        SQ: 89,
        BQ: 10,
        AQ: 34
    },
    {
        name: "Jim",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "2",
        house: 1,
        IQ: 46,
        EQ: 45,
        FQ: 35,
        SQ: 24,
        BQ: 56,
        AQ: 45
    },
    {
        name: "David",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "3",
        house: 1,
        IQ: 29,
        EQ: 23,
        FQ: 39,
        SQ: 66,
        BQ: 55,
        AQ: 36
    },
    {
        name: "Grace",
        gender: "female",
        birthYear: "1988",
        country: "China",
        identityNo: "4",
        house: 1,
        IQ: 67,
        EQ: 58,
        FQ: 98,
        SQ: 79,
        BQ: 68,
        AQ: 79
    },
    {
        name: "James",
        gender: "male",
        birthYear: "1988",
        country: "American",
        identityNo: "5",
        house: 1,
        IQ: 58,
        EQ: 89,
        FQ: 39,
        SQ: 68,
        BQ: 98,
        AQ: 78
    },
    {
        name: "Green",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "6",
        house: 1,
        IQ: 98,
        EQ: 78,
        FQ: 67,
        SQ: 56,
        BQ: 78,
        AQ: 89
    },
    {
        name: "Scott",
        gender: "male",
        birthYear: "1985",
        country: "China",
        identityNo: "7",
        house: 1,
        IQ: 78,
        EQ: 68,
        FQ: 78,
        SQ: 97,
        BQ: 67,
        AQ: 78
    },
    {
        name: "Park",
        gender: "male",
        birthYear: "1987",
        country: "American",
        identityNo: "8",
        house: 1,
        IQ: 79,
        EQ: 68,
        FQ: 57,
        SQ: 89,
        BQ: 67,
        AQ: 56
    },
    {
        name: "Helen",
        gender: "female",
        birthYear: "1985",
        country: "American",
        identityNo: "9",
        house: 1,
        IQ: 46,
        EQ: 65,
        FQ: 65,
        SQ: 65,
        BQ: 98,
        AQ: 89
    },
    {
        name: "Lucas",
        gender: "male",
        birthYear: "1988",
        country: "China",
        identityNo: "10",
        house: 1,
        IQ: 78,
        EQ: 78,
        FQ: 98,
        SQ: 98,
        BQ: 65,
        AQ: 65
    },
    {
        name: "Lily",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "11",
        house: 1,
        IQ: 76,
        EQ: 76,
        FQ: 79,
        SQ: 89,
        BQ: 56,
        AQ: 89
    },
    {
        name: "Clark",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "12",
        house: 1,
        IQ: 46,
        EQ: 56,
        FQ: 56,
        SQ: 89,
        BQ: 79,
        AQ: 79
    },
    {
        name: "William",
        gender: "male",
        birthYear: "1984",
        country: "American",
        identityNo: "13",
        house: 1,
        IQ: 13,
        EQ: 46,
        FQ: 79,
        SQ: 79,
        BQ: 46,
        AQ: 13
    },
    {
        name: "Shane",
        gender: "male",
        birthYear: "1986",
        country: "China",
        identityNo: "14",
        house: 1,
        IQ: 35,
        EQ: 65,
        FQ: 98,
        SQ: 65,
        BQ: 32,
        AQ: 57
    },
    {
        name: "Bing",
        gender: "male",
        birthYear: "1986",
        country: "American",
        identityNo: "15",
        house: 1,
        IQ: 46,
        EQ: 89,
        FQ: 79,
        SQ: 79,
        BQ: 46,
        AQ: 46,
    },
    {
        name: "Winston",
        gender: "male",
        birthYear: "1983",
        country: "China",
        identityNo: "16",
        house: 1,
        IQ: 46,
        EQ: 79,
        FQ: 56,
        SQ: 79,
        BQ: 89,
        AQ: 45
    },
    {
        name: "Nancy",
        gender: "female",
        birthYear: "1985",
        country: "China",
        identityNo: "17",
        house: 1,
        IQ: 46,
        EQ: 89,
        FQ: 46,
        SQ: 98,
        BQ: 54,
        AQ: 32
    },
    {
        name: "Maggie",
        gender: "female",
        birthYear: "1988",
        country: "American",
        identityNo: "18",
        house: 1,
        IQ: 87,
        EQ: 65,
        FQ: 21,
        SQ: 65,
        BQ: 32,
        AQ: 54
    },
    {
        name: "Lisa",
        gender: "female",
        birthYear: "1984",
        country: "China",
        identityNo: "19",
        house: 1,
        IQ: 76,
        EQ: 89,
        FQ: 45,
        SQ: 23,
        BQ: 45,
        AQ: 78
    },
    {
        name: "Cally",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "20",
        house: 1,
        IQ: 56,
        EQ: 78,
        FQ: 56,
        SQ: 12,
        BQ: 78,
        AQ: 54
    },
    {
        name: "Arnold",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "21",
        house: 1,
        IQ: 65,
        EQ: 98,
        FQ: 65,
        SQ: 32,
        BQ: 65,
        AQ: 87
    },
    {
        name: "Andrew",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "22",
        house: 1,
        IQ: 87,
        EQ: 65,
        FQ: 18,
        SQ: 98,
        BQ: 65,
        AQ: 21
    },
    {
        name: "Fiona",
        gender: "female",
        birthYear: "1988",
        country: "China",
        identityNo: "23",
        house: 1,
        IQ: 45,
        EQ: 87,
        FQ: 62,
        SQ: 54,
        BQ: 87,
        AQ: 21
    },
    {
        name: "Cliff",
        gender: "male",
        birthYear: "1988",
        country: "American",
        identityNo: "24",
        house: 1,
        IQ: 98,
        EQ: 98,
        FQ: 65,
        SQ: 98,
        BQ: 65,
        AQ: 98
    },
    {
        name: "Devin",
        gender: "male",
        birthYear: "1984",
        country: "China",
        identityNo: "25",
        house: 1,
        IQ: 87,
        EQ: 87,
        FQ: 87,
        SQ: 87,
        BQ: 87,
        AQ: 87
    },
    {
        name: "Edward",
        gender: "male",
        birthYear: "1985",
        country: "China",
        identityNo: "26",
        house: 1,
        IQ: 76,
        EQ: 89,
        FQ: 45,
        SQ: 65,
        BQ: 87,
        AQ: 51
    },
    {
        name: "Eric",
        gender: "male",
        birthYear: "1987",
        country: "American",
        identityNo: "27",
        house: 1,
        IQ: 98,
        EQ: 65,
        FQ: 87,
        SQ: 26,
        BQ: 32,
        AQ: 68
    },
    {
        name: "Helen",
        gender: "female",
        birthYear: "1985",
        country: "American",
        identityNo: "28",
        house: 1,
        IQ: 64,
        EQ: 98,
        FQ: 62,
        SQ: 98,
        BQ: 32,
        AQ: 85
    },
    {
        name: "Harry",
        gender: "male",
        birthYear: "1988",
        country: "China",
        identityNo: "29",
        house: 1,
        IQ: 87,
        EQ: 65,
        FQ: 87,
        SQ: 51,
        BQ: 85,
        AQ: 87
    },
    {
        name: "Jessie",
        gender: "female",
        birthYear: "1983",
        country: "China",
        identityNo: "30",
        house: 1,
        IQ: 65,
        EQ: 98,
        FQ: 87,
        SQ: 54,
        BQ: 21,
        AQ: 64
    },
    {
        name: "Ivan",
        gender: "male",
        birthYear: "1985",
        country: "American",
        identityNo: "31",
        house: 1,
        IQ: 97,
        EQ: 64,
        FQ: 21,
        SQ: 84,
        BQ: 87,
        AQ: 94
    },
    {
        name: "Mick",
        gender: "male",
        birthYear: "1984",
        country: "American",
        identityNo: "32",
        house: 1,
        IQ: 97,
        EQ: 65,
        FQ: 54,
        SQ: 97,
        BQ: 54,
        AQ: 21
    },
    {
        name: "Norman",
        gender: "male",
        birthYear: "1986",
        country: "China",
        identityNo: "33",
        house: 1,
        IQ: 65,
        EQ: 98,
        FQ: 87,
        SQ: 54,
        BQ: 65,
        AQ: 98
    },
    {
        name: "Nomic",
        gender: "male",
        birthYear: "1986",
        country: "American",
        identityNo: "",
        house: 1,
        IQ: 64,
        EQ: 87,
        FQ: 51,
        SQ: 21,
        BQ: 54,
        AQ: 87
    },
    {
        name: "Rod",
        gender: "male",
        birthYear: "1983",
        country: "China",
        identityNo: "35",
        house: 1,
        IQ: 65,
        EQ: 98,
        FQ: 87,
        SQ: 54,
        BQ: 60,
        AQ: 32
    },
    {
        name: "Betty",
        gender: "female",
        birthYear: "1985",
        country: "China",
        identityNo: "36",
        house: 1,
        IQ: 65,
        EQ: 98,
        FQ: 87,
        SQ: 54,
        BQ: 65,
        AQ: 98
    },
    {
        name: "Celia",
        gender: "female",
        birthYear: "1988",
        country: "American",
        identityNo: "37",
        house: 1,
        IQ: 65,
        EQ: 98,
        FQ: 87,
        SQ: 54,
        BQ: 98,
        AQ: 65
    },
    {
        name: "Hilary",
        gender: "female",
        birthYear: "1984",
        country: "China",
        identityNo: "38",
        house: 1,
        IQ: 65,
        EQ: 98,
        FQ: 54,
        SQ: 21,
        BQ: 54,
        AQ: 87
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
    },
    {
        name: "IQ",
        dimension: Dimension.Value
    },
    {
        name: "EQ",
        dimension: Dimension.Value
    },
    {
        name: "FQ",
        dimension: Dimension.Value
    },
    {
        name: "SQ",
        dimension: Dimension.Value
    },
    {
        name: "BQ",
        dimension: Dimension.Value
    },
    {
        name: "AQ",
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

export let pivotValues: Array<string> = [
    "IQ",
    "EQ",
    "FQ",
    "SQ",
    "BQ",
    "AQ"
]