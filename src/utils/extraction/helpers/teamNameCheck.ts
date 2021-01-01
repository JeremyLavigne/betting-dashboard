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

    // If no problem, just return the original one
    return teamName;
};

export default teamNameCheck;
