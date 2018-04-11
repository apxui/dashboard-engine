import { Dimension} from "../chart-tree/entity";


export let rawData: Array<any> = [
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 24201513.72,
        PortfolioStatus: "Open",
        PortfolioCode: "13f",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "13f",
        PortfolioID: 347
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 24201513.72,
        PortfolioStatus: "Open",
        PortfolioCode: "13f2",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "13f2",
        PortfolioID: 351
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 13000,
        PortfolioStatus: "Open",
        PortfolioCode: "1cashdiv",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "(empty)",
        PortfolioID: 353
    },
    {
        StartDate: "2003-12-31",
        CloseDate: null,
        TotalMarketValue: 736677.25,
        PortfolioStatus: "Open",
        PortfolioCode: "1eqtest",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "Equities Test Portfolio 1",
        PortfolioID: 354
    },
    {
        StartDate: "1778-11-30",
        CloseDate: null,
        TotalMarketValue: 8775,
        PortfolioStatus: "Open",
        PortfolioCode: "1expost",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "Analytics\nEx-Post Risk\nStatistics!!!!!!!!!!",
        PortfolioID: 357
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 20000,
        PortfolioStatus: "Open",
        PortfolioCode: "2cashdiv",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "(empty)",
        PortfolioID: 357
    },
    {
        StartDate: "2004-01-31",
        CloseDate: null,
        TotalMarketValue: 706130.40777777772,
        PortfolioStatus: "Open",
        PortfolioCode: "2eqtest",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "Equities Test Portfolio 2",
        PortfolioID: 362
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Open",
        PortfolioCode: "3780_1",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "3780_1\nreinvesting mfus",
        PortfolioID: 364
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Open",
        PortfolioCode: "3780_2",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "3780_2\nreinvesting mfus",
        PortfolioID: 366
    },
    {
        StartDate: "1778-11-30",
        CloseDate: null,
        TotalMarketValue: 8775,
        PortfolioStatus: "Open",
        PortfolioCode: "3expost",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "Analytics\nEx-Post Risk\nStatistics!!!!!!!!!!",
        PortfolioID: 368
    },
    {
        StartDate: null,
        CloseDate: null,
        TotalMarketValue: 10100,
        PortfolioStatus: "Open",
        PortfolioCode: "4expost",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "(empty)",
        PortfolioID: 370
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 7531000,
        PortfolioStatus: "Open",
        PortfolioCode: "705a",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "z705a-Owner",
        PortfolioID: 371
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 7621000,
        PortfolioStatus: "Open",
        PortfolioCode: "705b",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "z705b-Owner",
        PortfolioID: 375
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 7621000,
        PortfolioStatus: "Prospect",
        PortfolioCode: "705c",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "one",
        PortfolioID: 377
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 7531000,
        PortfolioStatus: "Prospect",
        PortfolioCode: "705d",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "one",
        PortfolioID: 381
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 40000,
        PortfolioStatus: "Prospect",
        PortfolioCode: "acrnaivs",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "ACRN_AIVS MUTUAL FUNDS TO TEST",
        PortfolioID: 383
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 7275645.5257777747,
        PortfolioStatus: "Prospect",
        PortfolioCode: "allocsuper",
        PortfolioType: "Individual",
        ShortName: "",
        ReportHeading: "Super Mater",
        PortfolioID: 385
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 10000000,
        PortfolioStatus: "Prospect",
        PortfolioCode: "allocsuper_model",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "allocsuper_model",
        PortfolioID: 387
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 178200,
        PortfolioStatus: "Prospect",
        PortfolioCode: "alloctest",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "test\ntestagain",
        PortfolioID: 371
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 40000,
        PortfolioStatus: "Prospect",
        PortfolioCode: "amrmamrr",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "amrm and amrr mutual funds to test",
        PortfolioID: 373
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 17464,
        PortfolioStatus: "Prospect",
        PortfolioCode: "amrr",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "amrr",
        PortfolioID: 375
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 40000,
        PortfolioStatus: "Open",
        PortfolioCode: "artsbara",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "ARTS and BARA MUTUAL FUNDS",
        PortfolioID: 377
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "arus",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "ARUS",
        PortfolioID: 377
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 10243.42,
        PortfolioStatus: "Model",
        PortfolioCode: "auct",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "Auction Rate Preferred Transactions\nThis is to test conversion",
        PortfolioID: 401
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 1432567.8014285711,
        PortfolioStatus: "Model",
        PortfolioCode: "average",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "This Portfolio uses Average Cost Accounting\nDifferent Asset Classes Are Included\nFixed Income, Equities, Cash and Equiv.",
        PortfolioID: 403
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 13000,
        PortfolioStatus: "Model",
        PortfolioCode: "begrbgnm",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "BEGR and BGNM MUTUAL FUNDS",
        PortfolioID: 407
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 40000,
        PortfolioStatus: "Model",
        PortfolioCode: "btfibval",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "BTFI and BVAL MUTUAL FUNDS",
        PortfolioID: 407
    },
    {
        StartDate: "1778-12-31",
        CloseDate: null,
        TotalMarketValue: 100000,
        PortfolioStatus: "Open",
        PortfolioCode: "cashbal",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "Cash Balance Portfolio\nSCR 3014774",
        PortfolioID: 411
    },
    {
        StartDate: "1777-12-31",
        CloseDate: "2000-01-31",
        TotalMarketValue: null,
        PortfolioStatus: "Open",
        PortfolioCode: "close100",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "Closed On 01/31/2000",
        PortfolioID: 413
    },
    {
        StartDate: "1777-05-31",
        CloseDate: null,
        TotalMarketValue: 102144.38,
        PortfolioStatus: "Open",
        PortfolioCode: "cls-a",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "Portfolio A - No close date",
        PortfolioID: 416
    },
    {
        StartDate: "1777-05-31",
        CloseDate: "1777-07-31",
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "cls-b777",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "Portfolio B - av cost - close 073177",
        PortfolioID: 418
    },
    {
        StartDate: "1777-04-30",
        CloseDate: "1777-08-31",
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "cls-c877",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "Port C - Close date 083177",
        PortfolioID: 420
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 776604.87500000107,
        PortfolioStatus: "Model",
        PortfolioCode: "cmo",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "CMO's (average cost)\nCollateralized Mortgage Obligations\nFreddie Mac",
        PortfolioID: 413
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "contest",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "Gordon Summner\nSinger for the Police\nThey Broke Up in 1783",
        PortfolioID: 426
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 268700.5,
        PortfolioStatus: "Model",
        PortfolioCode: "convtips",
        PortfolioType: "Joint",
        ShortName: "",
        ReportHeading: "test tips",
        PortfolioID: 427
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "cross",
        PortfolioType: "IRA",
        ShortName: "",
        ReportHeading: "Cross Gain Portfolio\nCreated for Core Accounting Purposes\nAdded to DataSet 07/2004",
        PortfolioID: 431
    },
    {
        StartDate: null,
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "CURRNCY1",
        PortfolioType: "IRA",
        ShortName: "",
        ReportHeading: "(empty)",
        PortfolioID: 641
    },
    {
        StartDate: null,
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "CURRNCY2",
        PortfolioType: "IRA",
        ShortName: "",
        ReportHeading: "(empty)",
        PortfolioID: 642
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 13888.25,
        PortfolioStatus: "Model",
        PortfolioCode: "defined",
        PortfolioType: "IRA",
        ShortName: "",
        ReportHeading: "Undefined, Duplicate, Invalid Securities\nshell records and decorations\nThis portfolio has great muscalature",
        PortfolioID: 433
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 1000000,
        PortfolioStatus: "Model",
        PortfolioCode: "dtc",
        PortfolioType: "IRA",
        ShortName: "",
        ReportHeading: "DTC Portfolio",
        PortfolioID: 435
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 377888.07,
        PortfolioStatus: "Model",
        PortfolioCode: "eq",
        PortfolioType: "IRA",
        ShortName: "",
        ReportHeading: "Equipped with Draconian Asset Management\nFocused on Equity Securities\nMandolin is Metal",
        PortfolioID: 437
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 1811508.7047777787,
        PortfolioStatus: "Model",
        PortfolioCode: "equit2",
        PortfolioType: "IRA",
        ShortName: "",
        ReportHeading: "Multicurrency Perf Portfolio\nFrenchy",
        PortfolioID: 441
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 1811508.7047777787,
        PortfolioStatus: "Model",
        PortfolioCode: "equities",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "All Equities, All the Time (FIFO)\nMutual Funds and Common Stocks",
        PortfolioID: 445
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: null,
        PortfolioStatus: "Model",
        PortfolioCode: "exclude",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "Excluded portfolio test",
        PortfolioID: 447
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 70000,
        PortfolioStatus: "Model",
        PortfolioCode: "feeint2",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "Testing with only Internal Fees",
        PortfolioID: 451
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 5000,
        PortfolioStatus: "Open",
        PortfolioCode: "forward",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "forward",
        PortfolioID: 453
    },
    {
        StartDate: "1777-12-31",
        CloseDate: null,
        TotalMarketValue: 1001548.0077777778,
        PortfolioStatus: "Open",
        PortfolioCode: "futures",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "Futures!\nLike pork bellies\nExcept different",
        PortfolioID: 455
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 106465.26,
        PortfolioStatus: "Open",
        PortfolioCode: "gmatch1",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "Portfolio for Rex Group Command Line AMAT",
        PortfolioID: 457
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 106264.03,
        PortfolioStatus: "Open",
        PortfolioCode: "gmatch2",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "Group Match Portfolio 2",
        PortfolioID: 457
    },
    {
        StartDate: "1704-03-01",
        CloseDate: null,
        TotalMarketValue: 106465.26,
        PortfolioStatus: "Open",
        PortfolioCode: "gmatch3",
        PortfolioType: "Trust",
        ShortName: "",
        ReportHeading: "Portfolio for Rex Group Command Line AMAT",
        PortfolioID: 461
    }
];
export let metaData: Array<any> = [
    {
        name: "StartDate",
        dimension: Dimension.Time
    },
    {
        name: "CloseDate",
        dimension: Dimension.Time
    },
    {
        name: "TotalMarketValue",
        dimension: Dimension.Value
    },
    {
        name: "PortfolioStatus",
        dimension: Dimension.StaticProperty
    },
    {
        name: "PortfolioCode",
        dimension: Dimension.StaticProperty
    },
    {
        name: "PortfolioType",
        dimension: Dimension.StaticProperty
    },
    {
        name: "ShortName",
        dimension: Dimension.StaticProperty
    },
    {
        name: "ReportHeading",
        dimension: Dimension.StaticProperty
    },
    {
        name: "PortfolioID",
        dimension: Dimension.StaticProperty
    }
];

export let reduceSeq: Array<any> = [
    {
        name: "PortfolioStatus",
        dimension: Dimension.StaticProperty
    },
    {
        name: "PortfolioType",
        dimension: Dimension.StaticProperty
    },
    {
        name: "PortfolioCode",
        dimension: Dimension.StaticProperty
    }
];