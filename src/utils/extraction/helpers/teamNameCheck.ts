/// ==============================================================================
// === Team names sometimes are different regarding the two sources we use. fix it here
// ==============================================================================

const teamNameCheck = (teamName: string): string => {
    // Premier League
    if (teamName === 'Manchester Utd') {
        return 'Man United';
    }
    if (teamName === 'Sheffield Utd') {
        return 'Sheffield United';
    }
    if (teamName === 'Manchester City') {
        return 'Man City';
    }

    // Liga
    if (teamName === 'Celta Vigo') {
        return 'Celta';
    }
    if (teamName === 'Granada CF') {
        return 'Granada';
    }
    if (teamName === 'Cadiz CF') {
        return 'Cadiz';
    }
    if (teamName === 'Real Sociedad') {
        return 'Sociedad';
    }
    if (teamName === 'Atl. Madrid') {
        return 'Ath Madrid';
    }

    // Serie A
    if (teamName === 'AS Roma') {
        return 'Roma';
    }
    if (teamName === 'AC Milan') {
        return 'Milan';
    }

    // Ligue 1

    // Bundesliga
    if (teamName === 'Arminia Bielefeld') {
        return 'Bielefeld';
    }
    if (teamName === 'B. Monchengladbach') {
        return "M'gladbach";
    }
    if (teamName === 'Eintracht Frankfurt') {
        return 'Ein Frankfurt';
    }
    if (teamName === 'Bayer Leverkusen') {
        return 'Leverkusen';
    }
    if (teamName === 'Hertha Berlin') {
        return 'Hertha';
    }
    if (teamName === 'Schalke') {
        return 'Schalke 04';
    }

    // Championship
    if (teamName === 'Nottingham') {
        return "Nott'm Forest";
    }
    if (teamName === 'Sheffield Wed') {
        return 'Sheffield Weds';
    }

    // League One
    if (teamName === 'Bristol Rovers') {
        return 'Bristol Rvs';
    }
    if (teamName === 'Oxford Utd') {
        return 'Oxford';
    }
    if (teamName === 'Peterborough') {
        return 'Peterboro';
    }

    // League Two
    if (teamName === 'Crawley') {
        return 'Crawley Town';
    }
    if (teamName === 'Cambridge Utd') {
        return 'Cambridge';
    }
    if (teamName === 'Newport') {
        return 'Newport County';
    }
    if (teamName === 'Bradford City') {
        return 'Bradford';
    }

    // Premiership
    if (teamName === 'Dundee Utd') {
        return 'Dundee United';
    }
    if (teamName === 'St. Mirren') {
        return 'St Mirren';
    }

    // If no problem, just return the original one
    return teamName;
};

export default teamNameCheck;
