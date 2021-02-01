const championshipList = [
    {
        id: 'E0', // Indicator for both DB and 'football-data.co.uk'
        name: 'Premier League', // Title to display on UI
        path: 'premier-league', // Path for both react-router and 'betexplorer.com'
        country: 'england', // Indicator for both Navbar and 'betexplorer.com' path
        season: '2021', // Indicator for 'football-data.co.uk' path
        numberOfMatchSeason: 380,
        // Method 1 - Values bets
        minOdd: [1, 0, 0], // [ Home, Draw, Away]
        maxOdd: [4.2, 0, 0], // [ Home, Draw, Away]
        equationsH: [
            [0.01, 0.12, 0.46],
            [-0.01, 0.13, 0.49],
            [0, 0.12, 0.47],
        ], // [ S2[a, b, c]*, S7[a, b, c], S9[a, b, c] ]
        // * x(ratio) => ax² + bx + c (fair Odd)
        equationsD: [[], [], []], // Empty if no equqtions
        equationsA: [[], [], []],
        // Method 2 - odd-based
        fullSeason: [[3.2, 3.5], [], []], // [[minOdd, maxOdd] for Home bet, [..] Draw bet, [..] Away bet]
        firstHalf: [[], [2.8, 3.2], []],
        secondHalf: [[], [], [3.2, 3.5]],
        firstQuarter: [
            [1.4, 1.7],
            [3.2, 3.4],
            [1.8, 2.1],
        ],
        secondQuarter: [[2, 2.3], [4, 4.4], []],
        thirdQuarter: [[2.9, 3.8], [], []],
        lastQuarter: [[1.4, 1.7], [], []],
        teamsCheck: [
            ['Manchester Utd', 'Man United'], // [Betexplorer Name, football-data name]
            ['Sheffield Utd', 'Sheffield United'],
            ['Manchester City', 'Man City'],
        ], // Difference between Betexplorer and football-data team names.
    },
    {
        id: 'E1',
        name: 'Championship',
        path: 'championship',
        country: 'england',
        season: '2021',
        numberOfMatchSeason: 552,
        minOdd: [0, 3, 0],
        maxOdd: [0, 5, 0],
        equationsH: [[], [], []],
        equationsD: [
            [-0.01, 0.02, 0.28],
            [-0.03, -0.01, 0.29],
            [-0.01, 0, 0.28],
        ],
        equationsA: [[], [], []],
        fullSeason: [[], [4.2, 4.4], []],
        firstHalf: [[3.2, 3.5], [], [1.5, 2.1]],
        secondHalf: [[], [], [3.3, 3.6]],
        firstQuarter: [[], [3.4, 3.6], []],
        secondQuarter: [[2.9, 3.2], [], [2.1, 2.4]],
        thirdQuarter: [[3.2, 3.5], [], [2.4, 2.7]],
        lastQuarter: [[], [], [1.8, 2.1]],
        teamsCheck: [
            ['Nottingham', "Nott'm Forest"],
            ['Sheffield Wed', 'Sheffield Weds'],
        ],
    },
    {
        id: 'E2',
        name: 'League One',
        path: 'league-one',
        country: 'england',
        season: '2021',
        numberOfMatchSeason: 552,
        minOdd: [0, 3, 1],
        maxOdd: [0, 5.6, 3.6],
        equationsH: [[], [], []],
        equationsD: [
            [0.02, -0.03, 0.24],
            [0.01, -0.02, 0.25],
            [0.02, 0.02, 0.21],
        ],
        equationsA: [
            [-0.02, -0.05, 0.32],
            [0, -0.08, 0.31],
            [0.01, -0.07, 0.29],
        ],
        fullSeason: [[], [], []],
        firstHalf: [[3.2, 3.8], [], [2.4, 2.7]],
        secondHalf: [[2.6, 2.9], [], []],
        firstQuarter: [[], [3.6, 8], [2.7, 3]],
        secondQuarter: [[1.7, 2], [], []],
        thirdQuarter: [[2.9, 3.2], [], [3.6, 3.9]],
        lastQuarter: [
            [1.4, 1.7],
            [3, 3.2],
            [1.5, 1.8],
        ],
        teamsCheck: [
            ['Bristol Rovers', 'Bristol Rvs'],
            ['Oxford Utd', 'Oxford'],
            ['Peterborough', 'Peterboro'],
        ],
    },
    {
        id: 'E3',
        name: 'League Two',
        path: 'league-two',
        country: 'england',
        season: '2021',
        numberOfMatchSeason: 552,
        minOdd: [1, 3, 0],
        maxOdd: [2.5, 4.3, 0],
        equationsH: [
            [0.01, 0.09, 0.4],
            [-0.02, 0.09, 0.44],
            [0.01, 0.1, 0.4],
        ],
        equationsD: [
            [0.02, -0.04, 0.24],
            [0.04, -0.02, 0.23],
            [-0.01, -0.01, 0.29],
        ],
        equationsA: [[], [], []],
        fullSeason: [[3.5, 3.8], [], [3.6, 3.9]],
        firstHalf: [[], [2.8, 3.2], []],
        secondHalf: [[3.2, 3.5], [], []],
        firstQuarter: [[], [], [2.4, 2.7]],
        secondQuarter: [[], [], [1.8, 2.1]],
        thirdQuarter: [[], [2.8, 3.2], [2.4, 2.7]],
        lastQuarter: [[], [], []],
        teamsCheck: [
            ['Crawley', 'Crawley Town'],
            ['Cambridge Utd', 'Cambridge'],
            ['Newport', 'Newport County'],
            ['Bradford City', 'Bradford'],
        ],
    },
    {
        id: 'EC',
        name: 'Conference',
        path: 'national-league',
        country: 'england',
        season: '2021',
        numberOfMatchSeason: 552,
        minOdd: [1, 0, 1],
        maxOdd: [2.4, 0, 3.4],
        equationsH: [[0.01, 0.1, 0.41], [-0.01, 0.13, 0.44], []],
        equationsD: [[], [], []],
        equationsA: [[-0.02, -0.06, 0.34], [0.02, -0.12, 0.29], []],
        fullSeason: [[], [], []],
        firstHalf: [[3.5, 3.8], [], [3.6, 3.9]],
        secondHalf: [[], [4, 4.2], []],
        firstQuarter: [[], [2.8, 3.2], []],
        secondQuarter: [[], [], []],
        thirdQuarter: [[2.6, 2.9], [], [2.7, 3]],
        lastQuarter: [[], [2.8, 3.2], [1.5, 2.1]],
        teamsCheck: [
            ['FC Halifax', 'Halifax'],
            ['Notts Co', 'Notts County'],
            ['Solihull Moors', 'Solihull'],
            ['Dag & Red', 'Dag and Red'],
            ['Dover', 'Dover Athletic'],
        ],
    },
    {
        id: 'SP1',
        name: 'Liga',
        path: 'laliga',
        country: 'spain',
        season: '2021',
        numberOfMatchSeason: 380,
        minOdd: [1, 0, 0],
        maxOdd: [2.4, 0, 0],
        equationsH: [
            [0.01, 0.11, 0.47],
            [0.01, 0.14, 0.49],
            [0.01, 0.13, 0.47],
        ],
        equationsD: [[], [], []],
        equationsA: [[], [], []],
        fullSeason: [[], [4, 4.2], []],
        firstHalf: [
            [2.9, 3.2],
            [2.8, 3.2],
            [3.6, 3.9],
        ],
        secondHalf: [[3.2, 3.5], [], []],
        firstQuarter: [[], [3.6, 4], []],
        secondQuarter: [[2, 2.3], [], []],
        thirdQuarter: [[2.6, 3.2], [3, 3.2], []],
        lastQuarter: [[1.7, 2], [], [2.7, 3.9]],
        teamsCheck: [
            ['Celta Vigo', 'Celta'],
            ['Granada CF', 'Granada'],
            ['Cadiz CF', 'Cadiz'],
            ['Real Sociedad', 'Sociedad'],
            ['Atl. Madrid', 'Ath Madrid'],
        ],
    },
    {
        id: 'SP2',
        name: 'Liga 2',
        path: 'laliga2',
        country: 'spain',
        season: '2021',
        numberOfMatchSeason: 462,
        minOdd: [1, 3.3, 0],
        maxOdd: [2.2, 4.2, 0],
        equationsH: [[0.04, 0.08, 0.42], [0, 0.13, 0.46], []],
        equationsD: [[-0.03, -0.01, 0.32], [-0.05, -0.05, 0.31], []],
        equationsA: [[], [], []],
        fullSeason: [[], [], []],
        firstHalf: [[], [3.6, 4.4], []],
        secondHalf: [[], [], []],
        firstQuarter: [[2.9, 3.8], [], []],
        secondQuarter: [[], [2.8, 3], []],
        thirdQuarter: [[], [], []],
        lastQuarter: [
            [2.3, 2.6],
            [2.8, 3],
            [2.1, 2.4],
        ],
        teamsCheck: [
            ['Espanyol', 'Espanol'],
            ['Rayo Vallecano', 'Vallecano'],
            ['Gijon', 'Sp Gijon'],
            ['R. Oviedo', 'Oviedo'],
        ],
    },
    {
        id: 'I1',
        name: 'Serie A',
        path: 'serie-a',
        country: 'italy',
        season: '2021',
        numberOfMatchSeason: 380,
        minOdd: [1, 0, 1],
        maxOdd: [2.6, 0, 2.9],
        equationsH: [
            [0.01, 0.15, 0.43],
            [0.01, 0.16, 0.44],
            [0, 0.14, 0.44],
        ],
        equationsD: [[], [], []],
        equationsA: [
            [0.01, -0.13, 0.3],
            [0.02, -0.16, 0.28],
            [0.01, -0.11, 0.3],
        ],
        fullSeason: [[], [], []],
        firstHalf: [
            [2.3, 2.6],
            [4.2, 4.4],
            [2.1, 2.4],
        ],
        secondHalf: [[], [], []],
        firstQuarter: [[1.7, 2], [], [2.4, 2.7]],
        secondQuarter: [[], [3.2, 3.4], [1.8, 2.1]],
        thirdQuarter: [
            [2.9, 3.5],
            [3.2, 3.4],
            [1.8, 2.1],
        ],
        lastQuarter: [[], [2.8, 3.2], [2.1, 2.4]],
        teamsCheck: [
            ['AS Roma', 'Roma'],
            ['AC Milan', 'Milan'],
        ],
    },
    {
        id: 'I2',
        name: 'Serie B',
        path: 'serie-b',
        country: 'italy',
        season: '2021',
        numberOfMatchSeason: 380,
        minOdd: [2.4, 0, 0],
        maxOdd: [3.2, 0, 0],
        equationsH: [[0, 0.05, 0.45], [-0.02, 0.15, 0.44], []],
        equationsD: [[], [], []],
        equationsA: [[], [], []],
        fullSeason: [[], [], []],
        firstHalf: [[], [], []],
        secondHalf: [[], [], [1.5, 2.1]],
        firstQuarter: [[2.9, 3.5], [3.4, 3.6], []],
        secondQuarter: [[2.6, 2.9], [], []],
        thirdQuarter: [[], [], [2.7, 3]],
        lastQuarter: [[], [], [2.4, 2.7]],
        teamsCheck: [
            ['L.R. Vicenza', 'Vicenza'],
            ['Entella', 'Virtus Entella'],
        ],
    },
    {
        id: 'F1',
        name: 'Ligue 1',
        path: 'ligue-1',
        country: 'france',
        season: '2021',
        numberOfMatchSeason: 380,
        minOdd: [0, 0, 0],
        maxOdd: [0, 0, 0],
        equationsH: [[], [], []],
        equationsD: [[], [], []],
        equationsA: [[], [], []],
        fullSeason: [[], [], [2.1, 2.4]],
        firstHalf: [[], [2.8, 3], []],
        secondHalf: [[], [], []],
        firstQuarter: [
            [2, 2.3],
            [3.6, 4.2],
            [2.4, 3],
        ],
        secondQuarter: [[2.3, 2.6], [], [1.5, 2.1]],
        thirdQuarter: [[], [], [3, 3.3]],
        lastQuarter: [[2.6, 2.9], [], [2.4, 2.7]],
        teamsCheck: [],
    },
    {
        id: 'F2',
        name: 'Ligue 2',
        path: 'ligue-2',
        country: 'france',
        season: '2021',
        numberOfMatchSeason: 380,
        minOdd: [0, 0, 0],
        maxOdd: [0, 0, 0],
        equationsH: [[], [], []],
        equationsD: [[], [], []],
        equationsA: [[], [], []],
        fullSeason: [[], [], []],
        firstHalf: [[2.6, 2.9], [], [1.5, 2.4]],
        secondHalf: [[], [], [2.1, 2.4]],
        firstQuarter: [[], [], []],
        secondQuarter: [[1.7, 2], [], []],
        thirdQuarter: [[], [], []],
        lastQuarter: [[], [2.8, 3], [2.4, 2.7]],
        teamsCheck: [['AC Ajaccio', 'Ajaccio']],
    },
    {
        id: 'D1',
        name: 'Bundesliga',
        path: 'bundesliga',
        country: 'germany',
        season: '2021',
        numberOfMatchSeason: 306,
        minOdd: [1, 3, 1],
        maxOdd: [2.6, 5.5, 3.4],
        equationsH: [
            [0, 0.11, 0.45],
            [0, 0.14, 0.45],
            [-0.01, 0.11, 0.46],
        ],
        equationsD: [
            [-0.01, 0, 0.25],
            [-0.02, -0.01, 0.25],
            [-0.01, 0.01, 0.26],
        ],
        equationsA: [
            [0.01, -0.11, 0.31],
            [0.02, -0.14, 0.29],
            [0.01, -0.12, 0.3],
        ],
        fullSeason: [[], [], []],
        firstHalf: [[3.5, 3.8], [4.2, 4.4], []],
        secondHalf: [[2.9, 3.5], [], []],
        firstQuarter: [
            [2.9, 3.5],
            [3.6, 4],
            [3, 3.9],
        ],
        secondQuarter: [
            [2.6, 3.5],
            [3.6, 4],
            [3, 3.6],
        ],
        thirdQuarter: [[], [4, 4.4], []],
        lastQuarter: [[2.3, 2.6], [], [1.8, 2.4]],
        teamsCheck: [
            ['Arminia Bielefeld', 'Bielefeld'],
            ['B. Monchengladbach', "M'gladbach"],
            ['Eintracht Frankfurt', 'Ein Frankfurt'],
            ['Bayer Leverkusen', 'Leverkusen'],
            ['Hertha Berlin', 'Hertha'],
            ['Schalke', 'Schalke 04'],
        ],
    },
    {
        id: 'D2',
        name: 'Bundesliga 2',
        path: '2-bundesliga',
        country: 'germany',
        season: '2021',
        numberOfMatchSeason: 306,
        minOdd: [2.5, 3, 0],
        maxOdd: [5, 4, 0],
        equationsH: [[0.01, 0.14, 0.42], [0.01, 0.17, 0.42], []],
        equationsD: [[0.02, -0.05, 0.27], [-0.01, -0.05, 0.29], []],
        equationsA: [[], [], []],
        fullSeason: [[], [], []],
        firstHalf: [[], [], []],
        secondHalf: [[3.2, 3.8], [], []],
        firstQuarter: [[1.4, 1.7], [], []],
        secondQuarter: [[], [3.6, 4], [1.8, 2.4]],
        thirdQuarter: [
            [2.3, 2.6],
            [3.6, 4],
            [3.6, 3.9],
        ],
        lastQuarter: [[2.6, 2.9], [2.8, 3.2], []],
        teamsCheck: [
            ['Hamburger SV', 'Hamburg'],
            ['Karlsruher', 'Karlsruhe'],
            ['Dusseldorf', 'Fortuna Dusseldorf'],
            ['Aue', 'Erzgebirge Aue'],
            ['VfL Osnabruck', 'Osnabruck'],
            ['St. Pauli', 'St Pauli'],
        ],
    },
    {
        id: 'SC0',
        name: 'Premiership',
        path: 'premiership',
        country: 'scotland',
        season: '2021',
        numberOfMatchSeason: 208,
        minOdd: [0, 3, 1],
        maxOdd: [0, 8, 3.3],
        equationsH: [[], [], []],
        equationsD: [
            [-0.02, 0.02, 0.25],
            [-0.02, -0.02, 0.25],
            [-0.02, 0, 0.27],
        ],
        equationsA: [
            [0.01, -0.13, 0.33],
            [0.01, -0.15, 0.33],
            [0.01, -0.12, 0.33],
        ],
        fullSeason: [[], [], []],
        firstHalf: [[], [2.8, 3.2], [1.5, 1.8]],
        secondHalf: [[2.9, 3.2], [], []],
        firstQuarter: [[], [], [2.4, 3]],
        secondQuarter: [[], [], [2.1, 3.3]],
        thirdQuarter: [[], [3.2, 3.4], [3.3, 3.9]],
        lastQuarter: [[2.9, 3.8], [], [2.7, 3]],
        teamsCheck: [
            ['Dundee Utd', 'Dundee United'],
            ['St. Mirren', 'St Mirren'],
        ],
    },
    {
        id: 'SC1',
        name: 'Sc. Championship',
        path: 'championship',
        country: 'scotland',
        season: '2021',
        numberOfMatchSeason: 135,
        minOdd: [0, 3, 1],
        maxOdd: [0, 4.8, 3.3],
        equationsH: [[], [], []],
        equationsD: [[-0.02, -0.02, 0.28], [-0.03, -0.02, 0.28], []],
        equationsA: [[0.03, -0.11, 0.31], [0, -0.13, 0.35], []],
        fullSeason: [[], [4.2, 4.4], []],
        firstHalf: [[], [], [2.4, 2.7]],
        secondHalf: [
            [2.9, 3.2],
            [3.6, 4],
            [3, 3.3],
        ],
        firstQuarter: [[], [], [2.7, 3.3]],
        secondQuarter: [[], [], []],
        thirdQuarter: [[], [], []],
        lastQuarter: [[], [], [3.3, 3.9]],
        teamsCheck: [
            ['Raith', 'Raith Rvs'],
            ['Dundee FC', 'Dundee'],
            ['Queen of South', 'Queen of Sth'],
            ['Inverness', 'Inverness C'],
        ],
    },
    {
        id: 'SC2',
        name: 'Sc. League One',
        path: 'league-one',
        country: 'scotland',
        season: '2021',
        numberOfMatchSeason: 135,
        minOdd: [2.2, 0, 1],
        maxOdd: [4, 0, 3.3],
        equationsH: [[0.03, 0.1, 0.4], [0, 0.13, 0.45], []],
        equationsD: [[], [], []],
        equationsA: [[-0.01, -0.11, 0.36], [0.01, -0.13, 0.33], []],
        fullSeason: [[], [], []],
        firstHalf: [[3.2, 3.8], [], []],
        secondHalf: [[2.9, 3.2], [], [3.6, 3.9]],
        firstQuarter: [[1.7, 2], [], [2.1, 2.4]],
        secondQuarter: [[], [], [2.1, 2.7]],
        thirdQuarter: [[], [3.4, 3.6], [2.7, 3.3]],
        lastQuarter: [[1.4, 1.7], [], [3, 3.6]],
        teamsCheck: [
            ['Airdrieonians', 'Airdrie Utd'],
            ['Partick Thistle', 'Partick'],
            ['Forfar Athletic', 'Forfar'],
        ],
    },
    // { TEMPLATE
    //     id: '',
    //     name: '',
    //     path: '',
    //     country: '',
    //     season: '2021',
    //     numberOfMatchSeason: ,
    //     minOdd: [0, 0, 0],
    //     maxOdd: [0, 0, 0],
    //     equationsH: [[], [], []],
    //     equationsD: [[], [], []],
    //     equationsA: [[], [], []],
    //     fullSeason: [[], [], []],
    //     firstHalf: [[], [], []],
    //     secondHalf: [[], [], []],
    //     firstQuarter: [[], [], []],
    //     secondQuarter: [[], [], []],
    //     thirdQuarter: [[], [], []],
    //     lastQuarter: [[], [], []],
    //     teamsCheck: [
    //         ['', ''],
    //         ['', ''],
    //         ['', ''],
    //     ],
    // },
];

export default championshipList;
