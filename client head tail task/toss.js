let players = [{ name: "player-1", Points: 0 }, { name: "You", Points: 0 }]
totalMatches = 10
Round = 1

matchesResultAssigning((possibilitiesOfHeadOrTails(totalMatches)), players, 5)
function matchesResultAssigning(PossibleOutcome, player, totalRounds) {
    let eachRoundDetails = []
    let eachRoundResult = []
    for (eachMatches = 0; eachMatches <= totalMatches - 1; eachMatches++) {
        if (PossibleOutcome[eachMatches] == 1) {

            const eachMatchDetails = {
                MATCH: eachMatches + 1,
                PLAYER1NAME: player[0].name,
                PLAYER1: 'HEAD',
                PLAYER1POINTS: 1,
                PLAYER2NAME: player[1].name,
                PLAYER2: 'FLOWER',
                PLAYER2POINTS: 0
            }
            eachRoundDetails.push(eachMatchDetails)
            player[0].Points += 1

        } else if (PossibleOutcome[eachMatches] == 2) {
            const eachMatchDetails = {
                MATCH: eachMatches + 1,
                PLAYER1NAME: player[0].name,
                PLAYER1: 'FLOWER',
                PLAYER1POINTS: 0,
                PLAYER2NAME: player[1].name,
                PLAYER2: 'HEAD',
                PLAYER2POINTS: 1
            }
            eachRoundDetails.push(eachMatchDetails)
            player[1].Points += 1
        }
    }

    const newNumber = totalRounds - 1;
    eachMatchPlayerAResult = eachRoundDetails.reduce((a, b) => a + b.PLAYER1POINTS, 0)
    eachMatchPlayerBResult = eachRoundDetails.reduce((a, b) => a + b.PLAYER2POINTS, 0)

    const eachRoundResultA = {
        name: "player-1",
        Points: eachMatchPlayerAResult
    }
    eachRoundResult.push(eachRoundResultA)

    const eachRoundResultB = {
        name: "YOU",
        Points: eachMatchPlayerBResult
    }
    eachRoundResult.push(eachRoundResultB)

    if (newNumber > 0) { //RESCURSIVE FUNCTION
        setTimeout(() => {
            console.table(`ROUND ${Round}`);
            console.table(eachRoundDetails);
            console.log('-------------------------------------------------------------');

            console.table(`ROUND ${Round} RESULT`);
            console.table(eachRoundResult)
            summary(eachRoundResult)
            console.log('-------------------------------------------------------------');

            Round++
            console.table(`OVERALL ROUND GAME RESULT`)
            console.table(player);
            setTimeout(() => {
                summary(player)
                console.log('-------------------------------------------------------------');
                console.log('-------------------------------------------------------------');

                matchesResultAssigning((possibilitiesOfHeadOrTails(totalMatches)), players, newNumber)
            }, 500);
        }, 1000)
    }

}

function possibilitiesOfHeadOrTails(Matches) {
    possibleOutcomeResult = []
    for (everyMatch = 0; everyMatch <= Matches - 1; everyMatch++) {
        let foundedResult = Math.floor((Math.random() * 2) + 1);
        possibleOutcomeResult.push(foundedResult)
    }
    return possibleOutcomeResult
}
(possibilitiesOfHeadOrTails(totalMatches))

function summary(player) {
    player[0].Points > player[1].Points && console.table(`Player ${player[0].name} leads ${player[0].Points} Heads`);
    player[0].Points < player[1].Points && console.table(`Player ${player[1].name} leads ${player[1].Points} Heads`);
    player[0].Points == player[1].Points && console.table(`Both Player ${player[0].name} & ${player[1].name} have ${player[0].Points}Heads`)}