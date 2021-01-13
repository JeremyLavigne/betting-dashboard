const championshipList = [
    {
        id: 'E0', // Indicator for both DB and 'football-data.co.uk'
        name: 'Premier League', // Title to display on UI
        path: 'premier-league', // Path for both react-router and 'betexplorer.com'
        country: 'england', // Indicator for both Navbar and 'football-data.co.uk' path
        season: '2021', // Indicator for 'football-data.co.uk' path
        maxOdd: [4.2, 0, 0], // [ Home, Draw, Away]
        equationsH: [
            [0.01, 0.12, 0.46],
            [-0.01, 0.13, 0.49],
            [0, 0.12, 0.47],
        ], // [ S2[a, b, c]*, S7[a, b, c], S9[a, b, c] ]
        // * x(ratio) => ax² + bx + c (fair Odd)
        equationsD: [[], [], []], // Empty if no equqtions
        equationsA: [[], [], []],
        teamsCheck: [
            ['Manchester Utd', 'Man United'],
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
        maxOdd: [0, 5, 0],
        equationsH: [[], [], []],
        equationsD: [
            [-0.01, 0.02, 0.28],
            [-0.03, -0.01, 0.29],
            [-0.01, 0, 0.28],
        ],
        equationsA: [[], [], []],
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
        maxOdd: [2.4, 5.6, 3.6],
        equationsH: [
            [0.01, 0.06, 0.42],
            [-0.01, 0.11, 0.44],
            [-0.02, 0.05, 0.47],
        ],
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
        teamsCheck: [
            ['Crawley', 'Crawley Town'],
            ['Cambridge Utd', 'Cambridge'],
            ['Newport', 'Newport County'],
            ['Bradford City', 'Bradford'],
        ],
    },
    {
        id: 'SP1',
        name: 'Liga',
        path: 'laliga',
        country: 'spain',
        season: '2021',
        maxOdd: [2.4, 0, 0],
        equationsH: [
            [0.01, 0.11, 0.47],
            [0.01, 0.14, 0.49],
            [0.01, 0.13, 0.47],
        ],
        equationsD: [[], [], []],
        equationsA: [[], [], []],
        teamsCheck: [
            ['Celta Vigo', 'Celta'],
            ['Granada CF', 'Granada'],
            ['Cadiz CF', 'Cadiz'],
            ['Real Sociedad', 'Sociedad'],
            ['Atl. Madrid', 'Ath Madrid'],
        ],
    },
    {
        id: 'I1',
        name: 'Serie A',
        path: 'serie-a',
        country: 'italy',
        season: '2021',
        maxOdd: [2.6, 5, 2.9],
        equationsH: [
            [0.01, 0.15, 0.43],
            [0.01, 0.16, 0.44],
            [0, 0.14, 0.44],
        ],
        equationsD: [
            [-0.03, 0.02, 0.28],
            [-0.03, -0.01, 0.27],
            [-0.01, -0.01, 0.26],
        ],
        equationsA: [
            [0.01, -0.13, 0.3],
            [0.02, -0.16, 0.28],
            [0.01, -0.11, 0.3],
        ],
        teamsCheck: [
            ['AS Roma', 'Roma'],
            ['AC Milan', 'Milan'],
        ],
    },
    {
        id: 'F1',
        name: 'Ligue 1',
        path: 'ligue-1',
        country: 'france',
        season: '2021',
        maxOdd: [2.3, 0, 0],
        equationsH: [
            [0.02, 0.09, 0.44],
            [0.01, 0.16, 0.46],
            [0.02, 0.14, 0.43],
        ],
        equationsD: [[], [], []],
        equationsA: [[], [], []],
        teamsCheck: [],
    },
    {
        id: 'D1',
        name: 'Bundesliga',
        path: 'bundesliga',
        country: 'germany',
        season: '2021',
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
        id: 'SC0',
        name: 'Premiership',
        path: 'premiership',
        country: 'scotland',
        season: '2021',
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
        teamsCheck: [
            ['Dundee Utd', 'Dundee United'],
            ['St. Mirren', 'St Mirren'],
        ],
    },
];

export default championshipList;
